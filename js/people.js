const closeBtn = document.querySelectorAll(".close-btn")
const seeMore = document.querySelectorAll(".see-more")
const modal = document.querySelectorAll(".modal")

const seemoreFunc = (i) => {
    modal.forEach((sm, index) => {
        if (i === index + 1) {
            sm.classList.remove("invisible")
            sm.classList.add("visible")
        }
    })
}

const closeFunc = (i) => {
    modal.forEach((sm, index) => {
        if (i === index + 1) {
            sm.classList.remove("visible")
            sm.classList.add("invisible")
        }
    })
}