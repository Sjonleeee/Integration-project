const verticalScroll = () => {
  ScrollTrigger.create({
    trigger: ".verticalScroll",
    pin: "#img__div",
    //   markers: true,
  });

  gsap.set(".img__div img + img", {
    yPercent: 100,
  });

  let firstTransition = gsap.timeline({
    scrollTrigger: {
      trigger: "#main__container--2",
      id: "container2",
      start: "top top",
      // markers: true,
      toggleActions: "play none reverse none",
    },
  });

  firstTransition.to(".image1", {
    yPercent: -100,
  });
  firstTransition.to(
    ".image2",
    {
      yPercent: 0,
    },
    0
  );

  let secondTransition = gsap.timeline({
    scrollTrigger: {
      trigger: "#main__container--3",
      id: "container3",
      start: "top top",
      // // markers: true,
      toggleActions: "play none reverse none",
    },
  });

  secondTransition.to(".image2", {
    yPercent: -100,
  });
  secondTransition.to(
    ".image3",
    {
      yPercent: 0,
    },
    0
  );

  let thirdTransition = gsap.timeline({
    scrollTrigger: {
      trigger: "#main__container--4",
      id: "container4",
      start: "top top",
      // markers: true,
      toggleActions: "play none reverse none",
    },
  });

  thirdTransition.to(".image3", {
    yPercent: -100,
  });
  thirdTransition.to(
    ".image4",
    {
      yPercent: 0,
    },
    0
  );
};

export default verticalScroll;
