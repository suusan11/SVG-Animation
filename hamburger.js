const hamburger = document.querySelector('.hamburger');
const lineOne = hamburger.querySelector('.line-one');
const lineTwo = hamburger.querySelector('.line-two');
const lineThree = hamburger.querySelector('.line-three');

const lines = [lineOne, lineTwo, lineThree];

const tlm = new TimelineMax({});

const toggleMenu = new TimelineMax({ paused: true, reversed: true });

// hamburger.addEventListener('mouseenter', () => {
//   tlm.staggerTo(lines, 1, { scaleX: 1.5, repeat: 1, yoyo: true }, 0.3);
// })

toggleMenu
  .to(lineTwo, .125, { scaleX: 0 })
  .to(lineOne, .125, { rotation: 45, transformOrigin: "50% 50%", y: 8 })
  .to(lineThree, .125, { rotation: -45, transformOrigin: "50% 50%", y: -8 });

hamburger.addEventListener('click', () => {
  toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reversed();
})