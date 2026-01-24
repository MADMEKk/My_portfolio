import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ variant = 'default', className = '' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const particles = [];
        const numParticles = variant === 'hero' ? 50 : 20;
        const mouse = { x: null, y: null, radius: 150 };
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        if (variant === 'hero') {
            window.addEventListener('mousemove', (e) => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });
        }

        // Create particles
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                vx: Math.random() * 1 - 0.5,
                vy: Math.random() * 1 - 0.5,
                baseX: Math.random() * canvas.width,
                baseY: Math.random() * canvas.height,
                density: (Math.random() * 30) + 1,
                color: 'rgba(45, 212, 191, 0.3)' // Teal/Secondary color
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                if (variant === 'hero') {
                    // Mouse interaction logic
                    let dx = mouse.x - particle.x;
                    let dy = mouse.y - particle.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    const maxDistance = mouse.radius;
                    let force = (maxDistance - distance) / maxDistance;
                    if (force < 0) force = 0;

                    let directionX = (forceDirectionX * force * particle.density);
                    let directionY = (forceDirectionY * force * particle.density);

                    if (distance < mouse.radius) {
                        particle.x -= directionX;
                        particle.y -= directionY;
                    } else {
                        if (particle.x !== particle.baseX) {
                            let dx = particle.x - particle.baseX;
                            particle.x -= dx / 10;
                        }
                        if (particle.y !== particle.baseY) {
                            let dy = particle.y - particle.baseY;
                            particle.y -= dy / 10;
                        }
                    }
                } else {
                    // Simple movement
                    particle.x += particle.vx;
                    particle.y += particle.vy;

                    if (particle.x < 0) particle.x = canvas.width;
                    if (particle.x > canvas.width) particle.x = 0;
                    if (particle.y < 0) particle.y = canvas.height;
                    if (particle.y > canvas.height) particle.y = 0;
                }

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
            });

            // Connections
            const connectDistance = variant === 'hero' ? 120 : 100;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(45, 212, 191, ${0.15 * (1 - distance / connectDistance)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [variant]);

    return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full -z-10 ${className}`} />;
};

export default ParticleBackground;
