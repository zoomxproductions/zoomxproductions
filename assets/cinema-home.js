/* Zoom-X / cinematic homepage. Lightweight native browser interactions, no dependencies. */
(()=>{
  'use strict';
  const $=(selector,root=document)=>root.querySelector(selector);
  const $$=(selector,root=document)=>Array.from(root.querySelectorAll(selector));
  const nav=$('#primary-nav');
  const menu=$('#menu-toggle');
  const openMenu=(isOpen)=>{
    if(!nav||!menu)return;
    nav.classList.toggle('is-open',isOpen);
    menu.setAttribute('aria-expanded',String(isOpen));
    menu.setAttribute('aria-label',isOpen?'Close menu':'Open menu');
    $('.menu-text',menu).textContent=isOpen?'Close':'Menu';
  };
  menu?.addEventListener('click',()=>openMenu(menu.getAttribute('aria-expanded')!=='true'));
  $$('#primary-nav a').forEach(link=>link.addEventListener('click',()=>openMenu(false)));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')openMenu(false)});

  const translations={
    fr:{
      navWork:'Projets',navFilms:'Films',navServices:'Services',navPricing:'Tarifs',navAbout:'À propos',navContact:'Contact',quote:'Demander un devis',
      heroKicker:'ZOOM-X / ORLANDO, FLORIDE',heroCategory:'PRODUCTION VIDÉO · PHOTOGRAPHIE · DIGITAL',heroLine1:'Vidéo.',heroLine2:'Photo.',heroLine3:'Motion.',
      heroDesc:'Vidéos commerciales, interviews, événements, photographie et projets numériques. Produits par Zoom-X.',watchMain:'Voir le film ↗',allWork:'Explorer nos projets ↗',heroFootnote:'ZOOM-X PRODUCTIONS — SÉLECTION DE VIDÉOS',scroll:'DÉFILER POUR EXPLORER ↓',
      sectionFilmsLabel:'FILMS ET VIDÉOS',selectedTitle:'Images en mouvement.',selectedDesc:'Deux courtes réalisations de notre collection. Ouvrez un film pour le regarder avec le son.',playWithSound:'VOIR AVEC LE SON',filmZoomType:'Vidéo courte',filmGalleryCaption:'De la caméra au montage final.',filmClaireType:'Dans les coulisses',completeFilms:'Voir tous les films ↗',
      sectionFieldLabel:'SUR LE TERRAIN',fieldTitle:'Au-delà de l’écran.',fieldDesc:'Reportages, interviews et journées de production issus de notre collection de photos. De vrais moments sur le terrain et en tournage.',viewPhotos:'Voir les photos ↗',photoPress:'REPORTAGE',photoTeam:'PRODUCTION',
      sectionServicesLabel:'NOS SERVICES',servicesTitle:'Production et services.',servicesDesc:'Expliquez-nous votre projet. Nous confirmons le périmètre exact avant le tournage ou le développement.',
      serviceFilm:'Production vidéo',serviceFilmDesc:'Vidéos promotionnelles, interviews, événements et clips',serviceFilmPrice:'Dès 600 $',servicePhoto:'Photographie',servicePhotoDesc:'Photographie commerciale, portraits et événements',servicePhotoPrice:'Dès 450 $',serviceSocial:'Réseaux sociaux et campagnes',serviceSocialDesc:'Contenu, publications et publicité',serviceSocialPrice:'Dès 750 $/mois',serviceWeb:'Sites web',serviceWebDesc:'Sites d’entreprise et portfolios en ligne',serviceWebPrice:'Dès 350 $',serviceApp:'Développement d’applications',serviceAppDesc:'Applications web et mobiles',serviceAppPrice:'Dès 3 000 $',servicesSeePricing:'Tous les services et tarifs ↗',
      sectionDigitalLabel:'PROJETS NUMÉRIQUES',digitalTitle:'Au-delà de la production.',digitalDesc:'Sites web, boutiques en ligne et applications de notre portfolio numérique.',digitalKoneksyon:'Plateforme sociale · Site web et application mobile',digitalOlleni:'Boutique de produits capillaires et de beauté',
      priceKicker:'TARIFS DE DÉPART / USD',priceTitle:'Pour commencer.',priceDesc:'Les forfaits et coûts définitifs sont confirmés par écrit.',ratePhoto:'Photo commerciale',ratePromo:'Vidéo promotionnelle',rateWeb:'Site web',rateApp:'Application',
      contactKicker:'TRAVAILLER AVEC ZOOM-X',contactTitle:'Vous avez un projet ?',contactDesc:'Décrivez le service, le lieu et votre calendrier. Nous confirmerons les détails avant tout paiement.',contactButton:'Démarrer un projet ↗',contactMeta:'ORLANDO, FLORIDE / DEMANDES DE PROJETS',footerPolicy:'Conditions de paiement',modalFooter:'Regardez avec le son · Utilisez Pause pour arrêter'
    },
    es:{
      navWork:'Proyectos',navFilms:'Videos',navServices:'Servicios',navPricing:'Precios',navAbout:'Nosotros',navContact:'Contacto',quote:'Solicitar cotización',
      heroKicker:'ZOOM-X / ORLANDO, FLORIDA',heroCategory:'PRODUCCIÓN DE VIDEO · FOTOGRAFÍA · DIGITAL',heroLine1:'Video.',heroLine2:'Foto.',heroLine3:'Movimiento.',
      heroDesc:'Videos comerciales, entrevistas, eventos, fotografía y proyectos digitales. Producidos por Zoom-X.',watchMain:'Ver el video ↗',allWork:'Explorar proyectos ↗',heroFootnote:'ZOOM-X PRODUCTIONS — VIDEOS SELECCIONADOS',scroll:'DESLIZA PARA EXPLORAR ↓',
      sectionFilmsLabel:'CINE Y VIDEO',selectedTitle:'Imágenes en movimiento.',selectedDesc:'Dos videos cortos de nuestro archivo. Abre cualquiera para verlo con sonido.',playWithSound:'VER CON SONIDO',filmZoomType:'Video corto',filmGalleryCaption:'De la cámara a la edición final.',filmClaireType:'Detrás de cámaras',completeFilms:'Ver todos los videos ↗',
      sectionFieldLabel:'EN EL TERRENO',fieldTitle:'Más allá de la pantalla.',fieldDesc:'Reportajes, entrevistas y días de producción de nuestro archivo fotográfico. Momentos reales en el estudio y en el terreno.',viewPhotos:'Ver galería de fotos ↗',photoPress:'REPORTAJE',photoTeam:'PRODUCCIÓN',
      sectionServicesLabel:'QUÉ HACEMOS',servicesTitle:'Producción y servicios.',servicesDesc:'Cuéntanos lo que necesitas. Confirmamos el alcance antes de producir o desarrollar.',
      serviceFilm:'Producción de video',serviceFilmDesc:'Videos promocionales, entrevistas, eventos y música',serviceFilmPrice:'Desde $600',servicePhoto:'Fotografía',servicePhotoDesc:'Comercial, retratos y eventos',servicePhotoPrice:'Desde $450',serviceSocial:'Redes sociales y campañas',serviceSocialDesc:'Contenido, publicaciones y publicidad',serviceSocialPrice:'Desde $750/mes',serviceWeb:'Sitios web',serviceWebDesc:'Sitios para empresas y portafolios',serviceWebPrice:'Desde $350',serviceApp:'Desarrollo de aplicaciones',serviceAppDesc:'Aplicaciones web y móviles',serviceAppPrice:'Desde $3,000',servicesSeePricing:'Guía de servicios y precios ↗',
      sectionDigitalLabel:'TRABAJO DIGITAL',digitalTitle:'Más allá de la producción.',digitalDesc:'Sitios web, tiendas online y aplicaciones de nuestro portafolio digital.',digitalKoneksyon:'Plataforma social · Sitio web y aplicación móvil',digitalOlleni:'Tienda online de cabello y belleza',
      priceKicker:'PRECIOS DESDE / USD',priceTitle:'Para comenzar.',priceDesc:'Los paquetes y costos finales se confirman por escrito.',ratePhoto:'Fotografía comercial',ratePromo:'Video promocional',rateWeb:'Sitio web',rateApp:'Aplicación',
      contactKicker:'TRABAJA CON ZOOM-X',contactTitle:'¿Tienes un proyecto?',contactDesc:'Indícanos el trabajo, la ubicación y la fecha. Confirmaremos los detalles antes del pago.',contactButton:'Iniciar un proyecto ↗',contactMeta:'ORLANDO, FLORIDA / CONSULTAS DE PROYECTOS',footerPolicy:'Política de pagos',modalFooter:'Mira con sonido · Usa Pausa para detener'
    }
  };
  const locales=$$('[data-locale]');
  const translatables=$$('[data-t]');
  const defaults=new WeakMap(translatables.map(el=>[el,el.innerHTML]));
  function switchLocale(lang){
    if(!['en','fr','es'].includes(lang))lang='en';
    document.documentElement.lang=lang;
    translatables.forEach(el=>{
      const value=translations[lang]?.[el.dataset.t];
      if(typeof value==='string')el.textContent=value;
      else el.innerHTML=defaults.get(el);
    });
    locales.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.locale===lang)));
    try{localStorage.setItem('zoomx-lang',lang)}catch(_error){}
  }
  locales.forEach(button=>button.addEventListener('click',()=>switchLocale(button.dataset.locale)));
  try{switchLocale(localStorage.getItem('zoomx-lang')||'en')}catch(_error){switchLocale('en')}
  const year=$('#year');if(year)year.textContent=String(new Date().getFullYear());

  const reels={
    zoom:{title:'Zoom and Ang',src:'assets/video-portfolio/Zoom-and-Ang-web.mp4',poster:'assets/video-portfolio/Zoom-and-Ang-poster.webp'},
    claire:{title:'Claire Compas BTS',src:'assets/video-portfolio/Claire-Compas-BTS-web.mp4',poster:'assets/video-portfolio/Claire-Compas-BTS-poster.webp'}
  };
  const viewer=$('#film-dialog');
  const player=$('#dialog-player');
  const ambient=$('#ambient-reel');
  let lastButton=null,ambientIntersecting=true;
  const canMove=()=>!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&!navigator.connection?.saveData;
  const resumeAmbient=()=>{
    if(!ambient||!ambientIntersecting||!canMove()||!viewer?.open||document.hidden)return;
    if(!ambient.getAttribute('src'))ambient.setAttribute('src',ambient.dataset.src);
    ambient.play().catch(()=>{});
  };
  const closeFilm=()=>{
    if(!viewer?.open)return;
    viewer.close();
  };
  const openFilm=(key,opener)=>{
    const film=reels[key];
    if(!film)return;
    if(!viewer||typeof viewer.showModal!=='function'){
      window.location.href='videos.html';return;
    }
    lastButton=opener;
    ambient?.pause();
    $('#dialog-heading').textContent=`ZOOM-X / ${film.title.toUpperCase()}`;
    player.poster=film.poster;
    player.src=film.src;
    player.muted=false;
    player.load();
    viewer.showModal();
    player.play().catch(()=>{});
  };
  $$('[data-film]').forEach(el=>el.addEventListener('click',()=>openFilm(el.dataset.film,el)));
  $('#dialog-close')?.addEventListener('click',closeFilm);
  viewer?.addEventListener('click',event=>{if(event.target===viewer)closeFilm()});
  viewer?.addEventListener('close',()=>{
    player.pause();player.removeAttribute('src');player.load();
    lastButton?.focus({preventScroll:true});
    // The ambient video only resumes if the hero is in view and motion is allowed.
    if(ambientIntersecting&&canMove()&&!document.hidden){
      if(!ambient.getAttribute('src'))ambient.setAttribute('src',ambient.dataset.src);
      ambient.play().catch(()=>{});
    }
  });
  if(ambient){
    const watchAmbient=new IntersectionObserver(entries=>{
      const intersecting=entries[0]?.isIntersecting&&entries[0]?.intersectionRatio>0.14;
      ambientIntersecting=!!intersecting;
      if(intersecting&&canMove()&&!viewer?.open&&!document.hidden){
        if(!ambient.getAttribute('src'))ambient.setAttribute('src',ambient.dataset.src);
        ambient.play().catch(()=>{});
      }else ambient.pause();
    },{threshold:[0,.15,.5]});
    watchAmbient.observe(ambient);
    document.addEventListener('visibilitychange',()=>{if(document.hidden)ambient.pause();else if(ambientIntersecting&&canMove()&&!viewer?.open){if(!ambient.getAttribute('src'))ambient.setAttribute('src',ambient.dataset.src);ambient.play().catch(()=>{})}});
  }
  const progress=$('#scroll-progress');
  if(progress){
    let updating=false;
    const update=()=>{
      const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      const pct=Math.min(1,Math.max(0,window.scrollY/max));
      progress.style.transform=`scaleY(${pct})`;
      updating=false;
    };
    const onScroll=()=>{if(!updating){updating=true;requestAnimationFrame(update)}};
    window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);update();
  }
  if('IntersectionObserver'in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const hidden=$$('.reveal-on-view');
    document.documentElement.classList.add('motion-ready');
    const revealObserver=new IntersectionObserver((entries,observer)=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}});
    },{rootMargin:'0px 0px -7% 0px',threshold:.08});
    hidden.forEach(el=>revealObserver.observe(el));
  }
})();