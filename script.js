// Enhanced Portfolio JavaScript with Advanced Features

// Global variables
let isLoading = true;
let cursorDot, cursorOutline;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initLoadingScreen();
    initSmoothScrolling();
    initNavigationEffects();
    initAnimationObserver();
    initTypingEffects();
    initSkillBars();
    initCounters();
    initTerminalEffects();
    initParallaxEffects();
    initAdvancedAnimations();
    initArsenal();
    
    // Initialize enhanced about section with delay for better UX
    setTimeout(initEnhancedAbout, 1000);
    
    // Initialize revolutionary career navigator
    setTimeout(initCareerNavigator, 1500);
    
    // Initialize contact functionality
    initContactFunctionality();
});

// Custom Cursor
function initCustomCursor() {
    cursorDot = document.querySelector('.cursor');
    cursorOutline = document.querySelector('.cursor-follower');
    
    if (!cursorDot || !cursorOutline) return;
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    });
    
    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-card, .contact-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'scale(1.5)';
            cursorOutline.style.transform = 'scale(2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'scale(1)';
            cursorOutline.style.transform = 'scale(1)';
        });
    });
}

// Loading Screen with Progress
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const percentage = document.querySelector('.loading-percentage');
    
    if (!loadingScreen) return;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        if (percentage) {
            percentage.textContent = `${Math.floor(progress)}%`;
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    isLoading = false;
                    startMainAnimations();
                }, 500);
            }, 500);
        }
    }, 100);
}

// Start main animations after loading
function startMainAnimations() {
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-description, .hero-actions, .social-links');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Start matrix effect
    setTimeout(createMatrixEffect, 1000);
    
    // Start particle system
    setTimeout(initParticles, 2000);
}

// Enhanced Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced Navigation Effects
function initNavigationEffects() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 100;
        
        if (scrolled) {
            header.style.background = 'rgba(10, 14, 10, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 8px 32px rgba(0, 255, 65, 0.1)';
        } else {
            header.style.background = 'rgba(10, 14, 10, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Glitch effect on nav links
    navLinks.forEach(link => {
        const originalText = link.textContent;
        const glitchText = link.dataset.text || originalText;
        
        link.addEventListener('mouseenter', () => {
            if (Math.random() > 0.7) {
                link.textContent = scrambleText(glitchText);
                setTimeout(() => {
                    link.textContent = originalText;
                }, 100);
            }
        });
    });
}

// Text scrambling effect
function scrambleText(text) {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    return text.split('').map(char => 
        Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char
    ).join('');
}

// Animation Observer
function initAnimationObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special animations for different elements
                if (entry.target.classList.contains('skill-item')) {
                    animateSkillBar(entry.target);
                }
                
                if (entry.target.classList.contains('stat-item')) {
                    animateCounter(entry.target);
                }
                
                if (entry.target.classList.contains('terminal-window')) {
                    animateTerminal(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll(`
        .skill-item, .achievement-card, .timeline-item, 
        .project-card, .contact-item, .stat-item, 
        .terminal-window, .section-header
    `);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Enhanced typing effects
function initTypingEffects() {
    const typeElements = document.querySelectorAll('.hero-name');
    
    typeElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        el.style.opacity = '1';
        
        setTimeout(() => {
            typeWriter(el, text, 100);
        }, 1000);
    });
}

function typeWriter(element, text, speed = 50) {
    let i = 0;
    const cursor = '|';
    
    function type() {
        if (i < text.length) {
            element.textContent = text.slice(0, i + 1) + cursor;
            i++;
            setTimeout(type, speed);
        } else {
            // Remove cursor and add final styling
            element.textContent = text;
            element.classList.add('typing-complete');
        }
    }
    
    type();
}

// Animated skill bars
function initSkillBars() {
    // Will be triggered by intersection observer
}

function animateSkillBar(skillItem) {
    const progressBar = skillItem.querySelector('.skill-progress');
    if (!progressBar) return;
    
    const progress = progressBar.dataset.progress;
    
    setTimeout(() => {
        progressBar.style.width = `${progress}%`;
        progressBar.style.background = `linear-gradient(90deg, var(--accent-green), var(--accent-blue))`;
        progressBar.style.boxShadow = `0 0 20px rgba(0, 255, 65, 0.5)`;
    }, 500);
}

// Animated counters
function initCounters() {
    // Will be triggered by intersection observer
}

function animateCounter(statItem) {
    const numberEl = statItem.querySelector('.stat-number');
    if (!numberEl) return;
    
    const target = parseInt(statItem.dataset.target);
    let current = 0;
    const increment = target / 100;
    
    const timer = setInterval(() => {
        current += increment;
        numberEl.textContent = Math.floor(current);
        
        if (current >= target) {
            numberEl.textContent = target;
            clearInterval(timer);
        }
    }, 20);
}

