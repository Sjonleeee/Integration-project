const intro = (gsap) => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.2 });

  gsap.from(".intro__img", {
    rotate: 4,
    duration: 0.6,
    yoyo: true,
    repeat: -1,
  });

  gsap.from(
    [
      ".intro__title",
      ".intro__adolpheSax",
      ".intro__text",
      ".intro__text--scroll",
    ],
    {
      opacity: 0,
      y: 5,
      duration: 1,
    }
  );

  tl.to(".arrow1", { y: 50, duration: 0.5 });
  tl.to(".arrow2", { y: 50, duration: 0.5, delay: 0.01 });
  tl.to(".arrow3", { y: 50, duration: 0.5, delay: 0.02 });
  tl.to(".arrow4", { y: 50, duration: 0.5, delay: 0.03 });
};

export default intro;
