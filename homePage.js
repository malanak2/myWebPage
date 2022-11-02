function al(msg) {
    alert(msg)
    console.log("clicked btn")
}
const copyrightDiv = document.getElementById("copyright")
const copyrightEl = document.createElement("p")
const year = new Date()
const copyrightText = document.createTextNode("Copyright by Malanak, " + year.getFullYear())
copyrightEl.appendChild(copyrightText)
copyrightDiv.appendChild(copyrightEl)