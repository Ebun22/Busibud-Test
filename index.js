console.log("this works")
var count = 0;
document.querySelector(".hamburg").addEventListener('click', () => {
    console.log("this works")
    document.querySelector("header .navbar").classList.add("open");
    document.querySelector("header .navbar").classList.remove("hide");
    document.querySelector("ul").classList.remove("fade");
    document.querySelector("ul").classList.add("notfade");
    // document.querySelector(".person-avatar").classList.add("open");
    // document.querySelector(".nav-cont").classList.add("open");
})

document.querySelector(".close").addEventListener('click', () => {
    console.log("this works")
    document.querySelector("header .navbar").classList.add("hide")
    document.querySelector("header .navbar").classList.remove("open");
    document.querySelector("ul").classList.add("fade")
    document.querySelector("ul").classList.remove("notfade");
    // document.querySelector(".person-avatar").classList.add("open");
    // document.querySelector(".nav-cont").classList.add("open");
})

window.addEventListener("scroll", () => {
    const left = document.querySelectorAll(".animate-left");
    const right = document.querySelectorAll(".animate-right");
    // const position = li.getBoundingClientRect().top;
    // const screenPos = window.innerHeight;

    right.forEach((element) => {

        //   const element = li.clientHeight; && (position + element)&& (position + elementLeft) > 0
        //   const elementLeft = right[i].clientHeight
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

var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

// function scrollFunction(isMobile) {
//     if (!isMobile) { 
//         next.removeEventListener('click', () => {})
//         console.log("computer")
//     }
//   }
  
//   var matchMedia =  window.matchMedia("max-width:800px") // or whatever you consider mobile width for your use case.
//   scrollFunction(matchMedia.matches) // Call listener function at run time
// //   matchMedia.addListener(myFunction)


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
