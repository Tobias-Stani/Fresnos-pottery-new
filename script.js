// ========================================
// ANIMACIONES AL CARGAR LA PÁGINA
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    handleFormSubmission();
    setupScrollToTop();
    observeElements();
    addParallaxEffect();
    setupCourseModals();
});

// ========================================
// ANIMACIONES INICIALES
// ========================================

function initializeAnimations() {
    // Animar elementos con fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.animation = 'fadeInUp 0.8s ease-out forwards';
    });
}

// ========================================
// INTERSECTION OBSERVER PARA SCROLL ANIMATIONS
// ========================================

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animar sección cuando entra en viewport
                const section = entry.target;
                section.style.opacity = '1';
                
                // Animar elementos dentro de la sección
                const children = section.querySelectorAll('.service-card, .contact-item, .form-group, .about-features li');
                children.forEach((child, index) => {
                    child.style.opacity = '1';
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observar todas las secciones
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observar tarjetas de servicio
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });

    // Observar tarjetas de cursos
    document.querySelectorAll('.course-card').forEach(card => {
        observer.observe(card);
    });

    // Observar items de contacto
    document.querySelectorAll('.contact-item').forEach(item => {
        observer.observe(item);
    });
}

// ========================================
// EFECTO PARALLAX EN HERO
// ========================================

function addParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroTop = hero.offsetTop;
        
        if (scrollPosition < heroTop + hero.offsetHeight) {
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
}

// ========================================
// SMOOTH SCROLL Y NAVEGACIÓN
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Considerar el header sticky
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// FORMULARIO DE CONTACTO CON VALIDACIÓN
// ========================================

function handleFormSubmission() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();

        // Validar campos
        if (!validateForm(name, email, service, message)) {
            return;
        }

        // Crear mensaje para WhatsApp
        const whatsappMessage = `*Nuevo Mensaje desde la Web* 📩\n\n` +
            `*Nombre:* ${name}\n` +
            `*Email:* ${email}\n` +
            `${phone ? `*Teléfono:* ${phone}\n` : ''}` +
            `*Servicio de Interés:* ${getServiceName(service)}\n\n` +
            `*Mensaje:*\n${message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/34XXXXXXXXXX?text=${encodedMessage}`;

        // Mostrar confirmación antes de abrir WhatsApp
        showSuccessMessage('¡Enviando tu mensaje por WhatsApp!');

        // Abrir WhatsApp con pequeño delay
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
            form.reset();
            clearInputErrors();
        }, 300);
    });

    // Validación en tiempo real
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        input.addEventListener('focus', function() {
            this.classList.remove('invalid');
        });
    });
}

// ========================================
// VALIDACIÓN DEL FORMULARIO
// ========================================

function validateForm(name, email, service, message) {
    let isValid = true;

    // Validar nombre
    if (name.length < 3) {
        showError('name', 'El nombre debe tener al menos 3 caracteres');
        isValid = false;
    }

    // Validar email
    if (!validateEmail(email)) {
        showError('email', 'Por favor ingresa un email válido');
        isValid = false;
    }

    // Validar servicio
    if (!service) {
        showError('service', 'Por favor selecciona un servicio');
        isValid = false;
    }

    // Validar mensaje
    if (message.length < 10) {
        showError('message', 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateInput(input) {
    if (input.id === 'name' && input.value.trim().length < 3) {
        input.classList.add('invalid');
        return false;
    }
    if (input.id === 'email' && !validateEmail(input.value)) {
        input.classList.add('invalid');
        return false;
    }
    if (input.id === 'message' && input.value.trim().length < 10) {
        input.classList.add('invalid');
        return false;
    }
    
    input.classList.add('valid');
    input.classList.remove('invalid');
    return true;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('invalid');
    field.classList.remove('valid');

    // Mostrar tooltip de error
    let errorDiv = field.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.remove();
    }

    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    error.style.cssText = `
        color: #e74c3c;
        font-size: 0.85rem;
        margin-top: 0.25rem;
        animation: fadeInUp 0.3s ease-out;
    `;
    field.after(error);
}

function clearInputErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.remove());
}

// ========================================
// MENSAJES DE ÉXITO
// ========================================

function showSuccessMessage(message) {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        background-color: #27ae60;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(39, 174, 96, 0.4);
        z-index: 2000;
        animation: slideInRight 0.5s ease-out;
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.5s ease-out reverse';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ========================================
// OBTENER NOMBRE DEL SERVICIO
// ========================================

function getServiceName(serviceValue) {
    const services = {
        'cursos': '📚 Cursos Especializados',
        'asesoria': '💡 Asesoría Técnica',
        'investigacion': '🧪 Investigación Aplicada',
        'otro': 'Otro'
    };
    return services[serviceValue] || serviceValue;
}

// ========================================
// BOTÓN SCROLL TO TOP
// ========================================

function setupScrollToTop() {
    const scrollButton = document.createElement('div');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '↑';
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// EFECTOS DE HOVER EN TARJETAS
// ========================================

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.6s ease-in-out';
    });
});

// ========================================
// CONTADOR SIMPLE PARA STATS (OPCIONAL)
// ========================================

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60fps

        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };

        updateCounter();
    });
}

// ========================================
// EFECTO RIPPLE EN BOTONES
// ========================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Agregar animación ripple al CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .error-message {
        animation: fadeInUp 0.3s ease-out;
    }
