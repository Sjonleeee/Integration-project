
const intro = () => {
  gsap.from([".intro__img"], {
    rotate: 2,
    duration: 1,
    yoyo: true,
    repeat: -1,
  });
};

export default intro;
