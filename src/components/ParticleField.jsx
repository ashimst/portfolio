import { useEffect, useRef, useCallback } from 'react';

const NODE_COUNT = 350;
const EDGE_DISTANCE = 160;
const MOUSE_RADIUS = 200;
const MOUSE_FORCE = 0.12;
const FRICTION = 0.93;
const DRIFT_SPEED = 0.07;
const RETURN_SPEED = 0.005;

// Opacities for nodes
const NODE_OPACITIES = [0.30, 0.28, 0.25, 0.30, 0.28];

function createNode(w, h) {
  const x = Math.random() * w;
  const y = Math.random() * h;
  return {
    x, y,
    homeX: x, homeY: y,
    vx: 0, vy: 0,
    driftAngle: Math.random() * Math.PI * 2,
    driftSpeed: DRIFT_SPEED * (0.3 + Math.random() * 0.7),
    radius: 3.5 + Math.random() * 3.5, // 3.5–7.0px
    colorIndex: Math.floor(Math.random() * NODE_OPACITIES.length),
  };
}

export default function ParticleField() {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);
  const sizeRef = useRef({ w: 0, h: 0 });

  const initNodes = useCallback((w, h) => {
    const nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) nodes.push(createNode(w, h));
    nodesRef.current = nodes;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { w, h } = sizeRef.current;
    ctx.clearRect(0, 0, w, h);

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const nodes = nodesRef.current;

    // Physics
    for (let i = 0; i < nodes.length; i++) {
      const p = nodes[i];
      const dmx = p.x - mx;
      const dmy = p.y - my;
      const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);

      if (distMouse < MOUSE_RADIUS && distMouse > 0) {
        const force = ((MOUSE_RADIUS - distMouse) / MOUSE_RADIUS) * MOUSE_FORCE;
        p.vx += (dmx / distMouse) * force * MOUSE_RADIUS * 0.15;
        p.vy += (dmy / distMouse) * force * MOUSE_RADIUS * 0.15;
      }

      p.driftAngle += 0.0012 + Math.random() * 0.0006;
      p.vx += Math.cos(p.driftAngle) * p.driftSpeed * 0.025;
      p.vy += Math.sin(p.driftAngle) * p.driftSpeed * 0.025;
      p.vx += (p.homeX - p.x) * RETURN_SPEED;
      p.vy += (p.homeY - p.y) * RETURN_SPEED;
      p.vx *= FRICTION;
      p.vy *= FRICTION;
      p.x += p.vx;
      p.y += p.vy;
    }

    // Edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist >= EDGE_DISTANCE) continue;

        const fade = 1 - dist / EDGE_DISTANCE;
        const midX = (nodes[i].x + nodes[j].x) / 2;
        const midY = (nodes[i].y + nodes[j].y) / 2;
        const dFromMouse = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2);
        const hoverZone = MOUSE_RADIUS * 1.2;

        if (dFromMouse < hoverZone) {
          const prox = 1 - dFromMouse / hoverZone;
          ctx.strokeStyle = `rgba(50,50,50,${(0.15 + prox * 0.55) * fade})`;
          ctx.lineWidth = 0.8 + prox * 1.5;
        } else {
          ctx.strokeStyle = `rgba(190,190,190,${0.12 * fade})`;
          ctx.lineWidth = 0.5;
        }

        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }

    // Nodes
    for (let i = 0; i < nodes.length; i++) {
      const p = nodes[i];
      const dnx = p.x - mx;
      const dny = p.y - my;
      const d = Math.sqrt(dnx * dnx + dny * dny);
      let r = p.radius;
      let c = p.color;

      if (d < MOUSE_RADIUS) {
        const prox = 1 - d / MOUSE_RADIUS;
        r = p.radius + prox * 3;
        c = `rgba(30,30,30,${0.3 + prox * 0.55})`;
      }

      ctx.fillStyle = c;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    animRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = document.documentElement.scrollHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.getContext('2d').scale(dpr, dpr);
      sizeRef.current = { w, h };
      if (nodesRef.current.length === 0) initNodes(w, h);
    };

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    const ro = new ResizeObserver(() => {
      const newH = document.documentElement.scrollHeight;
      if (Math.abs(newH - sizeRef.current.h) > 50) resize();
    });
    ro.observe(document.body);

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      ro.disconnect();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [animate, initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
