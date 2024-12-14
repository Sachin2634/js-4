var rect = document.querySelector("#center")

const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

rect.addEventListener("mousemove", throttleFunction((dets) => {
    var div = document.createElement("div")
    div.classList.add('imagediv')
    div.style.left = dets.clientX +"px"
    div.style.top = dets.clientY +"px"

    var img = document.createElement("img")
    img.setAttribute("src", "https://img.freepik.com/free-photo/beautiful-castle-surrounded-by-nature_23-2150791523.jpg?t=st=1734199056~exp=1734202656~hmac=8185c0f8198a437fc5148958e004d278a64a1088d2ef25a2d4ed753db510b157&w=360")
    div.appendChild(img)

    document.body.appendChild(div)

    gsap.to(img, {
        y:"0",
        ease: Power1,
        duration:0.6
    })
    
    gsap.to(img, {
        y:"100%",
        delay:0.6,
        ease: Power2,
        
    })

    setTimeout(() => {
        div.remove()
    }, 2000);
},500))