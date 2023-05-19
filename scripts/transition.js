const bgmusic = document.createElement('audio')
bgmusic.src = '../assets/bgmusic.mp3'
bgmusic.loop = true
bgmusic.autoplay = true

document.body.appendChild(bgmusic)

const button = document.getElementById('no-reason')
const tempbg = document.getElementsByClassName('tempbg-container')[0]
const bgvideo = document.getElementById('bgvideo')
bgvideo.pause()


button.addEventListener('click', () => {
    fade(tempbg, 1000)
    fade(button, 1000)
    bgmusic.play()
    bgvideo.play()
})

function fade(element, duration) {
    var start = new Date;
    (function next() {
        var time = new Date - start;
        if(time < duration) {
            element.style.opacity = 1 - time / duration;
            requestAnimationFrame(next);
        } else {
            element.style.opacity = '0';
            element.style.display = 'none';
        }
    })();
}