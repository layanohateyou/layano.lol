const menuButton = document.getElementById('menu-button');
const menu = document.getElementsByClassName('menu-list')[0];
const content = document.getElementById('content-text');
const pfp = document.getElementsByClassName("pfp-container")[0];
let clicks = 0;

menuButton.addEventListener('click', () => {
    if (clicks % 2 === 0) {
        fade(content, 200);
        fade(pfp, 200);
        unfade(menu, 200);
        menuButton.innerHTML = 'Go Back?';
        clicks ++;
    } else {
        unfade(content, 200);
        unfade(pfp, 200);
        fade(menu, 200);
        menuButton.innerHTML = 'Menu';
        clicks ++;
    }
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

function unfade (element, duration) {
    var start = new Date;
    (function next() {
        var time = new Date - start;
        if(time < duration) {
            element.style.opacity = time / duration;
            requestAnimationFrame(next);
        } else {
            element.style.opacity = '1';
            element.style.display = 'block';
        }
    })();
}