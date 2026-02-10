let elements = document.getElementsByClassName("z2");
Array.from(element).forEach(ele=> {
    ele.innerText = ele.innerText.toUpperCase();
});
console.dir(elements)