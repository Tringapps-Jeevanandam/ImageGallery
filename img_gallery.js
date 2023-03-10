let musicLibrary = [
  {
    thumbnail:
      "https://i.scdn.co/image/ab6761610000e5eb8bad2f4b1b3159d8c3d29f45",
    songName: "Aasai oru pulveli",
    album: "Attakathi",
    musicDir: "Santhosh Narayanan",
    singer: "Pradeep kumar",
    duration: "04:34",
    desciption:
      "Attakathi's soundtrack was composed by newcomer Santhosh Narayanan, who previously worked as an assistant to composer A. R. Rahman except 'Nadukadalula Kappala' which was composed by the singer Gana Bala himself.[6] The lyrics were written by Kabilan, Muthamil, Gana Bala and Pradeep Kumar.",
  },
  {
    thumbnail: "./thumbnails/img001.jpg",
    album: "Ponniyin Selvan I",
    songName: "Ponni Nadhi",
    musicDir: "A R Rahman",
    singer: "A R Rahman",
    duration: "05:21",
    desciption:
      "The film score and soundtrack were composed by Mani Ratnam's regular collaborator A. R. Rahman.Lyrics were written by Ilango Krishnan, Kabilan, Krithika Nelson and Siva Ananth in the Tamil version and Mehboob Kotwal, Ananta Sriram, Rafeeq Ahamed and Jayanth Kaikini wrote the song lyrics in Hindi, Telugu, Malayalam and Kannada respectively.",
  },
  {
    thumbnail: "./thumbnails/perfect.jpg",
    album: "Deluxe",
    songName: "Perfect",
    musicDir: "Ed Sheeran",
    singer: "Ed Sheeran",
    duration: "04:54",
    desciption:
      "'Perfect' is a song by English singer-songwriter Ed Sheeran from his third studio album, ÷ (2017).[1] After the album's release, it charted at number four on the UK Singles Chart.[2] On 21 August 2017, Billboard announced that 'Perfect' would be the fourth single from the album.[3",
  },
  {
    thumbnail: "./thumbnails/yuvan.jpg",
    album: "Pudhupettai",
    songName: "Oru Nalil",
    musicDir: "Yuvan Sankar Raja",
    singer: "Yuvan Sankar Raja",
    duration: "05:00",
    desciption:
      "The soundtrack was composed by Yuvan Shankar Raja and released on 15 December 2005.[13][14][15] The lyrics were written by Na. Muthukumar, who had previously written the lyrics for Selvaraghavan's earlier films.",
  },
  {
    thumbnail: "./thumbnails/img003.jpg",
    album: "Pyaar Prema Kadhal",
    songName: "High on Love",
    musicDir: "Yuvan Sankar Raja",
    singer: "Sid Sriram",
    duration: "04:09",
    desciption:
      "The soundtrack album of Pyaar Prema Kaadhal was composed by Yuvan Shankar Raja, which features 12 tracks, the most ever in his album.[20] The lyrics were written by Niranjan Bharathi, Vivek, Madhan Karky and Mohan Rajan, for one song each. Sid Sriram, Sanjith Hegde, Al Rufian and Teejay Arunachalam recorded for the film's songs",
  },
  {
    thumbnail: "./thumbnails/yuvan.jpg",
    album: "Pudhupetttai",
    songName: "Oru Nalil",
    musicDir: "Yuvan Sankar Raja",
    singer: "Yuvan Sankar Raja",
    duration: "05:00",
    desciption:
      "The soundtrack was composed by Yuvan Shankar Raja and released on 15 December 2005.[13][14][15] The lyrics were written by Na. Muthukumar, who had previously written the lyrics for Selvaraghavan's earlier films.",
  },
  {
    thumbnail:
      "./thumbnails/pk.jpg",
    album: "Yaaradi Nee Mohini",
    songName: "Venmegam",
    musicDir: "Yuvan Sankar Raja",
    singer: "Hari Haran",
    duration: "03:51",
    desciption:
      "The music of Yaaradi Nee Mohini was scored by Yuvan Shankar Raja, who had composed the music for the original film as well.The lyrics was provided by Naa.Muthukumar.",
  },
  {
    thumbnail: "./thumbnails/ARRahman.jpg",
    album: "Ponniyin Selvan I",
    songName: "Ponni Nadhi",
    musicDir: "A R Rahman",
    singer: "A R Rahman",
    duration: "05:21",
    desciption:
      "The film score and soundtrack were composed by Mani Ratnam's regular collaborator A. R. Rahman.Lyrics were written by Ilango Krishnan, Kabilan, Krithika Nelson and Siva Ananth in the Tamil version and Mehboob Kotwal, Ananta Sriram, Rafeeq Ahamed and Jayanth Kaikini wrote the song lyrics in Hindi, Telugu, Malayalam and Kannada respectively.",
  },
  {
    thumbnail: "./thumbnails/ilayaraja.jpg",
    album: "Pithamagan",
    songName: "Elangathu",
    musicDir: "Ilayaraja",
    singer: "Shreya Goshal",
    duration: "04:54",
    desciption:
      "The soundtrack album was composed by Ilaiyaraaja. The lyrics were penned by Vaali, Mu. Metha, Palani Bharathi and Na. Muthukumar. The song 'Piraiye Piraiye' is set in Pantuvarali raga.",
  },
  {
    thumbnail: "./thumbnails/yuvan.jpg",
    album: "Pyaar Prema Kadhal",
    songName: "High on Love",
    musicDir: "Yuvan Sankar Raja",
    singer: "Sid Sriram",
    duration: "04:09",
    desciption:
      "The soundtrack album of Pyaar Prema Kaadhal was composed by Yuvan Shankar Raja, which features 12 tracks, the most ever in his album.[20] The lyrics were written by Niranjan Bharathi, Vivek, Madhan Karky and Mohan Rajan, for one song each. Sid Sriram, Sanjith Hegde, Al Rufian and Teejay Arunachalam recorded for the film's songs",
  },
  {
    thumbnail: "./thumbnails/yuvan.jpg",
    album: "Yaaradi Nee Mohini",
    songName: "Venmegam",
    musicDir: "Yuvan Sankar Raja",
    singer: "Hari Haran",
    duration: "03:51",
    desciption:
      "The music of Yaaradi Nee Mohini was scored by Yuvan Shankar Raja, who had composed the music for the original film as well.The lyrics was provided by Naa.Muthukumar.",
  },
  {
    thumbnail: "./thumbnails/yuv.jpg",
    album: "Yaaradi Nee Mohini",
    songName: "Venmegam",
    musicDir: "Yuvan Sankar Raja",
    singer: "Hari Haran",
    duration: "03:51",
    desciption:
      "The music of Yaaradi Nee Mohini was scored by Yuvan Shankar Raja, who had composed the music for the original film as well.The lyrics was provided by Naa.Muthukumar.",
  },
];
const render = () => {
  let music = "";
  for (let i = 0; i < musicLibrary.length; i++) {
    music +='<div onclick="display(' + i +')" class="card" style = "background-image: url(' +musicLibrary[i].thumbnail +')"><p>' + musicLibrary[i].songName +"</p><p>" + musicLibrary[i].musicDir +"</p><p>" + musicLibrary[i].singer +"</p></div>";
  }
  document.getElementById("contain").innerHTML = music;
};
const next = () =>{

}
const details = (i) => {
  console.log(i);
  if(i<0){
    i=musicLibrary.length-1;
  }else if(i>musicLibrary.length-1){
    i=0;
  }
  document.getElementById("thumbnail").innerHTML ='<img src = "' + musicLibrary[i].thumbnail + '">';
  document.getElementById("songname").innerHTML = musicLibrary[i].songName;
  document.getElementById("album").innerHTML = musicLibrary[i].album;
  document.getElementById("dir").innerHTML = musicLibrary[i].musicDir;
  document.getElementById("singer").innerHTML = musicLibrary[i].singer;
  document.getElementById("duration").innerHTML = musicLibrary[i].duration;
  document.getElementById("description").innerHTML = musicLibrary[i].desciption;
 
  document.getElementById("previous").innerHTML = '<div onclick="details('+(i-1)+')" class="close "> «</div><div onclick="details('+(i+1)+')" class="close "> »</div><div onclick="cancel()" class="close">✕</div>'
};
const listview = () => {
  let music = "";
  for (let i = 0; i < musicLibrary.length; i++) {
    music +=
      '<div onclick="display(' +
      i +
      ')" class="list-card" style = "background-image: url(' +
      musicLibrary[i].thumbnail +
      ')"><p>' +
      musicLibrary[i].songName +
      "</p><p>" +
      musicLibrary[i].musicDir +
      "</p><p>" +
      musicLibrary[i].singer +
      "</p></div>";
  }
  document.getElementById("contain").innerHTML = music;
};
const gridview = () => {
  render();
};

let modal = document.getElementById("Modal");

const display = (i) => {
  console.log(i);
  modal.style.display = "block";
  details(i);
};

const cancel = () => {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