`;
document.head.appendChild(style);

// ========================================
// MODALES DE CURSOS
// ========================================

function setupCourseModals() {
    const modal = document.getElementById('courseModal');
    const closeBtn = document.querySelector('.close');
    const openButtons = document.querySelectorAll('.open-modal');

    const courseData = {
        pastas: {
            title: 'El Mundo de las Pastas Cerámicas',
            description: 'Aprende a crear tus propias pastas cerámicas y domina las temperaturas de baja, media y alta. Este curso te brinda la experiencia de casi 30 años de investigación y experimentación.',
            content: [
                'Definición de pastas cerámicas y cuerpos cerámicos',
                'Temperatura de maduración, vitrificación y fusión',
                'Componentes y modificación de pastas',
                'Procesos de mezclado, tamizado y secado',
                'Fórmulas para baja, media y alta temperatura',
                'Evaluación de pastas y pruebas de calidad',
                'Guía completa de pastas cerámicas'
            ],
            duration: '6 horas (2 sesiones de 3 horas)',
            price: '$95 USD',
            target: 'Ceramistas, profesionales y entusiastas de la cerámica'
        },
        esmaltado: {
            title: 'Técnicas de Esmaltado Avanzado',
            description: 'Domina todas las técnicas de esmaltado, combinaciones de colores, efectos especiales y acabados profesionales en tus piezas cerámicas.',
            content: [
                'Tipos de esmaltes y composición química',
                'Preparación y aplicación de esmaltes',
                'Técnicas de inmersión, pulverización y vertido',
                'Combinación de colores y efectos visuales',
                'Cristalización y efectos especiales',
                'Pruebas de compatibilidad y contracción',
                'Material audiovisual y galería de ejemplos'
            ],
            duration: '6 horas (2 sesiones de 3 horas)',
            price: '$85 USD',
            target: 'Ceramistas con experiencia básica'
        },
        hornos: {
            title: 'Control de Hornos y Cocción',
            description: 'Aprende el funcionamiento de diferentes tipos de hornos, controladores de temperatura y optimiza tus procesos de cocción para resultados profesionales.',
            content: [
                'Tipos de hornos: horno eléctrico, gas y leña',
                'Componentes y funcionamiento',
                'Control de temperatura y curvas de cocción',
                'Cargado y descargado de piezas',
                'Mantenimiento y seguridad',
                'Solución de problemas comunes',
                'Datos técnicos y referencias'
            ],
            duration: '5 horas',
            price: '$75 USD',
            target: 'Ceramistas y profesionales de la industria'
        },
        quimica: {
            title: 'Química Cerámica Aplicada',
            description: 'Entiende los fundamentos químicos detrás de los materiales cerámicos, sus reacciones y cómo aplicar este conocimiento en tus procesos.',
            content: [
                'Composición química de materiales cerámicos',
                'Reacciones químicas durante la cocción',
                'Óxidos y sus efectos en los esmaltes',
                'Equilibrio ácido-base en las pastas',
                'Propiedades físicas y químicas',
                'Cálculos de fórmulas cerámicas',
                'Bibliografía y recursos avanzados'
            ],
            duration: '6 horas',
            price: '$90 USD',
            target: 'Profesionales interesados en la ciencia de la cerámica'
        },
        modelado: {
            title: 'Modelado y Torno de Cerámica',
            description: 'Técnicas avanzadas de modelado a mano libre, trabajo con torno cerámico y creación de formas complejas y profesionales.',
            content: [
                'Fundamentos de modelado a mano',
                'Técnicas de centrado en el torno',
                'Levantado y adelgazamiento de paredes',
                'Creación de formas cilíndricas y esféricas',
                'Asas, picos y elementos decorativos',
                'Acabados y detalles profesionales',
                'Ejercicios prácticos y demostraciones'
            ],
            duration: '8 horas (2 días)',
            price: '$80 USD',
            target: 'Principiantes y ceramistas con experiencia'
        },
        porcelana: {
            title: 'Porcelana Fina y Refinada',
            description: 'Especialízate en trabajar porcelana de alta calidad, dominando técnicas refinadas para crear piezas de lujo y exclusivas.',
            content: [
                'Características únicas de la porcelana',
                'Tipos de porcelana y aplicaciones',
                'Preparación y procesamiento de porcelana',
                'Técnicas de modelado fino',
                'Esmaltes y decoraciones especiales',
                'Acabados de lujo y dorados',
                'Casos de éxito y portfolio de obras'
            ],
            duration: '7 horas',
            price: '$110 USD',
            target: 'Ceramistas profesionales y artesanos de lujo'
        }
    };

    // Abrir modal
    openButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const courseKey = this.dataset.course;
            const course = courseData[courseKey];

            if (course) {
                document.getElementById('modalTitle').textContent = course.title;
                document.getElementById('modalDescription').textContent = course.description;
                document.getElementById('modalDuration').textContent = course.duration;
                document.getElementById('modalPrice').textContent = course.price;
                document.getElementById('modalTarget').textContent = course.target;

                const contentList = document.getElementById('modalContent');
                contentList.innerHTML = '';
                course.content.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    contentList.appendChild(li);
                });

                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Cerrar modal
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Cerrar al hacer click fuera del modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Cerrar al presionar ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
}

// ========================================
// INICIAR APLICACIÓN
// ========================================

console.log('✨ Fresnos Pottery - Sitio web cargado exitosamente');
