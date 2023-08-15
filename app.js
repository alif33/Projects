const video = document.getElementById("video");
const muteBtn = document.getElementById("muteBtn")
const cameraoff = document. getElementById("cameraoff")
const selectCam = document.getElementById("selectCam")
const selectMic = document.getElementById("selectMic")


let mediaStream;
let mute = false;
let camera = false;

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

muteBtn.addEventListener('click', (e)=>{
    if (mute) {
        muteBtn.textContent = "Mute"
        mute = false
        mediaStream.getAudioTracks()
        .forEach(track => {
            track.enabled = true
        })
    }else{
        muteBtn.textContent = "Unmute"
        mute = true
        mediaStream.getAudioTracks()
            .forEach(track => {
                track.enabled = false
            })
        console.log(mediaStream.getAudioTracks())
    }
})


cameraoff.addEventListener("click", function(e){
    if(camera){
        cameraoff.textContent = "Turn off camera"
        camera = false
        mediaStream.getVideoTracks()
        .forEach(track => {
            track.enabled = true
        })

    }else{
        cameraoff.textContent = "Turn on camera"
        camera = true
        mediaStream.getVideoTracks()
        .forEach(track => {
            track.enabled = false
        })
    }

})