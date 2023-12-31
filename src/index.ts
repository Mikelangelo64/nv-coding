import { Preloader } from 'vevet';
import { init } from '@/scripts/main';
import '@/styles/styles.scss';
import vevet from './scripts/config/vevet';

// document.addEventListener('DOMContentLoaded', () => {
//   init();
// });
// eslint-disable-next-line no-new
new Preloader({
  container: '#v-preloader',
  hide: 300,
});

vevet.pageLoad.onLoaded(() => {
  init();
});
