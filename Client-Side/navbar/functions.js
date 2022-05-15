
function showInformation() {
    let dogInfo = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < dogInfo.length; i++) {
        dogInfo.addEventListener("click", function() {
            this.classList.toggle("active");

            const content2 = this.nextElementSibling;

            if (content2.style.maxHeight) {
                content2.style.maxHeight = null;
            } else {
                content2.style.maxHeight = content2.scrollHeight + "px";
            }
        });
    }
}