// Terminal animation effects
function initTerminalEffects() {
    // Will be triggered by intersection observer
}

function animateTerminal(terminal) {
    const lines = terminal.querySelectorAll('.terminal-output p');
    
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            typeWriter(line, line.textContent, 30);
        }, index * 1000);
    });
}

// Matrix effect
function createMatrixEffect() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        pointer-events: none; z-index: -1; opacity: 0.1;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 14, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = `${fontSize}px JetBrains Mono, monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
}

// Enhanced particle system
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        pointer-events: none; z-index: -2;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 80;
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.hue = Math.random() * 60 + 120; // Green-blue range
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
            
            // Gentle floating effect
            this.y += Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.5;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
            ctx.shadowColor = `hsl(${this.hue}, 100%, 50%)`;
            ctx.shadowBlur = this.size * 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
        
        connect(other) {
            const dx = this.x - other.x;
            const dy = this.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                ctx.save();
                ctx.globalAlpha = (100 - distance) / 100 * 0.2;
                ctx.strokeStyle = '#00ff41';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(other.x, other.y);
                ctx.stroke();
                ctx.restore();
            }
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, i) => {
            particle.update();
            particle.draw();
            
            // Connect nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                particle.connect(particles[j]);
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Parallax effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-bg-animation, .code-editor');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(el => {
            el.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Advanced animations and micro-interactions
function initAdvancedAnimations() {
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotateX(5deg)';
            card.style.boxShadow = '0 20px 40px rgba(0, 255, 65, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0)';
            card.style.boxShadow = 'var(--shadow-glow)';
        });
    });
    
    // Social links magnetic effect
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            link.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translate(0, 0)';
        });
    });
    
    // CTA button ripple effect
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute; border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                width: ${size}px; height: ${size}px;
                left: ${x}px; top: ${y}px;
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Tooltip system
    initTooltips();
}

// Enhanced tooltip system
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = el.dataset.tooltip;
            tooltip.style.cssText = `
                position: absolute; background: var(--bg-card);
                color: var(--text-primary); padding: 0.5rem 1rem;
                border-radius: 6px; font-size: 0.8rem;
                border: 1px solid var(--border-color);
                box-shadow: var(--shadow-glow); z-index: 1000;
                pointer-events: none; white-space: nowrap;
                opacity: 0; transform: translateY(10px);
                transition: opacity 0.3s ease, transform 0.3s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = el.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.bottom + 10 + 'px';
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(0)';
            }, 10);
            
            el._tooltip = tooltip;
        });
        
        el.addEventListener('mouseleave', () => {
            if (el._tooltip) {
                el._tooltip.style.opacity = '0';
                el._tooltip.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    if (el._tooltip && el._tooltip.parentNode) {
                        el._tooltip.remove();
                    }
                }, 300);
            }
        });
    });
}

// CSS animations keyframes
const additionalCSS = `
@keyframes ripple {
    to { transform: scale(4); opacity: 0; }
}

@keyframes animate-in {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-in {
    animation: animate-in 0.8s ease forwards;
}

.nav-link.active {
    color: var(--accent-green) !important;
    text-shadow: 0 0 10px var(--accent-green);
}

.nav-link.active::after {
    width: 100% !important;
    box-shadow: 0 0 10px var(--accent-green);
}

.typing-complete {
    animation: titleGlow 3s ease-in-out infinite alternate;
}

.skill-progress {
    width: 0;
    height: 100%;
    background: var(--accent-green);
    border-radius: inherit;
    transition: width 1.5s ease-in-out;
    position: relative;
    overflow: hidden;
}

.skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    to { left: 100%; }
}

.tooltip {
    backdrop-filter: blur(10px);
}
`;

// Add additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);

