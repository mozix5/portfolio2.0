
const setScrollVar=()=>{
    const htmlElement=document.documentElement
    const heightScrolled=htmlElement.scrollTop/htmlElement.clientHeight
    // console.log(heightScrolled);
    htmlElement.style.setProperty("--scroll",Math.min(heightScrolled * 100, 100))
}
window.addEventListener("scroll",setScrollVar)
