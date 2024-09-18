console.log("Welcome to Veervibe");

// Initialize the Variables
let songIndex = 0;
const audioElement = new Audio('songs/11.mp3');
const masterPlay = document.getElementById('masterPlay');
const myProgressBar = document.getElementById('myProgressBar');
const gif = document.getElementById('gif');
const masterSongName = document.getElementById('masterSongName');
const songItems = Array.from(document.getElementsByClassName('songItem'));

// List of Songs
const songs = [
    { songName: "Aaj ki rat", filePath: "songs/11.mp3", coverPath: "covers/11.jpg" },
    { songName: "Aaya", filePath: "songs/9.mp3", coverPath: "covers/9 (2).jpg" },
    { songName: "Nach panjabban - ", filePath: "songs/2.mp3", coverPath: "covers/2 (2).jpg" },
    { songName: "Ayi na ", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
    { songName: "zihaal le ", filePath: "songs/8.mp3", coverPath: "covers/8 (2).jpg" },
    { songName: "Ami je tomar", filePath: "songs/7.mp3", coverPath: "covers/7 (2).jpg" },
    { songName: "The village", filePath: "songs/3.mp3", coverPath: "covers/3 (2).jpg" },
    { songName: "Ka Kha Ga", filePath: "songs/4.mp3", coverPath: "covers/4 (2).jpg" },
    { songName: "Tumhare rahe", filePath: "songs/5.mp3", coverPath: "covers/5 (2).jpg" },
    { songName: "Saiyaan ji", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Mukkay", filePath: "songs/1.mp3", coverPath: "covers/1 (2).jpg" },
    { songName: "Kanna vich walliyan", filePath: "songs/12.mp3", coverPath: "covers/12.jpg" },
    { songName: "Ishq", filePath: "songs/13.mp3", coverPath: "covers/13.jpg" },
    { songName: "Saanawre", filePath: "songs/14.mp3", coverPath: "covers/14.jpg" },
    { songName: "Galti ", filePath: "songs/15.mp3", coverPath: "covers/15.jpg" },
    { songName: "Zalima", filePath: "songs/16.mp3", coverPath: "covers/16.jpg" },
    { songName: "Mar udi", filePath: "songs/17.mp3", coverPath: "covers/17.jpg" },
    { songName: "Khudaya", filePath: "songs/18.mp3", coverPath: "covers/18.jpg" },
    { songName: "Aisa main shaitaan", filePath: "songs/19.mp3", coverPath: "covers/19.jpg" },
    { songName: "Saanawre", filePath: "songs/20.mp3", coverPath: "covers/20.jpg" },
    { songName: "Lutt Putt gya", filePath: "songs/21.mp3", coverPath: "covers/21.jpg" },
    { songName: "Khali botal", filePath: "songs/22.mp3", coverPath: "covers/22.jpg" },
    { songName: "Tilasmi Bahain", filePath: "songs/23.mp3", coverPath: "covers/23.jpg" },
    { songName: "Angaaron", filePath: "songs/24.mp3", coverPath: "covers/24.jpg" },
];
// Update UI with Songs Data
songItems.forEach((item, index) => {
    const img = item.getElementsByTagName("img")[0];
    const songName = item.getElementsByClassName("songName")[0];
    img.src = songs[index].coverPath;
    songName.innerText = songs[index].songName;
});

// Handle Play/Pause Button Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.replace('fa-pause-circle', 'fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Update Progress Bar
audioElement.addEventListener('timeupdate', () => {
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

// Handle Progress Bar Change
myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});

// Reset All Play Icons
const resetPlayIcons = () => {
    document.querySelectorAll('.songItemPlay').forEach(icon => {
        icon.classList.replace('fa-pause-circle', 'fa-play-circle');
    });
};

// Play Selected Song
document.querySelectorAll('.songItemPlay').forEach(icon => {
    icon.addEventListener('click', (e) => {
        resetPlayIcons();
        songIndex = parseInt(e.target.id);
        e.target.classList.replace('fa-play-circle', 'fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle');
    });
});

// Handle Next Button Click
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle');
});

// Handle Previous Button Click
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle');
});

// Handle Song Ended Event
audioElement.addEventListener('ended', () => {
    songIndex = (songIndex + 1) % songs.length; 
    audioElement.src = songs[songIndex].filePath; 
    masterSongName.innerText = songs[songIndex].songName; 
    audioElement.currentTime = 0; 
    audioElement.play(); 
    masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle'); 
});


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color1 = '#', color2 = '#';
    for (let i = 0; i < 6; i++) {
        color1 += letters[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i < 6; i++) {
        color2 += letters[Math.floor(Math.random() * 16)];
    }


    return `linear-gradient(to right, ${color1}, ${color2})`;
}


function changeSong() {

    const randomGradient = getRandomColor();
    document.querySelector('.container').style.background = randomGradient;
    document.querySelector('ul').style.background = randomGradient;
    let song = songs[songIndex];
    console.log(`Playing: ${song.songName}`);
    songIndex = (songIndex + 1) % songs.length; 
}
document.getElementById('next').addEventListener('click', changeSong);
document.getElementById('previous').addEventListener('click', changeSong);


changeSong();
