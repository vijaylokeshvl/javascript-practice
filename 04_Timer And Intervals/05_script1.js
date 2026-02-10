const downloadBtn = document.getElementById("downloadBtn");
const progress = document.querySelector(".progress");
const statusText = document.querySelector(".status");

let percent = 0;
let interval = null;

downloadBtn.addEventListener("click",()=>{
    if(interval) return ;

    downloadBtn.disabled = true;
    downloadBtn.innerText = "downloading...";
    statusText.innerText = "starting download..."

    interval = setInterval(()=>{
        //random speed (realstic feel)
        let speed = Math.floor(Math.random()*5)+1;
        percent+=speed;

        if(percent>= 100){
            percent = 100;
            clearInterval(interval);
            interval = null;

            statusText.innerText = "Download completed..";
            downloadBtn.innerText = "downloaded";
            downloadBtn.style.background = "green";
        }
        progress.style.width = percent + "%";
        statusText.innerText = `Downloading... ${percent}%`;
    }, 200);
});