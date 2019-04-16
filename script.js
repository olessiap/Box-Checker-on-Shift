const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
function handleCheck(e) {
    //check if SHIFT was pressed
    //AND that check is checked
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked ) {
                inBetween = !inBetween;
            }
            if(inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
})
