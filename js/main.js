/* ================================================
   MAIN - Scroll, Navigation, Interactions
   ================================================ */

(function() {

  /* ---- Header scroll effect ---- */
  const header = document.getElementById('header');
  let lastScroll = 0;

  function onScroll() {
    const y = window.scrollY;

    // Toggle scrolled class
    if (y > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile menu toggle ---- */
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
      document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        menu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Scroll Reveal Animation ---- */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all
    revealElements.forEach(el => el.classList.add('visible'));
  }

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetY = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetY,
          behavior: 'smooth',
        });
      }
    });
  });

})();

// ---- Login modal & access control ----
(function(){
  const getStarted = document.getElementById('getStarted');
  const getStartedMain = document.getElementById('getStartedMain');
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.getElementById('closeModal');
  const waLink = document.getElementById('waLink');
  const loginBackdrop = document.getElementById('loginBackdrop');

  function showModal(){
    if(!loginModal) return;
    loginModal.setAttribute('aria-hidden', 'false');
    loginModal.classList.add('open');
  }

  function hideModal(){
    if(!loginModal) return;
    loginModal.setAttribute('aria-hidden', 'true');
    loginModal.classList.remove('open');
  }

  // Intercept clicks to chat page to require login
  [getStarted, getStartedMain].forEach(btn => {
    if(!btn) return;
    btn.addEventListener('click', function(e){
      // if logged in, allow navigation
      if(localStorage.getItem('aivolks_logged_in')) return;
      e.preventDefault();
      showModal();
    });
  });

  if(closeModal) closeModal.addEventListener('click', hideModal);
  if(loginBackdrop) loginBackdrop.addEventListener('click', hideModal);

  // When user clicks WhatsApp link, mark them as 'requested' so they can proceed
  if(waLink) waLink.addEventListener('click', function(){
    // Note: number is intentionally left blank. Site owner should edit the href to include number.
    localStorage.setItem('aivolks_logged_in', 'true');
    // allow some time for WhatsApp to open, then redirect to chat
    setTimeout(()=> {
      window.location.href = 'chat.html';
    }, 500);
  });
})();
