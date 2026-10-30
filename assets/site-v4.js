// Optional enhancements for the compact work index and navigation.
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-v4-filter]').forEach(button=>{
    button.addEventListener('click',()=>{
      const kind=button.getAttribute('data-v4-filter');
      document.querySelectorAll('[data-v4-filter]').forEach(other=>{
        const active=other===button;
        other.classList.toggle('active',active);
        other.setAttribute('aria-pressed',String(active));
      });
      document.querySelectorAll('.v4-workpage .v4-project').forEach(row=>{
        row.hidden=(kind!=='all' && row.getAttribute('data-category')!==kind);
      });
    });
  });
  const menu=document.querySelector('.menu-btn');
  if(menu){
    menu.setAttribute('aria-expanded','false');
    menu.addEventListener('click',()=>menu.setAttribute('aria-expanded',String(!menu.getAttribute('aria-expanded')||menu.getAttribute('aria-expanded')==='false')));
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'){
        document.querySelector('.topbar')?.classList.remove('open');
        menu.setAttribute('aria-expanded','false');
      }
    });
  }
  document.querySelectorAll('[data-lang]').forEach(button=>{
    button.setAttribute('aria-pressed',String(button.classList.contains('active')));
    button.addEventListener('click',()=>document.querySelectorAll('[data-lang]').forEach(other=>other.setAttribute('aria-pressed',String(other===button))));
  });
});


// Zoom-X v5: add Pricing to the shared navigation without rewriting every legacy page.
document.addEventListener('DOMContentLoaded',()=>{
  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.querySelectorAll('.navlinks').forEach(nav=>{
    if(!nav.querySelector('a[href="pricing.html"]')){
      const link=document.createElement('a');
      link.href='pricing.html';
      link.dataset.i18n='nav.pricing';
      link.textContent='Pricing';
      if(current==='pricing.html') link.classList.add('active');
      const contact=nav.querySelector('a[href="contact.html"]');
      nav.insertBefore(link,contact||null);
    }
  });
  document.querySelectorAll('.footer-links').forEach(footer=>{
    if(!footer.querySelector('a[href="pricing.html"]')){
      const link=document.createElement('a');
      link.href='pricing.html';
      link.dataset.i18n='nav.pricing';
      link.textContent='Pricing';
      const contact=footer.querySelector('a[href="contact.html"]');
      footer.insertBefore(link,contact||null);
    }
  });
});


// Keep the payment policy reachable from every page footer.
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.footer-links').forEach(footer=>{
    if(!footer.querySelector('a[href="booking-terms.html"]')){
      const link=document.createElement('a');
      link.href='booking-terms.html';
      link.dataset.i18n='nav.terms';
      link.textContent='Payment policy';
      footer.appendChild(link);
    }
  });
});
