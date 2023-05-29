const moblieMenuToggle = document.querySelector('#mobile-menu-toggle-button');
const mobileNav = document.querySelector('#nav-bar-wrapper');
const mobileNavLink = document.querySelectorAll('.main-nav__link');
const overlay = document.querySelector('#overlay');

const handleOpenMobileNav = () => {
  mobileNav.setAttribute('data-visible', true);
  moblieMenuToggle.setAttribute('aria-expanded', true);
  moblieMenuToggle.setAttribute('src', 'assets/icons/hamburger-close.svg');
  moblieMenuToggle.setAttribute('alt', 'Close mobile navigation icon');
  moblieMenuToggle.style.marginLeft = '22rem';
  document.body.style.overflow = 'hidden';
  overlay.style.display = 'block';
};

const handleCloseMobileNav = () => {
  mobileNav.setAttribute('data-visible', false);
  moblieMenuToggle.setAttribute('aria-expanded', false);
  moblieMenuToggle.setAttribute('src', 'assets/icons/hamburger-open.svg');
  moblieMenuToggle.setAttribute('alt', 'Open mobile navigation icon');
  moblieMenuToggle.style.marginLeft = '0';
  document.body.style.overflow = 'auto';
  overlay.style.display = 'none';
};

// Open mobile nav
moblieMenuToggle.addEventListener('click', () => {
  const visiblity = mobileNav.getAttribute('data-visible');
  if (visiblity === 'false') {
    handleOpenMobileNav();
  }
  if (visiblity === 'true') {
    handleCloseMobileNav();
  }
});

// Handle clicking a mobile menu link
mobileNavLink.forEach((link) => {
  link.addEventListener('click', handleCloseMobileNav);
});

// Close mobile menu when overlay is clicked
overlay.addEventListener('click', handleCloseMobileNav);