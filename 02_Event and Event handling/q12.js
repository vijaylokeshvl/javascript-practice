let input = document.querySelector("#inputbox");
let output = document.querySelector("#output");
input.addEventListener("keyup",function(dets){
     output.textContent = `key released: ` + dets.key;
})