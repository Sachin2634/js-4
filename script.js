var rect = document.querySelector(".rect")
var main = document.querySelector("#main")
// main.addEventListener("mousemove", (e)=>{
//     rect.style.left = e.x + "px"
    
// })

window.addEventListener("mousemove", function(dets){
    var xval = gsap.utils.mapRange(0,window.innerWidth,0.2*window.innerWidth,0.8*window.innerWidth, dets.clientX)

    gsap.to('.rect', {
        left: xval,
        ease: Power3

    })
})