// Mobile optimizations
if (window.innerWidth <= 768) {
    // Disable cursor effects on mobile
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    if (cursor) cursor.style.display = 'none';
    if (cursorFollower) cursorFollower.style.display = 'none';
    
    // Reduce particle count on mobile
    if (typeof particleCount !== 'undefined') {
        particleCount = 30;
    }
}

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced Technical Arsenal Functionality
function initArsenal() {
    // Skill meter animation with CSS custom properties
    const arsenalStyle = document.createElement('style');
    arsenalStyle.textContent = `
        .meter-bar::before {
            width: var(--progress, 0%);
        }
    `;
    document.head.appendChild(arsenalStyle);
    
    // Animate skill meters when they become visible
    const skillEntries = document.querySelectorAll('.skill-entry');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const meterBar = entry.target.querySelector('.meter-bar');
                const progress = entry.target.getAttribute('data-level');
                if (meterBar) {
                    setTimeout(() => {
                        meterBar.style.setProperty('--progress', progress + '%');
                    }, Math.random() * 500);
                }
            }
        });
    }, { threshold: 0.3 });

    skillEntries.forEach(entry => skillObserver.observe(entry));

    // Domain card switching functionality
    const domainCards = document.querySelectorAll('.domain-card');
    const skillCategories = document.querySelectorAll('.skill-category');
    const currentDomainElement = document.querySelector('.current-domain');
    const skillCountDisplay = document.querySelector('.skill-count-display');
    const elapsedTimeElement = document.querySelector('.elapsed-time');
    
    // Domain name mappings
    const domainNames = {
        'programming': 'PROGRAMMING & FRAMEWORKS',
        'cloud': 'CLOUD & DEVOPS',
        'tools': 'DEVELOPMENT TOOLS'
    };
    
    const skillCounts = {
        'programming': 8,
        'cloud': 4,
        'tools': 6
    };
    
    domainCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            
            // Remove active class from all cards and categories
            domainCards.forEach(c => {
                c.classList.remove('active');
                const statusIndicator = c.querySelector('.status-indicator');
                const scanStatus = c.querySelector('.scan-status');
                statusIndicator.classList.remove('active');
                scanStatus.textContent = 'READY';
            });
            skillCategories.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            card.classList.add('active');
            const statusIndicator = card.querySelector('.status-indicator');
            const scanStatus = card.querySelector('.scan-status');
            statusIndicator.classList.add('active');
            scanStatus.textContent = 'SCANNED';
            
            // Update scanner header
            if (currentDomainElement) {
                currentDomainElement.textContent = domainNames[category] || category.toUpperCase();
            }
            if (skillCountDisplay) {
                skillCountDisplay.textContent = skillCounts[category] || '0';
            }
            if (elapsedTimeElement) {
                elapsedTimeElement.textContent = (Math.random() * 0.5 + 0.2).toFixed(1) + 's';
            }
            
            // Find and show the corresponding category
            const activeContainer = document.querySelector('.skills-display');
            const currentActive = activeContainer.querySelector('.skill-category');
            
            // Get the target category from hidden skills
            const hiddenCategory = document.querySelector(`.hidden-skills .skill-category[data-category="${category}"]`);
            
            if (hiddenCategory) {
                // Clone the hidden category
                const clonedCategory = hiddenCategory.cloneNode(true);
                clonedCategory.classList.add('active');
                
                // Replace the current category
                if (currentActive) {
                    activeContainer.replaceChild(clonedCategory, currentActive);
                } else {
                    activeContainer.appendChild(clonedCategory);
                }
                
                // Animate the new skill meters
                setTimeout(() => {
                    const newSkillEntries = clonedCategory.querySelectorAll('.skill-entry');
                    newSkillEntries.forEach((entry, index) => {
                        const meterBar = entry.querySelector('.meter-bar');
                        const progress = entry.getAttribute('data-level');
                        if (meterBar) {
                            setTimeout(() => {
                                meterBar.style.setProperty('--progress', progress + '%');
                            }, index * 150);
                        }
                    });
                }, 300);
            }
        });
    });

    // Initialize domain progress bars
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach((fill, index) => {
        const width = fill.getAttribute('data-width');
        setTimeout(() => {
            fill.style.width = width + '%';
        }, 800 + (index * 200));
    });

    // Initialize the default active category animation
    setTimeout(() => {
        const activeCategory = document.querySelector('.skill-category.active');
        if (activeCategory) {
            const skillEntries = activeCategory.querySelectorAll('.skill-entry');
            skillEntries.forEach((entry, index) => {
                const meterBar = entry.querySelector('.meter-bar');
                const progress = entry.getAttribute('data-level');
                if (meterBar) {
                    setTimeout(() => {
                        meterBar.style.setProperty('--progress', progress + '%');
                    }, index * 200);
                }
            });
        }
    }, 1500);

    // Terminal typing effect for scan results
    const scanLines = document.querySelectorAll('.scan-line');
    scanLines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.animation = 'animate-in 0.5s ease forwards';
        }, index * 300);
    });
}

// Enhanced About Section Functionality
function initEnhancedAbout() {
    // Initialize typing animations for story content
    initStoryTyping();
    
    // Initialize stats counter animation
    initStatsCounters();
    
    // Initialize achievement card interactions
    initAchievementCards();
    
    // Initialize terminal command sequence
    initCommandSequence();
}

