const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const volumeControl = document.getElementById("volumeControl");
const nameSong = document.getElementById("nameSong");
const imgSong = document.getElementById("img-song");
const singer = document.getElementById("penyanyi");

document.addEventListener("DOMContentLoaded", function () {
  playPauseBtn.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = "❚❚";
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "▶︎";
    }
  });

  volumeControl.addEventListener("input", function () {
    audioPlayer.volume = volumeControl.value;
  });
});

// const listLagu = document.querySelectorAll(".row");
// for (let i = 0; i < listLagu.length; i++) {
//   const element = listLagu[i];
//   element.addEventListener("click",function (params) {

//   })
// }

function listLagu(angka) {
  const list = songs[angka];
  audioPlayer.src = list.source;
  audioPlayer.load();
  audioPlayer.play();
  imgSong.src = list.image;
  nameSong.textContent = list.name;
  singer.textContent = list.penyanyi;
}

const songs = [
  {
    name: "Seasons",
    source: "seasons.mp3",
    image: "album.jpg",
    penyanyi: "Wave To Earth",
  },
  {
    name: "Light",
    source: "Light.mp3",
    image: "thelight.jpg",
    penyanyi: "Wave To Earth",
  },
  {
    name: "Bad",
    source: "bad.mp3",
    image: "how.jpg",
    penyanyi: "Wave To Earth",
  },
  {
    name: "History",
    source: "history.mp3",
    image: "history.jpg",
    penyanyi: "Rich Brian",
  },
  {
    name: "100degrees",
    source: "100degrees.mp3",
    image: "c.jpg",
    penyanyi: "Rich Brian",
  },
  {
    name: "Glow like dat",
    source: "glow like dat.mp3",
    image: "a.jpg",
    penyanyi: "Rich Brian",
  },
  {
    name: "It never ends",
    source: "it never ends.mp3",
    image: "d.jpg",
    penyanyi: "Bring Me The Horizon",
  },
  {
    name: "The House of Wolves",
    source: "the house of wolves.mp3",
    image: "d.jpg",
    penyanyi: "Bring Me The Horizon",
  },
  {
    name: "Midsummer Madness",
    source: "midsummer madness.mp3",
    image: "a.jpg",
    penyanyi: "Rich Brian",
  },
  {
    name: "Scott Street",
    source: "scott street.mp3",
    image: "b.jpg",
    penyanyi: "Phoebe Bridgers",
  },
];
let index = 0;
function playlist() {
  const allSong = songs[index];
  audioPlayer.src = allSong.source;
  audioPlayer.load();
  audioPlayer.play();
  imgSong.src = allSong.image;
  nameSong.textContent = allSong.name;
  singer.textContent = allSong.penyanyi;
}
function prevBtn() {
  index = (index - 1 + songs.length) % songs.length;
  playlist();
}
function nextBtn() {
  index = (index + 1) % songs.length;
  playlist();
}
playlist();

/*loginpage*/
