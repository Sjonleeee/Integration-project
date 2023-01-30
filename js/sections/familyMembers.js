const familyMembers = (gsap) => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.2 });
  
  tl.from(".familyMembers__img", {
    scale: 1.02,
    duration: 1,
    yoyo: true,
    repeat: -1,
  });

  tl.from(".familyMembers__member", {
    y: 5,
    duration: 1,
    yoyo: true,
    repeat: -1,
  });
};

export default familyMembers;
