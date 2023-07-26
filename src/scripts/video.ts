import vevet from './config/vevet';

const videoHandler = () => {
  const container: HTMLElement | null = document.querySelector('.video-bg');

  if (!container) {
    return;
  }

  const video = container.querySelector('video');

  if (!video) {
    return;
  }

  const source = container.querySelector('source');

  if (!source) {
    return;
  }

  const dataSrc = source.dataset.src;

  if (!dataSrc) {
    return;
  }

  source.src = dataSrc;

  video.load();

  video.addEventListener('loadeddata', () => {
    setTimeout(() => {
      container.classList.add('loaded');
    }, 0);
  });
};

vevet.pageLoad.onLoaded(() => {
  videoHandler();
});

export default videoHandler;
