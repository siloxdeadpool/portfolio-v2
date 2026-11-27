import React, { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate stars
    const starCount = Math.floor((width * height) / 7000);
    const stars = Array.from({ length: Math.min(Math.max(starCount, 90), 220) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.4,
      baseAlpha: Math.random() * 0.7 + 0.2,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.3 ? '#ffffff' : Math.random() > 0.5 ? '#93bbfd' : '#38bdf8',
    }));

    // Shooting stars / Meteors
    const meteors = [];
    const spawnMeteor = () => {
      if (meteors.length < 3 && Math.random() < 0.35) {
        meteors.push({
          x: Math.random() * width * 1.2 - width * 0.1,
          y: Math.random() * height * 0.4,
          length: Math.random() * 100 + 70,
          speed: Math.random() * 8 + 8,
          angle: (Math.PI / 180) * (Math.random() * 20 + 35), // angle downwards
          alpha: 1,
          decay: Math.random() * 0.015 + 0.012,
        });
      }
    };

    let meteorTimer = setInterval(spawnMeteor, 2400);

    // Mouse subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX - width / 2) * 0.015;
      mouseY = (e.clientY - height / 2) * 0.015;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint glowing nebula ambient circles
      const grad1 = ctx.createRadialGradient(width * 0.8, height * 0.2, 50, width * 0.8, height * 0.2, 500);
      grad1.addColorStop(0, 'rgba(44, 103, 237, 0.09)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.15, height * 0.7, 40, width * 0.15, height * 0.7, 450);
      grad2.addColorStop(0, 'rgba(6, 182, 212, 0.06)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render Stars
      for (let star of stars) {
        star.alpha += star.speed * star.direction;
        if (star.alpha >= 1) {
          star.alpha = 1;
          star.direction = -1;
        } else if (star.alpha <= 0.15) {
          star.alpha = 0.15;
          star.direction = 1;
        }

        const renderX = star.x + mouseX * star.size;
        const renderY = star.y + mouseY * star.size;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra twinkle aura for larger stars
        if (star.size > 1.3) {
          ctx.fillStyle = 'rgba(44, 103, 237, 0.3)';
          ctx.beginPath();
          ctx.arc(renderX, renderY, star.size * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Render Meteors
      ctx.globalAlpha = 1;
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= m.decay;

        if (m.alpha <= 0 || m.x > width + 200 || m.y > height + 200) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const meteorGrad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        meteorGrad.addColorStop(0, 'rgba(44, 103, 237, 0)');
        meteorGrad.addColorStop(0.6, `rgba(44, 103, 237, ${m.alpha * 0.7})`);
        meteorGrad.addColorStop(1, `rgba(220, 245, 255, ${m.alpha})`);

        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Meteor Head Spark
        ctx.fillStyle = `rgba(255, 255, 255, ${m.alpha})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(meteorTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-90"
      style={{ willChange: 'transform' }}
    />
  );
}
