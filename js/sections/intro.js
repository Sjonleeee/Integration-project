var tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.2 });

const intro = () => {
  gsap.from(".intro__img", {
    rotate: 2,
    duration: 1,
    yoyo: true,
    repeat: -1,
  });
  // gsap.to(".arrows", {
  //   y: 10,
  //   duration: 1,
  //   yoyo: true,
  //   repeat: -1,
  // });

  tl.to(".arrow1", { y: 50, duration: 0.3 });
  tl.to(".arrow2", { y: 50, duration: 0.3, delay: 0.01 });
  tl.to(".arrow3", { y: 50, duration: 0.3, delay: 0.02 });
  tl.to(".arrow4", { y: 50, duration: 0.3, delay: 0.03 });
};

export default intro;
