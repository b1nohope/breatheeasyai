'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* Terminal replay script — verbatim from the approved design. */
const replayScript = [
  { t: '09:02:14', m: '<span class="dim">inbound</span> new email · <span class="dim">"Can I get an itemized invoice for May?"</span>' },
  { t: '09:02:15', m: 'reading thread context <span class="dim">(3 messages)</span>…' },
  { t: '09:02:16', m: 'classify → <span class="chip">ACCOUNTS RECEIVABLE</span> <span class="chip">CUSTOMER</span> <span class="chip">REPLY NEEDED</span>' },
  { t: '09:02:16', m: '<span class="ok">✓</span> labels applied · <span class="dim">AI/A-R, AI/Triaged</span>' },
  { t: '09:02:17', m: 'matching sender to client records… <span class="ok">✓ matched</span>' },
  { t: '09:02:18', m: 'creating task → assigned to <span class="warm">the right bookkeeper</span>, due Friday' },
  { t: '09:02:21', m: 'drafting reply in the firm’s voice…' },
  { t: '09:02:24', m: '<span class="ok">✓ draft saved</span> — waiting for <span class="chip warm">HUMAN REVIEW</span> before anything sends' },
  { t: '09:02:24', m: '<span class="dim">time saved on this email: ~9 min</span>' },
];

