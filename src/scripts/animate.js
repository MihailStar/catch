import aos from '../../node_modules/aos/dist/aos';

aos.init({
  disable: () => window.matchMedia('(max-width: 576px)').matches,
  duration: 650,
  once: true,
});
