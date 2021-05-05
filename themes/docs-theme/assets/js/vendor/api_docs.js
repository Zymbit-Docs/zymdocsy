document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("div.method > .signature").forEach(
        signatureBox => {
            const boxHeight = signatureBox.clientHeight
            const textElem = signatureBox.querySelector(".name")
            const textElemHeight = textElem.offsetHeight
            console.log([boxHeight, textElemHeight])
            if (boxHeight >= (textElemHeight * 1.5)) {
                signatureBox.classList.add("wrapped-method-signature")
                // signatureBox.querySelectorAll(".param-list .param").forEach(
                //     paramElem => {
                //         paramElem.classList.add("wrapped-param")
                //     }
                // )
            }
        }
    )
})