// Story typing animation with realistic delays
function initStoryTyping() {
    const typingElements = document.querySelectorAll('.typing-text');
    
    typingElements.forEach(element => {
        const text = element.getAttribute('data-text');
        const delay = parseInt(element.getAttribute('data-delay')) || 0;
        
        if (text) {
            // Clear initial content
            element.textContent = '';
            element.style.width = '0';
            
            setTimeout(() => {
                typeWriterEffect(element, text, 50);
            }, delay);
        }
    });
}

// Enhanced typewriter effect
function typeWriterEffect(element, text, speed = 50) {
    let i = 0;
    element.style.width = 'auto';
    element.style.whiteSpace = 'nowrap';
    element.style.overflow = 'hidden';
    element.style.borderRight = '2px solid var(--accent-green)';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            
            // Variable typing speed for more realistic effect
            const currentSpeed = speed + (Math.random() * 30 - 15);
            setTimeout(type, Math.max(20, currentSpeed));
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                element.style.borderRight = 'none';
                element.style.whiteSpace = 'normal';
                element.style.overflow = 'visible';
            }, 1000);
        }
    }
    
    type();
}

// Animated stats counters
function initStatsCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => counterObserver.observe(stat));
}

function animateStatCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Achievement card interactions
function initAchievementCards() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach(card => {
        // Add hover sound effect (visual feedback)
        card.addEventListener('mouseenter', () => {
            const iconPulse = card.querySelector('.icon-pulse');
            if (iconPulse) {
                iconPulse.style.animation = 'iconPulse 0.5s ease-out';
                setTimeout(() => {
                    iconPulse.style.animation = 'iconPulse 2s infinite';
                }, 500);
            }
        });
        
        // Click interaction for achievement details
        card.addEventListener('click', () => {
            const achievementType = card.getAttribute('data-achievement');
            showAchievementDetails(achievementType, card);
        });
    });
}

