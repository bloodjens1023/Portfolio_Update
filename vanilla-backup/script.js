/**
 * Portfolio Alexandre Dupont - Interactions & Éléments 3D
 */

// ----------------------------------------------------
// 1. GESTION DU THÈME (Sombre / Clair)
// ----------------------------------------------------
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const currentTheme = localStorage.getItem('theme') || 'dark';

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.textContent = '☀️';
        else if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
    } else {
        document.body.removeAttribute('data-theme');
        if (themeIcon) themeIcon.textContent = '🌙';
        else if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
    }
    // Mise à jour des couleurs 3D si la scène est initialisée
    if (window.update3DThemeColors) {
        window.update3DThemeColors(theme === 'light');
    }
}

applyTheme(currentTheme);

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const isLight = document.body.getAttribute('data-theme') === 'light';
        const newTheme = isLight ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
}


// ----------------------------------------------------
// 2. GESTION DE LA LANGUE (FR / EN)
// ----------------------------------------------------
const langToggleBtn = document.getElementById('lang-toggle');
const langIndicator = document.getElementById('lang-indicator');
let currentLang = localStorage.getItem('portfolio_lang') || 'fr';

const translations = {
    fr: {
        page_title: "Jenny Fandresena | Portfolio Développeur Web Full-Stack",
        nav_about: "À propos",
        nav_education: "Formation",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_contact: "Contact",
        nav_cta: "Me Contacter",

        hero_badge: "Disponible pour de nouvelles opportunités",
        hero_title: 'Bonjour, je suis <span class="highlight">Jenny Fandresena</span>',
        hero_subtitle: 'Développeur Web Full-Stack passionné &bull; Actuellement en <strong>Master 2 Informatique</strong> à l\'<strong>Université ITU Madagascar</strong> (préparation de mémoire).',
        hero_btn_projects: "Voir mes réalisations",
        hero_btn_contact: "Me contacter",
        badge_fullstack: "Full-Stack Web",
        badge_m2: "M2 Informatique &bull; ITU",

        about_title: "À propos de moi",
        about_lead: 'Je m\'appelle <strong>RAKOTOHASIMBOLA Hasiniaina Jenny Fandresena</strong>, Développeur Web Full-Stack basé à Antananarivo, Madagascar.',
        about_p1: "Passionnée par le développement web, l'architecture logicielle et les nouvelles technologies, je conçois des solutions complètes alliant robustesse côté serveur et interfaces utilisateurs intuitives, dynamiques et modernes.",
        about_p2: 'Après avoir obtenu ma Licence en Informatique à l\'Université ESMIA et réussi avec succès mon <strong>Master 1 à l\'Université ITU (Information Technology University)</strong>, je poursuis actuellement mon <strong>Master 2 en Informatique</strong> où je prépare mon mémoire de fin d\'études.',
        about_stat1_label: "En cours · Université ITU",
        about_stat2_label: "Validé avec succès à l'ITU",
        about_stat3_label: "Frontend & Backend",

        edu_title: "Parcours & Formations",
        edu_subtitle: "Mon cursus académique en sciences informatiques et technologies.",
        edu_badge_m2: "Actuel &bull; 2025 - 2026",
        edu_m2_title_text: "Master 2 en Informatique",
        edu_m2_tag: "En préparation de mémoire",
        edu_m2_inst: "Université ITU (Information Technology University) &middot; Madagascar",
        edu_m2_desc: "Spécialisation approfondie en génie logiciel et technologies avancées, rédaction et préparation active du mémoire de recherche.",
        edu_badge_m1: "2024 - 2025 &bull; Validé",
        edu_m1_title_text: "Master 1 en Informatique",
        edu_m1_tag: "Réussi avec succès",
        edu_m1_inst: "Université ITU (Information Technology University) &middot; Madagascar",
        edu_m1_desc: "Conception de systèmes d'information, bases de données avancées, architectures web distribuées et gestion de projets logiciels.",
        edu_licence_title_text: "Licence en Informatique",
        edu_licence_tag: "Diplômée",
        edu_licence_inst: "Université ESMIA &middot; Madagascar",
        edu_licence_desc: "Fondations solides en programmation orientée objet, algorithmique, développement web et administration de bases de données.",
        edu_bac_title: "Baccalauréat Scientifique",
        edu_bac_inst: "Lycée Saint Pierre Malaza &middot; Madagascar",
        edu_bac_desc: "Formation scientifique générale, bases mathématiques et logiques.",

        skills_title: "Mes Compétences",
        skills_frontend: "Frontend",
        skills_backend: "Backend",
        skills_tools: "Outils & Environnements",

        projects_title: "Mes Projets Réalisés",
        proj1_title: "Digitalisation de la Délivrance de la CNI",
        proj1_desc: "Plateforme complète conçue pour simplifier et digitaliser le processus de délivrance des Cartes Nationales d'Identité (CNI). Permet la demande en ligne, la vérification sécurisée des informations et le suivi de la livraison.",
        proj_code_btn: '<span>Code GitHub</span> &rarr;',
        proj2_title: "Gestion de Bibliothèque - Lycée Saint Pierre Malaza",
        proj2_desc: "Plateforme de gestion de bibliothèque numérique pour le Lycée Saint Pierre Malaza. Le système permet aux élèves et au personnel de gérer les prêts de livres, les retours et de consulter le catalogue en ligne.",
        proj3_title: "Portfolio Personnel & Expérimentations Web",
        proj3_desc: "Conception d'une interface web moderne, ultra-rapide et responsive intégrant des animations interactives, effets de perspective 3D et une charte graphique technique haute précision.",

        contact_title: "Contactez-moi",
        contact_subtitle: "Un projet, une proposition ou une collaboration ? N'hésitez pas à me joindre.",
        contact_email_title: "Email",
        contact_phone_title: "Téléphone",
        contact_loc_title: "Localisation",
        contact_loc_desc: 'Andoharanofotsy, Antananarivo, Madagascar<br><small style="color:var(--text-secondary)">lot IIIB 62 D</small>',
        contact_social_title: "Réseaux Sociaux",
        form_name_label: "Votre nom",
        form_name_ph: "Ex: Jean Dupont",
        form_email_label: "Votre email",
        form_email_ph: "Ex: jean.dupont@email.com",
        form_message_label: "Votre message",
        form_message_ph: "Bonjour Jenny, je souhaite échanger avec vous concernant...",
        form_submit_btn: "Envoyer le message",
        form_sending: "Envoi en cours...",
        form_success: "Merci ! Votre message a bien été envoyé.",

        footer_rights: "Jenny Fandresena (RAKOTOHASIMBOLA Hasiniaina). Tous droits réservés.",
        footer_sub: "Développeur Web Full-Stack &middot; Master 2 Informatique ITU Madagascar."
    },
    en: {
        page_title: "Jenny Fandresena | Full-Stack Web Developer Portfolio",
        nav_about: "About",
        nav_education: "Education",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        nav_cta: "Contact Me",

        hero_badge: "Available for new opportunities",
        hero_title: 'Hello, I am <span class="highlight">Jenny Fandresena</span>',
        hero_subtitle: 'Passionate Full-Stack Web Developer &bull; Currently in <strong>Master 2 in Computer Science</strong> at <strong>ITU University Madagascar</strong> (thesis preparation).',
        hero_btn_projects: "View My Projects",
        hero_btn_contact: "Contact Me",
        badge_fullstack: "Full-Stack Web",
        badge_m2: "M2 Computer Science &bull; ITU",

        about_title: "About Me",
        about_lead: 'My name is <strong>RAKOTOHASIMBOLA Hasiniaina Jenny Fandresena</strong>, Full-Stack Web Developer based in Antananarivo, Madagascar.',
        about_p1: "Passionate about web development, software architecture, and modern technologies, I build end-to-end solutions that combine server-side performance and reliability with intuitive, responsive, and dynamic user experiences.",
        about_p2: 'After graduating with a Bachelor\'s degree in Computer Science from ESMIA University and successfully completing my <strong>Master 1 at ITU (Information Technology University)</strong>, I am currently completing my <strong>Master 2 in Computer Science</strong> while preparing my graduation thesis.',
        about_stat1_label: "Ongoing · ITU University",
        about_stat2_label: "Successfully completed at ITU",
        about_stat3_label: "Frontend & Backend",

        edu_title: "Education & Background",
        edu_subtitle: "My academic path in computer science and software engineering.",
        edu_badge_m2: "Current &bull; 2025 - 2026",
        edu_m2_title_text: "Master 2 in Computer Science",
        edu_m2_tag: "Master Thesis Preparation",
        edu_m2_inst: "ITU (Information Technology University) &middot; Madagascar",
        edu_m2_desc: "Advanced specialization in software engineering, cloud and modern architectures, active research and thesis writing.",
        edu_badge_m1: "2024 - 2025 &bull; Completed",
        edu_m1_title_text: "Master 1 in Computer Science",
        edu_m1_tag: "Successfully Completed",
        edu_m1_inst: "ITU (Information Technology University) &middot; Madagascar",
        edu_m1_desc: "Information systems architecture, advanced database design, distributed web systems, and agile software project management.",
        edu_licence_title_text: "Bachelor in Computer Science",
        edu_licence_tag: "Graduated",
        edu_licence_inst: "ESMIA University &middot; Madagascar",
        edu_licence_desc: "Solid foundations in object-oriented programming, algorithms, data structures, full-stack web development, and database administration.",
        edu_bac_title: "Scientific High School Diploma",
        edu_bac_inst: "Lycée Saint Pierre Malaza &middot; Madagascar",
        edu_bac_desc: "General scientific curriculum with strong focus on mathematics and logic.",

        skills_title: "My Skills",
        skills_frontend: "Frontend",
        skills_backend: "Backend",
        skills_tools: "Tools & Environments",

        projects_title: "Featured Projects",
        proj1_title: "Digitalization of National ID Card Issuance",
        proj1_desc: "Full-stack digital platform streamlining and securing the issuance of National Identity Cards (CNI). Features online requests, identity verification workflows, and real-time delivery tracking.",
        proj_code_btn: '<span>GitHub Code</span> &rarr;',
        proj2_title: "Library Management System - Lycée Saint Pierre Malaza",
        proj2_desc: "Comprehensive digital library management application built for Saint Pierre Malaza High School. Enables students and librarians to track book loans, returns, and query the digital catalog.",
        proj3_title: "Personal Portfolio & Web Experiments",
        proj3_desc: "Design and implementation of a sleek, ultra-responsive technical portfolio featuring interactive 3D particle systems, perspective tilt effects, and custom HUD design language.",

        contact_title: "Get in Touch",
        contact_subtitle: "Have a project in mind, an opportunity, or a question? Feel free to reach out anytime.",
        contact_email_title: "Email",
        contact_phone_title: "Phone",
        contact_loc_title: "Location",
        contact_loc_desc: 'Andoharanofotsy, Antananarivo, Madagascar<br><small style="color:var(--text-secondary)">lot IIIB 62 D</small>',
        contact_social_title: "Social Links",
        form_name_label: "Your Name",
        form_name_ph: "e.g. John Doe",
        form_email_label: "Your Email",
        form_email_ph: "e.g. john.doe@example.com",
        form_message_label: "Your Message",
        form_message_ph: "Hello Jenny, I would like to discuss...",
        form_submit_btn: "Send Message",
        form_sending: "Sending message...",
        form_success: "Thank you! Your message has been sent successfully.",

        footer_rights: "Jenny Fandresena (RAKOTOHASIMBOLA Hasiniaina). All rights reserved.",
        footer_sub: "Full-Stack Web Developer &middot; Master 2 in Computer Science ITU Madagascar."
    }
};

