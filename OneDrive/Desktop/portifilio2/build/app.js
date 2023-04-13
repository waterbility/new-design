const slideUp = document.querySelector(".slide-up");
const menuToggle = document.querySelector(".menu-burger");


menuToggle.addEventListener("click", swave)

function swave () {
    console.log(menuToggle)
    this.classlist.add('click');
    slideUp.classList.add('click')
}

// menuToggle.textContent = "hello";