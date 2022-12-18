console.log("Welcome to Spotify");

// initialialize the variables
let songIndex = 0;
let audioElement = new  Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs =[
    {songname:"Salam-e-Ishq", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songname:"Iskme me tere galim ", filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songname:"Har dil mange pyare", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songname:"Iskne galim nikamma kar diya", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songname:"Ho gaya tumse pyar", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songname:"Did lage na kahi", filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songname:"Love you like you do", filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songname:"Pyar me ho gaya pagal", filePath:"songs/8.mp3", coverPath: "covers/8.jpg"}
]
songItems.forEach((element,i)=>{
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;

})

// audioElement.play();


// handle play.pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity =0;



    }
});

//listen to event

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // update seekwar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllplay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
           
    
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllplay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src =`songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity =1;

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex =0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src =`songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime =0;
    audioElement.play();
    gif.style.opacity =1;

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})        
    
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex =0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src =`songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime =0;
    audioElement.play();
    gif.style.opacity =1;

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    

})

