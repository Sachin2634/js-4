var rect = document.querySelector("#rect")
var main = document.querySelector("#main")
main.addEventListener("mousemove", (e)=>{
    crsr.style.left = e.x + "px"
    crsr.style.top = e.y + "px"
})