console.log("this works")

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