export default function SiteEffects() {
  const pathname = usePathname();

  /* Persistent effects: neural canvas, spotlight, site-in gate. Run once. */
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: Array<() => void> = [];

    // Deep links skip the splash ceremony — only the home page mounts the
    // splash gate; everywhere else the site shows immediately.
    if (!document.getElementById('splash')) {
      document.body.classList.add('site-in');
    }

    if (!reduced) {
      /* spotlight */
      const spot = document.getElementById('spotlight');
      if (spot) {
        const move = (e: PointerEvent) => {
          spot.style.setProperty('--mx', e.clientX + 'px');
          spot.style.setProperty('--my', e.clientY + 'px');
        };
        addEventListener('pointermove', move);
        cleanups.push(() => removeEventListener('pointermove', move));
      }

      /* neural network background */
      const nc = document.getElementById('netCanvas') as HTMLCanvasElement | null;
      const ctx = nc?.getContext('2d');
      if (nc && ctx) {
        let w = 0;
        let h = 0;
        const size = () => {
          w = nc.width = innerWidth;
          h = nc.height = innerHeight;
        };
        size();
        addEventListener('resize', size);
        cleanups.push(() => removeEventListener('resize', size));
        const N = innerWidth < 760 ? 36 : 64;
        const nodes = Array.from({ length: N }, () => ({
          x: Math.random() * innerWidth,
          y: Math.random() * innerHeight,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
        }));
        let raf = 0;
        (function loop() {
          ctx.clearRect(0, 0, w, h);
          for (const n of nodes) {
            n.x += n.vx;
            n.y += n.vy;
            if (n.x < 0 || n.x > w) n.vx *= -1;
            if (n.y < 0 || n.y > h) n.vy *= -1;
          }
          for (let i = 0; i < N; i++)
            for (let j = i + 1; j < N; j++) {
              const a = nodes[i],
                b = nodes[j],
                d = Math.hypot(a.x - b.x, a.y - b.y);
              if (d < 150) {
                ctx.strokeStyle = `rgba(111,255,224,${(1 - d / 150) * 0.12})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
              }
            }
          for (const n of nodes) {
            ctx.fillStyle = 'rgba(111,255,224,.35)';
            ctx.beginPath();
            ctx.arc(n.x, n.y, 1.4, 0, 7);
            ctx.fill();
          }
          raf = requestAnimationFrame(loop);
        })();
        cleanups.push(() => cancelAnimationFrame(raf));
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  /* Per-page effects: decrypt, card glow, tilt, magnetic, ticker, reveal,
     terminal replay. Re-bind on every navigation; clean up to avoid
     double-binding on persistent elements (nav, footer). */
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = matchMedia('(pointer:fine)').matches;
    const cleanups: Array<() => void> = [];
    const timers = new Set<ReturnType<typeof setTimeout>>();
    // Each running decrypt keeps its target and final markup so a cancelled
    // animation can be snapped to the finished headline on cleanup.
    const decrypts: Array<{
      iv: ReturnType<typeof setInterval>;
      h: HTMLElement;
      final: string;
    }> = [];

    const on = <K extends keyof HTMLElementEventMap>(
      el: HTMLElement | Window,
      type: string,
      fn: (e: HTMLElementEventMap[K]) => void,
    ) => {
      el.addEventListener(type, fn as EventListener);
      cleanups.push(() => el.removeEventListener(type, fn as EventListener));
    };

    /* =================== HEADLINE DECRYPT =================== */
    document.querySelectorAll<HTMLElement>('h1[data-final]').forEach((h) => {
      const final = h.dataset.final;
      if (!final) return;
      if (reduced) {
        h.innerHTML = final;
        return;
      }
      const tmp = document.createElement('div');
      tmp.innerHTML = final;
      const plain = tmp.textContent || '';
      const glyphs = '01<>/\\|=+*#%@$&';
      let frame = 0;
      const total = 26;
      const iv = setInterval(() => {
        frame++;
        const reveal = Math.floor((frame / total) * plain.length);
        let out = '';
        for (let i = 0; i < plain.length; i++) {
          out +=
            i < reveal
              ? plain[i]
              : plain[i] === ' '
                ? ' '
                : glyphs[(Math.random() * glyphs.length) | 0];
        }
        h.textContent = out;
        if (frame >= total) {
          clearInterval(iv);
          h.innerHTML = final;
        }
      }, 42);
      decrypts.push({ iv, h, final });
    });

    /* =================== CARD GLOW / TILT / MAGNETIC =================== */
    if (!reduced) {
      document.querySelectorAll<HTMLElement>('.card').forEach((c) => {
        on<'pointermove'>(c, 'pointermove', (e) => {
          const r = c.getBoundingClientRect();
          c.style.setProperty('--cx', e.clientX - r.left + 'px');
          c.style.setProperty('--cy', e.clientY - r.top + 'px');
        });
      });
      if (finePointer) {
        document.querySelectorAll<HTMLElement>('.terminal').forEach((term) => {
          const tilt = term.parentElement;
          if (!tilt) return;
          on<'pointermove'>(tilt, 'pointermove', (e) => {
            const r = tilt.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5,
              py = (e.clientY - r.top) / r.height - 0.5;
            term.style.transform = `rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`;
          });
          on<'pointerleave'>(tilt, 'pointerleave', () => {
            term.style.transform = 'rotateY(0) rotateX(0)';
          });
        });
        document.querySelectorAll<HTMLElement>('.magnetic').forEach((b) => {
          on<'pointermove'>(b, 'pointermove', (e) => {
            const r = b.getBoundingClientRect();
            b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
          });
          on<'pointerleave'>(b, 'pointerleave', () => {
            b.style.transform = '';
          });
        });
      }
    }

    /* =================== TERMINAL REPLAY (multi-instance) =================== */
    const startReplay = (body: HTMLElement) => {
      function line(item: { t: string; m: string }) {
        const d = document.createElement('div');
        d.className = 'tline';
        d.innerHTML =
          '<span class="ts">' + item.t + '</span><span class="msg">' + item.m + '</span>';
        body.appendChild(d);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => d.classList.add('show')),
        );
      }
      (function cycle() {
        body.innerHTML = '';
        if (reduced) {
          replayScript.forEach(line);
          return;
        }
        let i = 0;
        const cur = document.createElement('div');
        cur.className = 'tline show';
        cur.innerHTML =
          '<span class="ts">&nbsp;</span><span class="msg"><span class="cursor"></span></span>';
        (function step() {
          if (i < replayScript.length) {
            line(replayScript[i]);
            body.appendChild(cur);
            i++;
            timers.add(setTimeout(step, 650 + Math.random() * 500));
          } else {
            timers.add(setTimeout(cycle, 6000));
          }
        })();
      })();
    };
    document.querySelectorAll<HTMLElement>('.term-body').forEach(startReplay);

    /* =================== TICKER + REVEALS =================== */
    document.querySelectorAll<HTMLElement>('.ticker-track').forEach((track) => {
      if (!track.dataset.dup) {
        track.innerHTML += track.innerHTML;
        track.dataset.dup = '1';
      }
    });

    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    return () => {
      cleanups.forEach((fn) => fn());
      timers.forEach(clearTimeout);
      // A cancelled decrypt must always land on the final headline, never
      // stranded glyphs. Setting it post-completion is a harmless no-op, and
      // the next effect run restarts the animation from data-final.
      decrypts.forEach(({ iv, h, final }) => {
        clearInterval(iv);
        h.innerHTML = final;
      });
    };
  }, [pathname]);

  return (
    <>
      <canvas id="netCanvas" aria-hidden="true" />
      <div id="spotlight" aria-hidden="true" />
    </>
  );
}
