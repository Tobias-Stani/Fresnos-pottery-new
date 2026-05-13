/* === COURSE DATA === */
const courses = {
  'materias-primas': {
    tag: 'Seminario sincrónico · 30/5/2026',
    title: 'Materias Primas',
    img: 'https://d22fxaf9t8d39k.cloudfront.net/a8e685069862c7ea3c77e73c411b84d8b601af53aaa857be0d943e8b0254efbb452744.png',
    desc: '¿Te frustra que tus piezas se comporten de forma impredecible? Este seminario enseña los procesos físicos y químicos desde la extracción de la arcilla hasta las transformaciones en el horno. Pasás de adivinar a decidir.',
    modules: [
      'Introducción a los orígenes geológicos',
      'Materias primas plásticas',
      'Características de las arcillas',
      'Materiales de carga (agregados)',
      'Materias primas indeseables',
      'Agentes químicos',
      'Comportamiento de materias primas',
      'Reacciones durante la cocción',
      'Interpretación de datos técnicos y curvas de cocción',
    ],
    priceWas: '$90 USD',
    price: '$80 USD',
    url: 'https://fresnospottery.empretienda.com.ar/capacitaciones-individuales/seminario-sincronico-materias-primas-3052026',
  },
  'esmaltes': {
    tag: 'Autogestivo · On demand',
    title: 'Esmaltes',
    img: 'https://d22fxaf9t8d39k.cloudfront.net/06b88e4e750bdf37010305c87351e911d1d28cee106ac55b1941d6b2cc770fa5452744.jpg',
    desc: 'Atacá el craqueado, burbujas y resultados inconsistentes entendiendo cómo interactúan los componentes de óxidos, en lugar de seguir recetas ciegamente.',
    modules: [
      'Introducción a los esmaltes',
      'Propiedades físicas',
      'Propiedades químicas',
      'Propiedades ópticas',
      'Materias primas',
      'Formulación de esmaltes',
      'Solución de defectos',
      'Laboratorio de control de calidad',
    ],
    priceWas: '$120 USD',
    price: '$108 USD',
    url: 'https://fresnospottery.empretienda.com.ar/capacitaciones-individuales/esmaltes-individual',
  },
  'pastas': {
    tag: 'Autogestivo · On demand',
    title: 'Formulación de Pastas',
    img: 'https://d22fxaf9t8d39k.cloudfront.net/a3eead5decc0a376e1a76298f8648d48da3cb150278d0e2f09aea46286a4b005452744.jpg',
    desc: 'Ingeniería de materiales para crear arcillas propias en lugar de depender de productos comerciales. Cubrís selección de materias primas por función y diagramas de fase para predecir el comportamiento de mezclas.',
    modules: [
      'Fundamentos de la formulación',
      'Criterios reológicos',
      'Criterios funcionales',
      'Diagramas de fase binarios y ternarios',
      'Materias primas: plásticos, agregados, fundentes, texturizantes, aditivos',
      'Clasificación: loza, gres, porcelana, pastas especiales',
    ],
    priceWas: '$120 USD',
    price: '$108 USD',
    url: 'https://fresnospottery.empretienda.com.ar/capacitaciones-individuales/formulacion-de-pastas-individual',
  },
  'cristalinos': {
    tag: 'Autogestivo · On demand',
    title: 'Esmaltes Cristalinos',
    img: 'https://d22fxaf9t8d39k.cloudfront.net/c4979bc379da5ba98c3a234ce1225cfa63889060d85c729236774e9c245ee0c1452744.jpg',
    desc: '"Lograr cristales definidos no es cuestión de suerte, sino de entender cómo los átomos se acomodan en el horno." Macrocristales desde una perspectiva científica.',
    modules: [
      'Esmaltes: definición, tipos, diferencias',
      'Estructuras cristalinas y efectos de la cristalización',
      'Materias primas y agentes nucleantes',
      'Parámetros de control: temperatura, reología, especies químicas',
      'Curvas de cocción: microcristales, macrocristales, efectos metálicos',
    ],
    priceWas: '$120 USD',
    price: '$108 USD',
    url: 'https://fresnospottery.empretienda.com.ar/capacitaciones-individuales/esmaltes-cristalinos-individual',
  },
  'hornos': {
    tag: 'Autogestivo · On demand',
    title: 'Hornos y Horneadas',
    img: 'https://d22fxaf9t8d39k.cloudfront.net/fde0752789519b9698563c4a1d63b0a9d733cb4af036be3e3fe9746ad41366ad452744.jpg',
    desc: 'El horno es el corazón del taller. Ciencia del calor: distribución de temperatura, diseño de curvas eficientes y mantenimiento preventivo para evitar fallas costosas.',
    modules: [
      'Mecanismos de transmisión de calor, geometría, aislación y gradientes',
      'Fundamentos de diseño y operación del horno',
      'Vida útil, elementos resistivos y mantenimiento preventivo/correctivo',
      'Métodos de control: conos pirométricos, controles electrónicos',
      'Cálculos térmicos y dinámica del calor',
      'Planificación de curvas de temperatura y optimización de carga',
    ],
    priceWas: '$120 USD',
    price: '$108 USD',
    url: 'https://fresnospottery.empretienda.com.ar/capacitaciones-individuales/hornos-y-horneadas-individual',
  },
  'engobes': {
    tag: 'Autogestivo · On demand',
    title: 'Engobes',
    img: 'https://d22fxaf9t8d39k.cloudfront.net/1a593d88f164956ec913178a2f908a7843c6e28e43138ec26f48ca7d7148b16f452744.png',
    desc: 'Los engobes no son "barro con color": son materiales complejos que requieren formulación equilibrada. Química de silicatos para acabados predecibles y profesionales.',
    modules: [
      'Sílico-aluminatos y materias primas (plásticos, agregados, fundentes)',
      'Reorganización de fórmulas y análisis de diagramas ternarios',
      'Desarrollo de color: estudios de mezcla y análisis de cromóforos',
      'Propiedades reológicas, poder de cobertura y procesamiento',
    ],
    priceWas: '$120 USD',
    price: '$108 USD',
    url: 'https://fresnospottery.empretienda.com.ar/capacitaciones-individuales/engobes-individual',
  },
  'procesos': {
    tag: 'Autogestivo · On demand',
    title: 'Introducción a los Procesos Cerámicos',
    img: 'https://d22fxaf9t8d39k.cloudfront.net/6da008ca5620f180bff120c5b1047cb94bbf788ddaf292e1e83cc9758266ff1e452744.png',
    desc: '"Cada pieza que se rompe en el secado, cada defecto que aparece después del horno tiene una causa. Y tiene solución." Ingeniería cerámica desde el inicio.',
    modules: [
      'Procesamiento de materias primas: sedimentación, purificación, mezcla, molienda',
      'Conformado: colado, torno, prensado, extrusión + control de calidad',
      'Secado: etapas, optimización y reducción de defectos',
      'Cocción: teoría, planificación de curvas, atmósferas oxidante/reductora',
    ],
    priceWas: '$120 USD',
    price: '$108 USD',
    url: 'https://fresnospottery.empretienda.com.ar/capacitaciones-individuales/introduccion-a-los-procesos-ceramicos-individual',
  },
  'tecnicos': {
    tag: 'Autogestivo · On demand',
    title: 'Aspectos Técnicos de la Cerámica',
    img: 'https://d22fxaf9t8d39k.cloudfront.net/dc7efee31d7cd1a9d1b23f25843c4a43bafd4be0809b8e2c5286ea396464399b452744.png',
    desc: 'Transición de la práctica intuitiva a la toma de decisiones informada. Para ceramistas que experimentan fallas inexplicables o siguen fórmulas sin comprenderlas.',
    modules: [
      'Propiedades reológicas: densidad, viscosidad, plasticidad, tixotropía',
      'Materias primas y química: plásticos, agregados, compuestos químicos',
      'Análisis post-cocción: densidad, porosidad, absorción de agua, contracción',
      'Laboratorio cerámico: procedimientos y capacidad de investigación independiente',
    ],
    priceWas: '$120 USD',
    price: '$108 USD',
    url: 'https://fresnospottery.empretienda.com.ar/capacitaciones-individuales/introduccion-a-los-aspectos-tecnicos-individual',
  },
  'quimica': {
    tag: 'Autogestivo · On demand',
    title: 'Química Aplicada a la Cerámica',
    img: 'https://d22fxaf9t8d39k.cloudfront.net/473d4e49a3870b0728083ab69dbaf0f54ec9b87dd546285c8fcac7a8009aa450452744.png',
    desc: 'Enseña a moverse más allá de recetas prestadas entendiendo la química que las gobierna. Accesible para quienes no tienen base en química y valioso para los que sí.',
    modules: [
      'Estructura atómica, radio atómico, electronegatividad y aplicaciones cerámicas',
      'Tabla periódica: propiedades de elementos por grupo',
      'Soluciones, disolventes, unidades de concentración y cálculos de precisión',
      'Formulación de pastas, engobes y esmaltes',
      'Metodología de ensayos sistemáticos con diagramas ternarios',
      'Estequiometría y conversión de expresiones de óxidos',
      'Serie de Hofmeister, pH y selección de defloculantes',
    ],
    priceWas: '$120 USD',
    price: '$108 USD',
    url: 'https://fresnospottery.empretienda.com.ar/capacitaciones-individuales/quimica-aplicada-a-la-ceramica-individual',
  },
};

