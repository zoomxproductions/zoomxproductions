/* Shared navigation and lightweight interactions for Zoom-X inner pages. No analytics or external dependencies. */
(()=>{
  'use strict';
  const nav=document.querySelector('.head-nav');
  const menu=document.querySelector('.mobile-menu');
  const activePath=(location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const activeGroup=activePath.startsWith('service-')?'services.html':(activePath==='gallery.html'||activePath.startsWith('work-')?'work.html':activePath);
  document.querySelectorAll('.head-nav a').forEach(a=>{if(a.getAttribute('href')===activeGroup)a.setAttribute('aria-current','page')});
  const closeMenu=()=>{nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='MENU'};
  menu?.addEventListener('click',()=>{
    const opened=nav?.classList.toggle('open')||false;
    menu.setAttribute('aria-expanded',String(opened));
    menu.textContent=opened?'CLOSE':'MENU';
  });
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
  const all=window.ZOOMX_I18N||{};
  const elements=[...document.querySelectorAll('[data-i18n]')];
  const english=new WeakMap(elements.map(el=>[el,el.textContent]));
  function setLanguage(lang){
    if(!['en','fr','es'].includes(lang))lang='en';
    document.documentElement.lang=lang;
    for(const element of elements){
      const translation=all?.[lang]?.[element.dataset.i18n];
      element.textContent=translation!==undefined?translation:english.get(element);
    }
    document.querySelectorAll('[data-language]').forEach(button=>{
      const selected=button.dataset.language===lang;
      button.classList.toggle('active',selected);
      button.setAttribute('aria-pressed',String(selected));
    });
    try{localStorage.setItem('zoomx-lang',lang)}catch(_e){}
  }
  let initial='en';
  try{initial=localStorage.getItem('zoomx-lang')||'en'}catch(_e){}
  setLanguage(initial);
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
  const year=document.querySelector('#year');if(year)year.textContent=String(new Date().getFullYear());
  document.querySelectorAll('[data-v4-filter]').forEach(button=>{
    button.addEventListener('click',()=>{
      const kind=button.dataset.v4Filter;
      document.querySelectorAll('[data-v4-filter]').forEach(other=>{
        const active=other===button;
        other.classList.toggle('active',active);
        other.setAttribute('aria-pressed',String(active));
      });
      document.querySelectorAll('.v4-workpage .v4-project').forEach(row=>{
        row.hidden=kind!=='all'&&row.dataset.category!==kind;
      });
    });
  });
  const form=document.querySelector('#project-form');
  if(form){
    const preset=new URLSearchParams(location.search).get('service');
    if(preset&&form.elements.service&&[...form.elements.service.options].some(option=>option.value===preset))form.elements.service.value=preset;
    form.addEventListener('submit',event=>{
      event.preventDefault();
      if(!form.reportValidity())return;
      const lang=document.documentElement.lang;
      const subject=all?.[lang]?.['form.subject']||'Zoom-X Productions project inquiry';
      const selected=form.elements.service;
      const service=selected.options[selected.selectedIndex]?.text||'';
      const body=['Name: '+form.elements.name.value.trim(),
        'Email: '+form.elements.email.value.trim(),
        'Service: '+service,
        '', 'Project details:',form.elements.details.value.trim()].join('\n');
      location.href='mailto:info@zoomxproductions.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
    });
  }
})();