function showAchievementDetails(type, cardElement) {
    // Create achievement detail modal effect
    const rect = cardElement.getBoundingClientRect();
    const detailsOverlay = document.createElement('div');
    detailsOverlay.className = 'achievement-details-overlay';
    
    detailsOverlay.innerHTML = `
        <div class="achievement-details-modal">
            <div class="modal-header">
                <h3>Achievement Details</h3>
                <button class="close-modal">×</button>
            </div>
            <div class="modal-content">
                ${getAchievementDetails(type)}
            </div>
        </div>
    `;
    
    document.body.appendChild(detailsOverlay);
    
    // Disable custom cursor while modal is open
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    if (cursor) cursor.style.display = 'none';
    if (cursorFollower) cursorFollower.style.display = 'none';
    
    // Add styles for the modal
    const modalStyles = `
        .achievement-details-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(15px);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            animation: fadeIn 0.3s ease forwards;
            cursor: default;
        }
        
        .achievement-details-overlay * {
            cursor: default !important;
        }
        
        .achievement-details-modal {
            background: var(--bg-card);
            border: 2px solid var(--accent-green);
            border-radius: 16px;
            padding: 2rem;
            max-width: 600px;
            width: 90%;
            max-height: 85vh;
            overflow: hidden;
            transform: scale(0.8);
            animation: modalSlideIn 0.3s ease forwards;
            box-shadow: 0 20px 60px rgba(0, 255, 65, 0.3);
            position: relative;
            cursor: default;
        }
        
        .achievement-details-modal::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 49%, rgba(0, 255, 65, 0.05) 50%, transparent 51%);
            pointer-events: none;
            animation: scanLine 3s linear infinite;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border-subtle);
            position: relative;
            z-index: 2;
        }
        
        .modal-header h3 {
            color: var(--accent-green);
            font-size: 1.4rem;
            font-weight: 700;
        }
        
        .close-modal {
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
            font-size: 1.5rem;
            cursor: pointer;
            transition: var(--transition);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .close-modal:hover {
            color: var(--accent-green);
            border-color: var(--accent-green);
            background: rgba(0, 255, 65, 0.1);
            box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
        }
        
        .modal-content {
            position: relative;
            z-index: 2;
            max-height: calc(85vh - 140px);
            overflow: hidden;
        }
        
        .achievement-detail h4 {
            color: var(--accent-green);
            font-size: 1.2rem;
            margin-bottom: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .achievement-detail p {
            color: var(--text-secondary);
            line-height: 1.5;
            margin-bottom: 0.8rem;
        }
        
        .achievement-detail strong {
            color: var(--text-primary);
        }
        
        .achievement-detail ul {
            list-style: none;
            margin: 0.8rem 0;
            padding-left: 1rem;
        }
        
        .achievement-detail li {
            color: var(--text-secondary);
            margin-bottom: 0.4rem;
            position: relative;
            line-height: 1.4;
        }
        
        .achievement-detail li::before {
            content: '▶';
            color: var(--accent-green);
            position: absolute;
            left: -1rem;
            font-size: 0.8rem;
        }
        
        @keyframes fadeIn {
            to { opacity: 1; }
        }
        
        @keyframes modalSlideIn {
            to { transform: scale(1); }
        }
        
        @keyframes scanLine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = modalStyles;
    document.head.appendChild(styleElement);
    
    // Close modal functionality
    const closeBtn = detailsOverlay.querySelector('.close-modal');
    const closeModal = () => {
        detailsOverlay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(detailsOverlay);
            document.head.removeChild(styleElement);
            
            // Re-enable custom cursor
            if (cursor) cursor.style.display = 'block';
            if (cursorFollower) cursorFollower.style.display = 'block';
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    
    detailsOverlay.addEventListener('click', (e) => {
        if (e.target === detailsOverlay) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

function getAchievementDetails(type) {
    const details = {
        nvidia: `
            <div class="achievement-detail">
                <h4>🧠 NVIDIA Deep Learning Fundamentals</h4>
                <p><strong>Certification Date:</strong> April 2025</p>
                <p><strong>Skills Acquired:</strong></p>
                <ul>
                    <li>Neural Network Architecture Design</li>
                    <li>CUDA Programming & GPU Optimization</li>
                    <li>Deep Learning Model Training</li>
                    <li>Computer Vision Applications</li>
                    <li>Natural Language Processing</li>
                </ul>
                <p><strong>Projects Completed:</strong> 5 hands-on labs including image classification and sentiment analysis</p>
            </div>
        `,
        scholarship: `
            <div class="achievement-detail">
                <h4>🎓 Stipendium Hungaricum Scholarship</h4>
                <p><strong>Award Year:</strong> 2021</p>
                <p><strong>Program:</strong> Full scholarship for Bachelor's in Computer Science</p>
                <p><strong>Benefits:</strong></p>
                <ul>
                    <li>100% tuition coverage for 4 years</li>
                    <li>Monthly living allowance</li>
                    <li>Accommodation support</li>
                    <li>Health insurance coverage</li>
                </ul>
                <p><strong>Selection Criteria:</strong> Academic excellence, leadership potential, and commitment to international cooperation</p>
            </div>
        `,
        chess: `
            <div class="achievement-detail">
                <h4>♛ Chess Championship Excellence</h4>
                <p><strong>Achievement Year:</strong> 2019</p>
                <p><strong>Level:</strong> High School Regional Champion</p>
                <p><strong>Strategic Skills Developed:</strong></p>
                <ul>
                    <li>Advanced pattern recognition</li>
                    <li>Strategic planning & foresight</li>
                    <li>Decision making under pressure</li>
                    <li>Analytical thinking</li>
                    <li>Competitive mindset</li>
                </ul>
                <p><strong>Relevance to Programming:</strong> Chess strategy directly translates to algorithmic thinking and problem-solving in software development</p>
            </div>
        `,
        'mun-ets': `
            <div class="achievement-detail">
                <h4>🇷🇺 ETS MUN Best Delegate</h4>
                <p><strong>Achievement Year:</strong> 2020</p>
                <p><strong>Country Represented:</strong> Russian Federation</p>
                <p><strong>Conference:</strong> ETS Model United Nations</p>
                <p><strong>Diplomatic Skills Demonstrated:</strong></p>
                <ul>
                    <li>Complex geopolitical analysis and representation</li>
                    <li>Multilateral negotiation and consensus building</li>
                    <li>Strategic alliance formation</li>
                    <li>Cross-cultural communication excellence</li>
                    <li>Real-time policy adaptation and crisis management</li>
                </ul>
                <p><strong>Leadership Impact:</strong> Successfully led diplomatic initiatives while accurately representing Russian foreign policy perspectives in international forums</p>
            </div>
        `,
        'mun-asriya': `
            <div class="achievement-detail">
                <h4>🇺🇸 ASRIYA MUN Best Delegate</h4>
                <p><strong>Achievement Year:</strong> 2021</p>
                <p><strong>Country Represented:</strong> United States of America</p>
                <p><strong>Conference:</strong> ASRIYA Model United Nations</p>
                <p><strong>Leadership Excellence:</strong></p>
                <ul>
                    <li>Masterful representation of US foreign policy positions</li>
                    <li>Advanced public speaking and persuasion techniques</li>
                    <li>Coalition building and diplomatic compromise</li>
                    <li>International law and policy expertise</li>
                    <li>Crisis resolution under time pressure</li>
                </ul>
                <p><strong>Achievement Significance:</strong> Demonstrated exceptional versatility by winning Best Delegate for two different major world powers, showcasing deep understanding of diverse geopolitical perspectives</p>
            </div>
        `
    };
    
    return details[type] || '<p>Achievement details not available.</p>';
}

// Command sequence animation
function initCommandSequence() {
    const commandLines = document.querySelectorAll('.command-line');
    const systemOutput = document.querySelector('.system-output');
    const storyContent = document.querySelector('.story-content');
    
    // Ensure proper timing for command sequence
    setTimeout(() => {
        if (systemOutput) {
            systemOutput.style.opacity = '1';
            systemOutput.style.transform = 'translateY(0)';
        }
    }, 1500);
    
    // Initialize story sections with proper delays
    const storySections = document.querySelectorAll('.story-section');
    storySections.forEach((section, index) => {
        const delay = 3500 + (index * 3000); // Staggered appearance
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, delay);
    });
}

// Enhanced about section is now initialized in the main DOMContentLoaded event

// Debounce scroll events for better performance
window.addEventListener('scroll', debounce(() => {
    // Scroll-based animations
}, 16)); // ~60fps 

// =================== CAREER NAVIGATOR FUNCTIONALITY ===================

function initCareerNavigator() {
    initCareerCommands();
    initCareerMetrics();
    initTimelineControls();
    initExperienceCards();
    initTrajectoryAnimations();
}

// Initialize career command interface
function initCareerCommands() {
    const commandText = document.querySelector('.command-interface .command');
    const systemOutput = document.querySelector('.system-output');
    
    if (!commandText || !systemOutput) return;
    
    // Start command typing animation
    setTimeout(() => {
        typeWriterEffect(commandText, commandText.dataset.text, 30);
        
        // Show system output after command is typed
        setTimeout(() => {
            const outputLines = systemOutput.querySelectorAll('.output-line');
            outputLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.animation = 'fadeInUp 0.5s ease forwards';
                }, index * 500);
            });
        }, 2000);
    }, 1000);
}

// Initialize career metrics with animated counters
function initCareerMetrics() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const metricCards = entry.target.querySelectorAll('.metric-card');
                
                metricCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.animation = 'fadeInUp 0.6s ease forwards';
                        
                        // Animate the metric value
                        const valueElement = card.querySelector('.metric-value');
                        if (valueElement) {
                            animateCareerCounter(valueElement);
                        }
                    }, index * 200);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const metricsGrid = document.querySelector('.metrics-grid');
    if (metricsGrid) {
        observer.observe(metricsGrid);
    }
}

// Animate career metric counters
function animateCareerCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const startTime = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(target * easeOutQuart);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(animate);
}

// Initialize timeline controls
function initTimelineControls() {
    const timelineButtons = document.querySelectorAll('.timeline-btn');
    const timeline = document.querySelector('.interactive-timeline');
    
    if (!timelineButtons.length || !timeline) return;
    
    timelineButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            timelineButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const view = btn.dataset.view;
            
            if (view === 'compact') {
                timeline.classList.add('compact-view');
                compactTimelineView();
            } else {
                timeline.classList.remove('compact-view');
                detailedTimelineView();
            }
        });
    });
}

// Compact timeline view
function compactTimelineView() {
    const experienceCards = document.querySelectorAll('.experience-card');
    
    experienceCards.forEach(card => {
        // Hide detailed sections in compact view
        const achievements = card.querySelector('.achievements-list');
        const techArsenal = card.querySelector('.tech-arsenal');
        
        if (achievements) achievements.style.display = 'none';
        if (techArsenal) techArsenal.style.display = 'none';
        
        // Reduce card padding
        card.style.padding = '1.5rem';
        card.style.margin = '0 2rem';
    });
}

// Detailed timeline view
function detailedTimelineView() {
    const experienceCards = document.querySelectorAll('.experience-card');
    
    experienceCards.forEach(card => {
        // Show all sections in detailed view
        const achievements = card.querySelector('.achievements-list');
        const techArsenal = card.querySelector('.tech-arsenal');
        
        if (achievements) achievements.style.display = 'block';
        if (techArsenal) techArsenal.style.display = 'block';
        
        // Restore card padding
        card.style.padding = '2rem';
        card.style.margin = '0 3rem';
    });
}

// Initialize experience cards animations
function initExperienceCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                
                // Animate card entrance
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    
                    // Animate internal elements
                    animateCardContent(card);
                }, 300);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    const experienceNodes = document.querySelectorAll('.experience-node');
    experienceNodes.forEach(node => {
        // Initially hide for animation
        node.style.opacity = '0';
        node.style.transform = 'translateY(30px)';
        
        observer.observe(node);
    });
}

// Animate card content elements
function animateCardContent(card) {
    const elements = [
        card.querySelector('.card-header'),
        card.querySelector('.position-details'),
        card.querySelector('.impact-highlight'),
        card.querySelector('.achievements-list'),
        card.querySelector('.tech-arsenal')
    ];
    
    elements.forEach((element, index) => {
        if (element) {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.animation = 'fadeInUp 0.5s ease forwards';
            }, index * 100);
        }
    });
    
    // Animate tech tags individually
    const techTags = card.querySelectorAll('.tech-tag');
    techTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0) scale(1)';
        }, 800 + (index * 50));
    });
}

// Initialize trajectory animations
function initTrajectoryAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const trajectory = entry.target;
                
                // Animate trajectory card
                setTimeout(() => {
                    trajectory.style.opacity = '1';
                    trajectory.style.animation = 'fadeInUp 0.8s ease forwards';
                    
                    // Add pulsing animation to trajectory button
                    const trajectoryBtn = trajectory.querySelector('.trajectory-btn');
                    if (trajectoryBtn) {
                        setTimeout(() => {
                            trajectoryBtn.style.animation = 'pulse 2s infinite';
                        }, 1000);
                    }
                }, 500);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const futureTrajectory = document.querySelector('.future-trajectory');
    if (futureTrajectory) {
        futureTrajectory.style.opacity = '0';
        observer.observe(futureTrajectory);
    }
}

// Add enhanced hover effects for experience cards
function initExperienceHoverEffects() {
    const experienceCards = document.querySelectorAll('.experience-card');
    
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Enhance marker glow
            const marker = card.parentElement.querySelector('.node-marker');
            if (marker) {
                marker.style.filter = 'brightness(1.5)';
                marker.style.transform = 'translateX(-50%) scale(1.1)';
            }
            
            // Animate tech tags
            const techTags = card.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-2px) scale(1.05)';
                }, index * 30);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            // Reset marker
            const marker = card.parentElement.querySelector('.node-marker');
            if (marker) {
                marker.style.filter = 'brightness(1)';
                marker.style.transform = 'translateX(-50%) scale(1)';
            }
            
            // Reset tech tags
            const techTags = card.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.transform = 'translateY(0) scale(1)';
            });
        });
    });
}

// Enhanced Timeline Flow Animation
function initTimelineFlow() {
    const connectorFlows = document.querySelectorAll('.connector-flow');
    
    connectorFlows.forEach((flow, index) => {
        // Stagger the flow animations
        flow.style.animationDelay = `${index * 0.5}s`;
    });
}

// Add CSS animation for responsive behavior and mobile optimization
function addCareerResponsiveStyles() {
    const responsiveCSS = `
        @media (max-width: 1024px) {
            .career-navigator {
                max-width: 95%;
                margin: 0 auto;
            }
            
            .metrics-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .experience-card {
                margin: 0 1.5rem !important;
                padding: 1.5rem !important;
            }
        }
        
        @media (max-width: 768px) {
            .navigator-terminal .terminal-header {
                padding: 0.8rem 1rem;
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .navigator-terminal .terminal-body {
                padding: 1.5rem;
            }
            
            .metrics-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .navigator-header {
                flex-direction: column;
                gap: 1rem;
                align-items: flex-start;
            }
            
            .timeline-controls {
                width: 100%;
                justify-content: center;
            }
            
            .experience-card {
                margin: 0 1rem !important;
                padding: 1.2rem !important;
            }
            
            .timeline-connector {
                left: 1rem;
                transform: none;
            }
            
            .node-marker {
                left: 1rem;
                transform: none;
            }
            
            .trajectory-card {
                margin: 0 1rem !important;
            }
        }
        
        @media (max-width: 480px) {
            .position-badge {
                padding: 0.3rem 0.6rem;
                font-size: 0.7rem;
            }
            
            .duration-chip {
                padding: 0.2rem 0.5rem;
                font-size: 0.7rem;
            }
            
            .impact-highlight {
                flex-direction: column;
                text-align: center;
                gap: 0.8rem;
            }
            
            .metric-card {
                padding: 1rem;
            }
            
            .metric-value {
                font-size: 2rem;
            }
        }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = responsiveCSS;
    document.head.appendChild(styleElement);
}

// Initialize all career navigator functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add career navigator to the initialization sequence
    setTimeout(() => {
        initCareerNavigator();
        initExperienceHoverEffects();
        initTimelineFlow();
        addCareerResponsiveStyles();
    }, 1500);
    
    // Also add to the main initialization in the existing DOMContentLoaded
    const existingInit = document.querySelector('.hero');
    if (existingInit) {
        // Add initCareerNavigator to the existing initialization sequence
        setTimeout(() => {
            initCareerNavigator();
        }, 2000);
    }
});

