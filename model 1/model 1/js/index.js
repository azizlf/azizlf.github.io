var btn = document.getElementById("btn-to-home"),
    mainPage = document.getElementById("MPG"),
    homePage = document.getElementById("HPG"),
    returnBtn = document.getElementById("returnBTN")

btn.addEventListener("click",()=>{

    mainPage.style.transform = "translateX(-100%)"
    homePage.style.transform = "translateX(-100%)"

})

returnBtn.addEventListener("click",()=>{

    mainPage.style.transform = "translateX(0%)"
    homePage.style.transform = "translateX(100%)"

})
