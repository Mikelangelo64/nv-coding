import initPopups from './popup/init';
import scrollBarInit from './scrollbar';
// import animationCanvasInit from './animationCanvas/animationCanvas';
import fadeContentInit from './fadeContent/init';
import accordionsInit from './accordion/init';
import stagesStylesInit from './stages/init';
import initTitleLines from './titleLines/init';
import vevet from './config/vevet';
// import videoHandler from './video';

export const init = () => {
  scrollBarInit();
  // animationCanvasInit();
  fadeContentInit();
  accordionsInit();
  stagesStylesInit();
  // videoHandler();

  if (!vevet.viewport.isPhone) {
    initTitleLines();
  }

  const header = document.querySelector('.header') as HTMLElement;
  // const headerHeight = header ? header.offsetHeight : 0;
  let isScrolled = false;

  if (header) {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
      isScrolled = true;
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20 && !isScrolled) {
        header.classList.add('scrolled');
        isScrolled = true;
        return;
      }

      if (window.scrollY <= 20 && isScrolled) {
        header.classList.remove('scrolled');
        isScrolled = false;
      }
    });
  }

  const popups = initPopups();
  // console.log(popups);

  const formArr = document.querySelectorAll('form');
  if (formArr.length !== 0) {
    formArr.forEach((form) => {
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        popups.forEach(({ timeline, isThanks }) => {
          if (isThanks) {
            timeline?.play();
          } else {
            timeline?.reverse();
          }
        });
      });
    });

    // document.addEventListener(
    //   'wpcf7mailsent',
    //   function () {
    //     popups.forEach(({ timeline, isThanksPopup }) => {
    //       if (isThanksPopup) {
    //         timeline.play();
    //       } else {
    //         timeline.reverse();
    //       }
    //     });
    //   },
    //   false
    // );
  }
};