// Contact Functionality
function initContactFunctionality() {
    initCVDownload();
    initEmailNotifications();
    initContactAnimations();
}

// CV Download with Notification
function initCVDownload() {
    const downloadBtn = document.querySelector('.download-cv');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Show download notification
            showNotification('📄 CV Download Started!', 'Your CV is being prepared...', 'success');
            
            // Track download
            setTimeout(() => {
                showNotification('✅ Download Complete!', 'Thank you for downloading my CV. Let\'s connect!', 'success');
            }, 2000);
        });
    }
}

// Email Copy Functionality
function copyEmail() {
    const email = 'ZaidNaderAlAsali@Outlook.com';
    
    // Use modern clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
            showNotification('📧 Email Copied!', 'ZaidNaderAlAsali@Outlook.com copied to clipboard', 'success');
        }).catch(() => {
            fallbackCopyText(email, 'Email');
        });
    } else {
        fallbackCopyText(email, 'Email');
    }
}

// Phone Copy Functionality
function copyPhone() {
    const phone = '+962 079018174';
    
    // Use modern clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(phone).then(() => {
            showNotification('📱 Phone Copied!', '+962 079018174 copied to clipboard', 'success');
        }).catch(() => {
            fallbackCopyText(phone, 'Phone');
        });
    } else {
        fallbackCopyText(phone, 'Phone');
    }
}

