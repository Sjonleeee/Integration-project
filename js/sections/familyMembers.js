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

  let isPlaying = false;
  let currentSong = null;

  const getSong = (songName) => {
    if (songName === "soprano") {
      return new Audio("./public/song/soprano-saxophone.mp3");
    }
    if (songName === "alto") {
      return new Audio("./public/song/alt-saxophone.mp3");
    }
    if (songName === "tenor") {
      return new Audio("./public/song/tenor-saxophone.mp3");
    }
    if (songName === "bariton") {
      return new Audio("./public/song/bariton-saxophone.mp3");
    }
  };

  const playSong = (songName, button) => {
    isPlaying = !isPlaying;

    if (isPlaying) {
      button.innerHTML = '<i class="fa fa-stop-circle"></i> Stop song';
      currentSong = getSong(songName);
      currentSong.play();
    } else {
      // console.log("not playing");
      button.innerHTML = '<i class="fa fa-play-circle"></i> Play song';
      currentSong.pause();
      currentSong = null;
    }
  };

  const sopranoBtn = document.querySelector(".sopranoBtn");
  sopranoBtn.addEventListener("click", (event) => {
    playSong(event.target.name, sopranoBtn);
  });

  const altBtn = document.querySelector(".altBtn");
  altBtn.addEventListener("click", (event) => {
    playSong(event.target.name, altBtn);
  });

  const tenorBtn = document.querySelector(".tenorBtn");
  tenorBtn.addEventListener("click", (event) => {
    console.log("test")
    playSong(event.target.name, tenorBtn);
  });

  const baritonBtn = document.querySelector(".baritonBtn");
  baritonBtn.addEventListener("click", (event) => {
    playSong(event.target.name, baritonBtn);
  });
};

export default familyMembers;
