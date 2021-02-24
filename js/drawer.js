const refs = {
  openDrawerBtn: document.querySelector('.js-open-drawer'),
  closeDrawerBtn: document.querySelector('.js-close-drawer'),
  drawerOverlay: document.querySelector('.js-drawer-overlay'),
  drawer: document.querySelector('.js-drawer'),
};

refs.openDrawerBtn.addEventListener('click', toggleDrawer);
refs.closeDrawerBtn.addEventListener('click', toggleDrawer);

function toggleDrawer() {
  refs.drawer.classList.toggle('is-open');
  refs.drawerOverlay.classList.toggle('is-visible');

  const isDrawerOpen = refs.drawer.classList.contains('is-open');
  const method = isDrawerOpen ? 'disableBodyScroll' : 'enableBodyScroll';
  bodyScrollLock[method](refs.drawerOverlay);
}