// Fallback copy method for older browsers
function fallbackCopyText(text, type) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        if (type === 'Email') {
            showNotification('📧 Email Copied!', 'ZaidNaderAlAsali@Outlook.com copied to clipboard', 'success');
        } else if (type === 'Phone') {
            showNotification('📱 Phone Copied!', '+962 079018174 copied to clipboard', 'success');
        }
    } catch (err) {
        showNotification('⚠️ Copy Failed', `Please manually copy: ${text}`, 'info');
    }
    
    document.body.removeChild(textArea);
}

// Email Button Enhancements (keeping for other functionality)
function initEmailNotifications() {
    // This function is now mainly for CV download notifications
    // Email copying is handled by the copyEmail() function
}

// Contact Card Animations
function initContactAnimations() {
    const contactItems = document.querySelectorAll('.contact-item');
    const hireCard = document.querySelector('.hire-me-card');
    
    // Animate contact items on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
        observer.observe(item);
    });
    
    // Hire card special effects
    if (hireCard) {
        hireCard.addEventListener('mouseenter', () => {
            hireCard.style.transform = 'translateY(-10px) scale(1.02)';
            hireCard.style.boxShadow = '0 20px 60px rgba(0, 255, 65, 0.2)';
        });
        
        hireCard.addEventListener('mouseleave', () => {
            hireCard.style.transform = 'translateY(0) scale(1)';
            hireCard.style.boxShadow = '0 10px 40px rgba(0, 255, 65, 0.1)';
        });
    }
}

