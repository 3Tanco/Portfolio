const cursor = document.querySelector(".cusor");
const links = document.querySelector("nav  li a")

document.addEventListener('mousemove',(e) => {
    let leftpsotion= e.pageX; + 4;
    let topPostion= e.pageY; +4;

    cursor.style.left = leftpsotion + "px";
    cursor.style.top = topPostion + "px";
})

links.forEach(link => {
    link.addEventListener("mouseenter"),() =>
    cusror.classList.add("Large")
    
});