function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    // Mise à jour de tous les éléments textuels tagués
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Mise à jour de tous les placeholders tagués
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key] !== undefined) {
            el.placeholder = translations[lang][key];
        }
    });

    // Mise à jour de l'indicateur du bouton (indique l'autre langue vers laquelle basculer)
    if (langIndicator) {
        langIndicator.textContent = lang === 'fr' ? 'EN' : 'FR';
    }
    if (langToggleBtn) {
        const nextLangLabel = lang === 'fr' ? 'Switch to English' : 'Passer en français';
        langToggleBtn.setAttribute('aria-label', nextLangLabel);
        langToggleBtn.setAttribute('title', nextLangLabel);
    }

    // Mise à jour du titre du document
    if (translations[lang].page_title) {
        document.title = translations[lang].page_title;
    }
}

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'fr' ? 'en' : 'fr';
        applyLanguage(nextLang);
    });
}

// Appliquer la langue initiale
applyLanguage(currentLang);


// ----------------------------------------------------
// 3. MENU MOBILE & ANNÉE COURANTE
// ----------------------------------------------------
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-item-link, .nav-link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('open');
    });
});

const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}


// ----------------------------------------------------
// 3. CURSEUR LUMINEUX INTERACTIF
// ----------------------------------------------------
const cursorGlow = document.getElementById('cursor-glow');
if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        currentX += (mouseX - currentX) * 0.12;
        currentY += (mouseY - currentY) * 0.12;
        cursorGlow.style.left = `${currentX}px`;
        cursorGlow.style.top = `${currentY}px`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
}