// Notification System
function showNotification(title, message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.custom-notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
            <div class="notification-progress"></div>
        </div>
    `;
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .custom-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(10, 14, 10, 0.95);
            border: 1px solid var(--accent-green);
            border-radius: 8px;
            padding: 1rem;
            max-width: 350px;
            z-index: 10000;
            backdrop-filter: blur(20px);
            transform: translateX(100%);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            box-shadow: 0 10px 40px rgba(0, 255, 65, 0.2);
        }
        
        .custom-notification.success {
            border-color: var(--accent-green);
        }
        
        .custom-notification.info {
            border-color: #3490dc;
        }
        
        .custom-notification.show {
            transform: translateX(0);
        }
        
        .notification-title {
            color: var(--accent-green);
            font-weight: 600;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }
        
        .notification-message {
            color: var(--text-secondary);
            font-size: 0.8rem;
            line-height: 1.4;
        }
        
        .notification-progress {
            height: 2px;
            background: var(--accent-green);
            margin-top: 0.8rem;
            border-radius: 1px;
            animation: progressBar 3s linear forwards;
        }
        
        @keyframes progressBar {
            from { width: 100%; }
            to { width: 0%; }
        }
        
        @media (max-width: 480px) {
            .custom-notification {
                right: 10px;
                left: 10px;
                max-width: none;
                transform: translateY(-100%);
            }
            
            .custom-notification.show {
                transform: translateY(0);
            }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }
    
    // Add to DOM and show
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = window.innerWidth <= 480 ? 'translateY(-100%)' : 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
} 