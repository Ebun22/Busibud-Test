console.log("Ebun built this")
var count = 0;

//interaction for hamburger icon
document.querySelector(".hamburg").addEventListener('click', () => {
    console.log("this works")
    document.querySelector("header .navbar").classList.add("open");
    document.querySelector("header .navbar").classList.remove("hide");
    document.querySelector("ul").classList.remove("fade");
    document.querySelector("ul").classList.add("notfade");
})

//interaction for hamburger icon
document.querySelector(".close").addEventListener('click', () => {
    console.log("this works")
    document.querySelector("header .navbar").classList.add("hide")
    document.querySelector("header .navbar").classList.remove("open");
    document.querySelector("ul").classList.add("fade")
    document.querySelector("ul").classList.remove("notfade");
})

//animate text- left & right
window.addEventListener("scroll", () => {
    const left = document.querySelectorAll(".animate-left");
    const right = document.querySelectorAll(".animate-right");
    
    right.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (position < screenPos) {
            element.classList.add("visible");
        }
    });

    left.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenPos = window.innerHeight * 0.5;

        if (position < screenPos) {
            element.classList.add("visible");
        }
    });
});

//implementation of card slider
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

//touchstart works only on mobile
next.addEventListener('touchstart', () => {
    console.log(count)
    count++
    if (count == 1) {
        document.querySelector(".card-row .card:first-of-type").style.transform = "translateX(-100%)";
        document.querySelector(".card-row .card:nth-of-type(2)").style.transform = "translateX(0%)";
    } else if (count == 2) {
        document.querySelector(".card-row .card:nth-of-type(2)").style.transform = "translateX(-100%)";
        document.querySelector(".card-row .card:last-of-type").style.transform = "translateX(0%)"
    } else if (count >= 3) {
        count = 2
    }
})


    prev.addEventListener('click', () => {
        count--
        if (count == 1) {
            document.querySelector(".card-row .card:nth-of-type(2)").style.transform = "translateX(0%)";
            document.querySelector(".card-row .card:last-of-type").style.transform = "translateX(100%)";
        } else if (count == 0) {
            document.querySelector(".card-row .card:nth-of-type(2)").style.transform = "translateX(100%)";
            document.querySelector(".card-row .card:first-of-type").style.transform = "translateX(0%)";
        } else if (count < 0) {
            count = 0
        }
    })