// ----------------------------------------------------
// 4. ANIMATION AU DÉFILEMENT (Scroll Reveal)
// ----------------------------------------------------
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
} else {
    // Repli immédiat si l'IntersectionObserver n'est pas supporté
    revealElements.forEach(el => el.classList.add('active'));
}


// ----------------------------------------------------
// 5. EFFET 3D TILT INTERACTIF SUR LES CARTES
// ----------------------------------------------------
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
    // Ajouter un élément de reflet lumineux
    const glare = document.createElement('div');
    glare.className = 'tilt-glare';
    card.appendChild(glare);

    let bounds;

    function onMouseEnter() {
        bounds = card.getBoundingClientRect();
    }

    function onMouseMove(e) {
        if (!bounds) bounds = card.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        // Rotation 3D (max 12 degrés)
        const rotateX = (-deltaY * 12).toFixed(2);
        const rotateY = (deltaX * 12).toFixed(2);

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;

        // Déplacement du reflet
        glare.style.opacity = '1';
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.22), transparent 60%)`;
    }

    function onMouseLeave() {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        glare.style.opacity = '0';
    }

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
});


// ----------------------------------------------------
// 6. SCÈNE 3D INTERACTIVE HERO (THREE.JS)
// ----------------------------------------------------
function initHero3D() {
    const canvas = document.getElementById('hero-3d-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const wrapper = canvas.parentElement;
    const width = wrapper.clientWidth;
    const height = 250;

    // Scène, caméra, rendu
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Éclairage style Unity (lumière blanche pure + accents Teal et Electric Blue)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ffb4, 2.8, 50);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0091ea, 2.2, 50);
    pointLight2.position.set(-4, -4, 2);
    scene.add(pointLight2);

    // Palettes de couleurs inspirées de Unity
    const colorPalettes = [
        { primary: 0x00ffb4, secondary: 0x0091ea, name: "Unity Mint / Electric Blue" },
        { primary: 0xffffff, secondary: 0x00ffb4, name: "Unity Pure White / Mint" },
        { primary: 0x1bf2b0, secondary: 0x222c37, name: "Cyber Teal / Ebony Slate" },
        { primary: 0x00e5ff, secondary: 0xff0066, name: "Neon Cyan / Magenta" }
    ];
    let currentPaletteIndex = 0;

    // Générateurs de géométries 3D
    const geometries = [
        new THREE.TorusKnotGeometry(1.05, 0.32, 120, 24),
        new THREE.IcosahedronGeometry(1.4, 0),
        new THREE.OctahedronGeometry(1.5, 0),
        new THREE.DodecahedronGeometry(1.35, 0)
    ];
    let currentGeometryIndex = 0;

    // Matériau solide & wireframe
    let isWireframe = false;
    const material = new THREE.MeshStandardMaterial({
        color: colorPalettes[0].primary,
        metalness: 0.35,
        roughness: 0.2,
        wireframe: false
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: colorPalettes[0].secondary,
        wireframe: true,
        transparent: true,
        opacity: 0.35
    });

    // Mesh principal + sur-mesh filaire
    const mainMesh = new THREE.Mesh(geometries[0], material);
    const wireMesh = new THREE.Mesh(geometries[0], wireframeMaterial);
    wireMesh.scale.set(1.03, 1.03, 1.03);

    const group = new THREE.Group();
    group.add(mainMesh);
    group.add(wireMesh);

    // Nuage de particules orbitales
    const particleCount = 70;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const radius = 2.2 + (Math.random() * 0.8);

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
        color: 0x00ffb4,
        size: 0.05,
        transparent: true,
        opacity: 0.85
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    scene.add(group);

    // Contrôle d'interaction à la souris / tactile (drag & rotation)
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;

    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - prevMouseX;
            const deltaY = e.clientY - prevMouseY;
            dragVelocityX = deltaX * 0.008;
            dragVelocityY = deltaY * 0.008;
            group.rotation.y += dragVelocityX;
            group.rotation.x += dragVelocityY;
            prevMouseX = e.clientX;
            prevMouseY = e.clientY;
        }
    });

    // Support tactile
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            prevMouseX = e.touches[0].clientX;
            prevMouseY = e.touches[0].clientY;
        }
    }, { passive: true });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches.length === 1) {
            const deltaX = e.touches[0].clientX - prevMouseX;
            const deltaY = e.touches[0].clientY - prevMouseY;
            group.rotation.y += deltaX * 0.008;
            group.rotation.x += deltaY * 0.008;
            prevMouseX = e.touches[0].clientX;
            prevMouseY = e.touches[0].clientY;
        }
    }, { passive: true });

    // Interaction : impulsion au clic
    let pulseScale = 1;
    canvas.addEventListener('click', () => {
        pulseScale = 1.25;
    });

    // Boutons de contrôle de la scène 3D
    const btnShape = document.getElementById('btn-change-shape');
    if (btnShape) {
        btnShape.addEventListener('click', () => {
            currentGeometryIndex = (currentGeometryIndex + 1) % geometries.length;
            mainMesh.geometry.dispose();
            wireMesh.geometry.dispose();
            mainMesh.geometry = geometries[currentGeometryIndex];
            wireMesh.geometry = geometries[currentGeometryIndex];
            pulseScale = 1.3;
        });
    }

    const btnWireframe = document.getElementById('btn-wireframe');
    if (btnWireframe) {
        btnWireframe.addEventListener('click', () => {
            isWireframe = !isWireframe;
            material.wireframe = isWireframe;
            btnWireframe.style.color = isWireframe ? 'var(--accent)' : '';
        });
    }

    const btnPalette = document.getElementById('btn-color-palette');
    if (btnPalette) {
        btnPalette.addEventListener('click', () => {
            currentPaletteIndex = (currentPaletteIndex + 1) % colorPalettes.length;
            const currentPal = colorPalettes[currentPaletteIndex];
            material.color.setHex(currentPal.primary);
            wireframeMaterial.color.setHex(currentPal.secondary);
            pointLight1.color.setHex(currentPal.primary);
            pointLight2.color.setHex(currentPal.secondary);
            particleMaterial.color.setHex(currentPal.primary);
        });
    }

    // Mise à jour du thème
    window.update3DThemeColors = function (isLight) {
        if (isLight) {
            ambientLight.intensity = 1.1;
            material.metalness = 0.2;
            material.roughness = 0.4;
        } else {
            ambientLight.intensity = 0.65;
            material.metalness = 0.35;
            material.roughness = 0.2;
        }
    };

    // Redimensionnement
    window.addEventListener('resize', () => {
        const newWidth = wrapper.clientWidth;
        camera.aspect = newWidth / height;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, height);
    });

    // Boucle d'animation
    function animate() {
        requestAnimationFrame(animate);

        // Rotation continue avec amorti
        if (!isDragging) {
            group.rotation.y += 0.007;
            group.rotation.x += 0.004;
        }

        // Rotation des particules en sens opposé
        particles.rotation.y -= 0.003;
        particles.rotation.z += 0.002;

        // Amortissement de l'impulsion (scale)
        if (pulseScale > 1) {
            pulseScale += (1 - pulseScale) * 0.08;
            group.scale.set(pulseScale, pulseScale, pulseScale);
        }

        renderer.render(scene, camera);
    }
    animate();
}


// ----------------------------------------------------
// 7. TOILE DE FOND 3D INTERACTIVE (Particules & Constellation)
// ----------------------------------------------------
function initBackground3D() {
    const bgCanvas = document.getElementById('bg-3d');
    if (!bgCanvas) return;

    const ctx = bgCanvas.getContext('2d');
    let width = bgCanvas.width = window.innerWidth;
    let height = bgCanvas.height = window.innerHeight;

    let particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 75);

    let mouse = {
        x: null,
        y: null,
        radius: 140
    };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener('resize', () => {
        width = bgCanvas.width = window.innerWidth;
        height = bgCanvas.height = window.innerHeight;
        initParticles();
    });

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.7,
                vy: (Math.random() - 0.5) * 0.7,
                size: Math.random() * 2 + 1,
                baseColor: Math.random() > 0.4 ? '0, 255, 180' : (Math.random() > 0.5 ? '0, 145, 234' : '255, 255, 255')
            });
        }
    }
    initParticles();

    function renderBackground() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            // Mouvement
            p.x += p.vx;
            p.y += p.vy;

            // Rebond bords
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            // Interaction souris (répulsion douce)
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    p.x -= Math.cos(angle) * force * 2;
                    p.y -= Math.sin(angle) * force * 2;
                }
            }

            // Dessin particule
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.baseColor}, 0.8)`;
            ctx.fill();

            // Connexions entre particules proches
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 110) {
                    const alpha = (1 - dist / 110) * 0.25;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(${p.baseColor}, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(renderBackground);
    }
    renderBackground();
}


// ----------------------------------------------------
// 8. FORMULAIRE DE CONTACT
// ----------------------------------------------------
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const langData = translations[currentLang] || translations.fr;
        const originalText = langData.form_submit_btn || submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = langData.form_sending || 'Envoi en cours...';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            formStatus.className = 'form-status success';
            formStatus.textContent = langData.form_success || 'Merci ! Votre message a bien été envoyé.';
            contactForm.reset();

            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 5000);
        }, 800);
    });
}


// ----------------------------------------------------
// 9. INITIALISATION AU CHARGEMENT
// ----------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    initHero3D();
    initBackground3D();
});
