const carouse1 = document.querySelector(".carouse1");
firstImg = carouse1.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;



const showHideIcons = () => {
    let scrollWidth = carouse1.scrollWidth - carouse1.clientWidth;
    arrowIcons[0].style.display = carouse1.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carouse1.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        let firstImgWidth = firstImg.clientWidth + 14;
        carouse1.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carouse1.scrollLeft
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carouse1.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carouse1.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carouse1.classList.remove("dragging");
}

carouse1.addEventListener("mousedown", dragStart);
carouse1.addEventListener("mousemove", dragging);
carouse1.addEventListener("mouseup", dragStop);
carouse1.addEventListener("mouseleave", dragStop);


