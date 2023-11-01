const closeBtn = document.querySelectorAll(".close-btn")
const seeMore = document.querySelectorAll(".see-more")
const modals = document.querySelectorAll(".modal")

let modal = function (modalClick) {
    modals[modalClick].classList.add('visible')
    modals[modalClick].classList.remove('invisible')
}

seeMore.forEach((mb, i) => {
    mb.addEventListener("click", () => {
        modal(i)
    })
})
closeBtn.forEach((mc) => {
    mc.addEventListener("click", () => {
        modals.forEach((mv) => {
            mv.classList.remove("visible")
            mv.classList.add("invisible")
        })
    })

})