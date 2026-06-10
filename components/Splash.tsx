'use client';

import { useEffect, useState } from 'react';

export default function Splash() {
  // If the site has already been entered (client-side navigation back to
  // home), skip the ceremony entirely. On a fresh load body lacks the class
  // on both server and client, so hydration stays consistent.
  const [gone, setGone] = useState(
    () =>
      typeof document !== 'undefined' &&
      document.body.classList.contains('site-in'),
  );

  useEffect(() => {
    if (gone) return;
    const splash = document.getElementById('splash');
    if (!splash) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const img = document.getElementById('splashLogo');
    let entered = false;
    const timers: Array<ReturnType<typeof setTimeout>> = [];
    let raf = 0;

    /* =================== SIMPLE 3D LOGO =================== */
    let mx = 0,
      my = 0;
    const onMove = (e: PointerEvent) => {
      mx = e.clientX / innerWidth - 0.5;
      my = e.clientY / innerHeight - 0.5;
    };
    const onLeave = () => {
      mx = 0;
      my = 0;
    };
    if (img && !reduced) {
      splash.addEventListener('pointermove', onMove);
      splash.addEventListener('pointerleave', onLeave);
      const tick = (now: number) => {
        if (entered) return;
        raf = requestAnimationFrame(tick);
        const t = now * 0.001;
        // gentle idle sway + mouse-follow tilt + soft bob
        const ry = Math.sin(t * 0.6) * 7 + mx * 22;
        const rx = Math.cos(t * 0.45) * 4 - my * 14;
        const ty = Math.sin(t * 0.8) * 8;
        img.style.transform = `rotateY(${ry}deg) rotateX(${rx}deg) translateY(${ty}px)`;
      };
      raf = requestAnimationFrame(tick);
    }

    /* =================== ENTER SEQUENCE / GATE =================== */
    const enter = () => {
      if (entered) return;
      entered = true;
      splash.classList.add('boot');
      const delay = reduced ? 0 : 700;
      timers.push(
        setTimeout(() => {
          splash.classList.add('exit');
          document.body.classList.add('site-in');
          timers.push(setTimeout(() => setGone(true), 1000));
        }, delay),
      );
    };

    const onClick = () => enter();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') enter();
    };
    splash.addEventListener('click', onClick);
    splash.addEventListener('keydown', onKey);

    if (reduced) {
      timers.push(setTimeout(enter, 1200));
    } else {
      requestAnimationFrame(() => splash.classList.add('arming'));
      timers.push(setTimeout(enter, 10000));
    }
    timers.push(setTimeout(enter, 14000)); // failsafe

    return () => {
      entered = true; // stops the rAF loop
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      splash.removeEventListener('click', onClick);
      splash.removeEventListener('keydown', onKey);
      splash.removeEventListener('pointermove', onMove);
      splash.removeEventListener('pointerleave', onLeave);
    };
  }, [gone]);

  if (gone) return null;

  return (
    <div id="splash" role="button" tabIndex={0} aria-label="Enter the BreatheEzAI site">
      <div className="splash-flash" aria-hidden="true"></div>
      <div className="splash-core">
        <div className="logo3d-stage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img id="splashLogo" src="/logo-transparent.png" alt="BreatheEzAI logo" />
          <div className="logo-floor" aria-hidden="true"></div>
        </div>
        <div className="splash-brand">
          BREATHE<span className="ez">EZ</span>AI
        </div>
        <div className="splash-sub">I.T. made Ez</div>
        <div className="splash-enter">Click to enter</div>
        <div className="splash-auto">
          <span>auto</span>
          <span className="auto-bar">
            <i></i>
          </span>
        </div>
      </div>
    </div>
  );
}
