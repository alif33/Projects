const video = document.getElementById("video");
const muteBtn = document.getElementById("muteBtn")
const cameraoff = document. getElementById("cameraoff")
const selectCam = document.getElementById("selectCam")
const selectMic = document.getElementById("selectMic")


let mediaStream;
async function getMedia() {
    try{
        mediaStream = await window.navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })
        console.log(mediaStream)
        displayMedia()

    } catch (error) {
        console.log(error);
    }
}

getMedia()

function displayMedia(){
    video.srcObject = mediaStream;
    video.addEventListener('loadedmetadata', ()=>{
        video.play()
    })
}