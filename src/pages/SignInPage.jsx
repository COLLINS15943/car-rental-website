import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignInPage.css";

/* ─── particle helpers ─── */
function rand(min, max) { return Math.random() * (max - min) + min; }

function createParticle(canvas, x, y, color) {
  const ctx = canvas.getContext("2d");
  const angle = rand(0, Math.PI * 2);
  const speed = rand(4, 13);
  const size = rand(3, 9);
  const life = rand(50, 90);
  let frame = 0, px = x, py = y;
  let vx = Math.cos(angle) * speed;
  let vy = Math.sin(angle) * speed;
  const alpha0 = rand(0.7, 1);
  return {
    tick() {
      frame++; px += vx; py += vy; vy += 0.18; vx *= 0.97;
      const a = alpha0 * (1 - frame / life);
      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(px, py, Math.max(0, size * (1 - frame / life)), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      return frame < life;
    }
  };
}

function burst(canvas, x, y, colors, count = 90) {
  const particles = Array.from({ length: count }, () =>
    createParticle(canvas, x, y, colors[Math.floor(rand(0, colors.length))])
  );
  function loop() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const alive = particles.filter(p => p.tick());
    if (alive.length) requestAnimationFrame(loop);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  requestAnimationFrame(loop);
}

/* ─── floating sparks for the orange panel ─── */
function initPanelSparks(canvas) {
  const ctx = canvas.getContext("2d");
  const sparks = Array.from({ length: 40 }, () => ({
    x: rand(0, canvas.width),
    y: rand(0, canvas.height),
    r: rand(1, 3),
    speed: rand(0.2, 0.7),
    alpha: rand(0.08, 0.28),
    drift: rand(-0.2, 0.2),
  }));
  let animId;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparks.forEach(s => {
      s.y -= s.speed;
      s.x += s.drift;
      if (s.y < -4) { s.y = canvas.height + 4; s.x = rand(0, canvas.width); }
      ctx.save();
      ctx.globalAlpha = s.alpha;
      ctx.fillStyle = "white";
      ctx.shadowColor = "white";
      ctx.shadowBlur = 4;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    animId = requestAnimationFrame(draw);
  }
  draw();
  return () => cancelAnimationFrame(animId);
}

/* ─── Component ─── */
const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phase, setPhase] = useState("idle");
  const [shake, setShake] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [eyeOpen, setEyeOpen] = useState(false);
  const [focused, setFocused] = useState(null);

  const panelCanvasRef = useRef(null);
  const fxCanvasRef = useRef(null);
  const cardRef = useRef(null);
  const submitRef = useRef(null);

  /* resize canvases */
  useEffect(() => {
    const resize = () => {
      [fxCanvasRef].forEach(ref => {
        if (ref.current) {
          ref.current.width = window.innerWidth;
          ref.current.height = window.innerHeight;
        }
      });
      if (panelCanvasRef.current) {
        panelCanvasRef.current.width = panelCanvasRef.current.offsetWidth || 500;
        panelCanvasRef.current.height = panelCanvasRef.current.offsetHeight || 800;
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* sparks on the orange panel */
  useEffect(() => {
    const canvas = panelCanvasRef.current;
    if (!canvas) return;
    const stop = initPanelSparks(canvas);
    return stop;
  }, []);

  /* 3D card tilt */
  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    card.style.transform = `perspective(900px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) translateZ(8px)`;
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (cardRef.current)
      cardRef.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)";
  }, []);

  /* field ripple */
  const addRipple = (fieldId) => {
    const id = Date.now();
    setRipples(prev => [...prev, { id, fieldId }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700);
  };

  /* submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setShake(true); setPhase("error");
      setTimeout(() => { setShake(false); setPhase("idle"); }, 700);
      return;
    }
    const btn = submitRef.current, canvas = fxCanvasRef.current;
    if (btn && canvas) {
      const rect = btn.getBoundingClientRect();
      burst(canvas, rect.left + rect.width / 2, rect.top + rect.height / 2,
        ["#ff3c00", "#ff7a00", "#ff5500", "#ffaa00", "#ff6a00", "#ffd000"]);
    }
    setPhase("loading");
    await new Promise(r => setTimeout(r, 1800));
    setPhase("success");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="sip-root">
      {/* particle fx canvas — fullscreen, above everything */}
      <canvas ref={fxCanvasRef} className="sip-fx-canvas" />

      {/* ── Left orange brand panel ── */}
      <div className="sip-panel">
        <canvas ref={panelCanvasRef} className="sip-panel-bg-canvas" />

        <div className="sip-panel-content">
          {/* Brand logo */}
          <div className="sip-panel-logo">
            <div className="sip-panel-logo-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-4.66l.12-.34h13.77l.11.34V17zM7.5 15c.83 0 1.5-.67 1.5-1.5S8.33 12 7.5 12 6 12.67 6 13.5 6.67 15 7.5 15zm9 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
              </svg>
            </div>
            <span className="sip-panel-brand">CarRental</span>
          </div>

          <h2 className="sip-panel-heading">Drive in<br />style, every<br />time.</h2>
          <p className="sip-panel-sub">
            Access your account to manage bookings, track your rentals, and explore exclusive deals.
          </p>
        </div>

        <div className="sip-panel-features">
          <div className="sip-panel-feature">
            <span className="sip-feature-dot" />
            <span className="sip-feature-text">Instant booking confirmation</span>
          </div>
          <div className="sip-panel-feature">
            <span className="sip-feature-dot" />
            <span className="sip-feature-text">500+ premium vehicles available</span>
          </div>
          <div className="sip-panel-feature">
            <span className="sip-feature-dot" />
            <span className="sip-feature-text">24/7 roadside assistance</span>
          </div>
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div className="sip-form-side">
        {/* back button */}
        <button className="sip-back" onClick={() => navigate("/")} aria-label="Back to home">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
          Back
        </button>

        {/* card */}
        <div
          ref={cardRef}
          className={`sip-card ${shake ? "sip-card--shake" : ""} ${phase === "success" ? "sip-card--success" : ""}`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* header */}
          <div className="sip-header">
            <div className="sip-logo-wrap">
              <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-4.66l.12-.34h13.77l.11.34V17zM7.5 15c.83 0 1.5-.67 1.5-1.5S8.33 12 7.5 12 6 12.67 6 13.5 6.67 15 7.5 15zm9 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
              </svg>
            </div>
            <h1 className="sip-title">Welcome back</h1>
            <p className="sip-subtitle">Sign in to your <span className="sip-brand">CarRental</span> account</p>
          </div>

          {/* success state */}
          {phase === "success" && (
            <div className="sip-success">
              <div className="sip-checkmark">
                <svg viewBox="0 0 52 52" fill="none">
                  <circle className="sip-check-circle" cx="26" cy="26" r="25" stroke="#ff3c00" strokeWidth="2" />
                  <path className="sip-check-tick" d="M14 27l8 8 16-16" stroke="#ff3c00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="sip-success-text">You&apos;re in! Redirecting…</p>
            </div>
          )}

          {/* form */}
          <form
            className={`sip-form ${phase === "success" ? "sip-form--hidden" : ""}`}
            onSubmit={handleSubmit}
            noValidate
          >
            {/* email */}
            <div className={`sip-field ${focused === "email" ? "sip-field--focused" : ""} ${phase === "error" && !email ? "sip-field--err" : ""}`}>
              {ripples.filter(r => r.fieldId === "email").map(r => <span key={r.id} className="sip-ripple" />)}
              <label className="sip-label" htmlFor="sip-email">Email address</label>
              <div className="sip-input-wrap">
                <svg className="sip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  id="sip-email"
                  className="sip-input"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => { setFocused("email"); addRipple("email"); }}
                  onBlur={() => setFocused(null)}
                  autoComplete="email"
                  disabled={phase === "loading" || phase === "success"}
                />
              </div>
              <div className="sip-underline" />
            </div>

            {/* password */}
            <div className={`sip-field ${focused === "password" ? "sip-field--focused" : ""} ${phase === "error" && !password ? "sip-field--err" : ""}`}>
              {ripples.filter(r => r.fieldId === "password").map(r => <span key={r.id} className="sip-ripple" />)}
              <label className="sip-label" htmlFor="sip-password">Password</label>
              <div className="sip-input-wrap">
                <svg className="sip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  id="sip-password"
                  className="sip-input"
                  type={eyeOpen ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onFocus={() => { setFocused("password"); addRipple("password"); }}
                  onBlur={() => setFocused(null)}
                  autoComplete="current-password"
                  disabled={phase === "loading" || phase === "success"}
                />
                <button
                  type="button"
                  className="sip-eye"
                  onClick={() => setEyeOpen(!eyeOpen)}
                  aria-label="Toggle password visibility"
                >
                  {eyeOpen ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="sip-underline" />
            </div>

            {/* forgot */}
            <div className="sip-forgot-row">
              <a href="#" className="sip-forgot" onClick={e => e.preventDefault()}>Forgot password?</a>
            </div>

            {/* submit */}
            <button
              ref={submitRef}
              id="sip-submit"
              className={`sip-submit ${phase === "loading" ? "sip-submit--loading" : ""} ${phase === "error" ? "sip-submit--error" : ""}`}
              type="submit"
              disabled={phase === "loading" || phase === "success"}
            >
              {phase === "loading" ? (
                <span className="sip-spinner-row">
                  <span className="sip-spinner" />
                  <span>Signing in…</span>
                </span>
              ) : phase === "error" ? (
                <span>Fill in all fields &amp; try again</span>
              ) : (
                <span className="sip-btn-inner">
                  Sign In
                  <svg className="sip-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="17" height="17">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              )}
              <span className="sip-shine" />
            </button>

            {/* separator */}
            <div className="sip-sep"><span>or continue with</span></div>

            {/* social */}
            <div className="sip-social">
              <button type="button" className="sip-social-btn">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button type="button" className="sip-social-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#111">
                  <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-3.55 2.33-5.43 4.62-5.43 1.44 0 2.64.96 3.545.96.605 0 1.65-1.07 3.43-1.07.46 0 2.247.04 3.44 1.62zm-4.888-9.89c.11.03.25.05.4.05-.18 1.2-.68 2.4-1.34 3.18-.72.86-1.72 1.53-2.88 1.53-.06 0-.13-.01-.2-.01.19-1.24.76-2.42 1.37-3.2.68-.87 1.74-1.48 2.65-1.55z" />
                </svg>
                Apple
              </button>
            </div>

            <p className="sip-register">
              Don&apos;t have an account?{" "}
              <a href="#" className="sip-register-link" onClick={e => e.preventDefault()}>Create one free</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
