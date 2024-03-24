

class displayHandler {
    async displayNone(_class_id) {
        document.querySelector(`.${_class_id}`).style.display = "none"
    }
    async displayFlex(_class_id) {
        document.querySelector(`.${_class_id}`).style.display = "flex"
    }
    async displayGrid(_class_id) {
        document.querySelector(`.${_class_id}`).style.display = "grid"
    }
}


class displaySwitch extends displayHandler {
    swapDisplay(flex_div, none_div) {
        this.displayNone(none_div)
        this.displayFlex(flex_div)
    }
    swapDisplayGrid(flex_div, none_div) {
        this.displayNone(none_div)
        this.displayGrid(flex_div)
    }
    async displaySuccessMessage(succ_div, form_div, modal_cont) {
        this.swapDisplay(succ_div, form_div)
        setTimeout(() => {
            this.swapDisplayGrid(form_div, succ_div)
            this.displayNone(modal_cont)
        }, 1000)
    }
}
export {
    displayHandler,
    displaySwitch
}