/* === STICKY HEADER === */
const header = document.getElementById('site-header');
function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

/* === HAMBURGER === */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* === REVEAL ON SCROLL === */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 0.08}s`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* === LEAD CAPTURE MODAL — descomentar junto con el HTML cuando esté lista la access key ===

const leadOverlay = document.getElementById('lead-overlay');
const leadClose = document.getElementById('lead-close');
const leadForm = document.getElementById('lead-form');
const leadCursoHidden = document.getElementById('lead-curso-hidden');
const leadCursoLabel = document.getElementById('lead-curso-label');
const leadSubmit = document.getElementById('lead-submit');

function openLead(courseName) {
  leadCursoHidden.value = courseName || '';
  if (courseName) {
    leadCursoLabel.textContent = '📌 ' + courseName;
    leadCursoLabel.classList.add('visible');
  } else {
    leadCursoLabel.classList.remove('visible');
  }
  leadForm.reset();
  leadCursoHidden.value = courseName || '';
  leadOverlay.classList.add('open');
  leadOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLead() {
  leadOverlay.classList.remove('open');
  leadOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

leadClose.addEventListener('click', closeLead);
leadOverlay.addEventListener('click', e => { if (e.target === leadOverlay) closeLead(); });

leadForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  leadSubmit.textContent = 'Un momento...';
  leadSubmit.disabled = true;

  try {
    const data = new FormData(leadForm);
    await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
  } catch (_) {}

  leadSubmit.textContent = 'Ver instrucciones de pago →';
  leadSubmit.disabled = false;
  closeLead();
  setTimeout(openPayment, 250);
});

=== FIN LEAD MODAL === */

/* === PAYMENT MODAL === */
const payOverlay = document.getElementById('payment-overlay');
const payClose = document.getElementById('payment-close');
const payGoForm = document.getElementById('pay-go-form');
const payCopyBtn = document.getElementById('pay-copy-btn');
const copyLabel = document.getElementById('copy-label');

function openPayment() {
  payOverlay.classList.add('open');
  payOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePayment() {
  payOverlay.classList.remove('open');
  payOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.pay-btn').forEach(btn => {
  btn.addEventListener('click', openPayment);
});

payClose.addEventListener('click', closePayment);
payOverlay.addEventListener('click', e => { if (e.target === payOverlay) closePayment(); });

payGoForm.addEventListener('click', closePayment);

payCopyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText('fresnospottery@gmail.com').then(() => {
    payCopyBtn.classList.add('copied');
    copyLabel.textContent = '¡Copiado!';
    setTimeout(() => {
      payCopyBtn.classList.remove('copied');
      copyLabel.textContent = 'Copiar';
    }, 2000);
  });
});

/* === MODAL === */
const overlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

function openModal(id) {
  const c = courses[id];
  if (!c) return;

  modalContent.innerHTML = `
    <img src="${c.img}" alt="${c.title}" class="modal-img">
    <p class="modal-tag">${c.tag}</p>
    <h2 class="modal-title">${c.title}</h2>
    <p class="modal-desc">${c.desc}</p>
    <p class="modal-modules-title">Contenido del curso</p>
    <ul class="modal-modules">
      ${c.modules.map(m => `<li>${m}</li>`).join('')}
    </ul>
    <div class="modal-footer">
      <div class="modal-price-block">
        <del>${c.priceWas}</del>
        <strong>${c.price}</strong>
      </div>
      <button class="btn btn-primary pay-btn-modal">Inscribirse →</button>
    </div>
  `;

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  modalContent.querySelector('.pay-btn-modal').addEventListener('click', () => {
    closeModal();
    setTimeout(openPayment, 250);
  });
}

function closeModal() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-modal]').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.modal));
});

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closePayment(); } });

/* === SCROLL TOP === */
const scrollTop = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('show', window.scrollY > 400);
}, { passive: true });
scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

