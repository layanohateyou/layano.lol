let __clicks = 0;
const __pfp = document.getElementsByClassName("pfp-container")[0];

__pfp.addEventListener("click", () => {
    __clicks++;
    if (__clicks === 3) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        __clicks = 0;
    }
});