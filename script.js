import { goldMedals, silverMedals, bronzeMedals } from "/data/medalData.js"

function createSection() {

}

const body = document.body

const wrapperEl = document.createElement("div")
wrapperEl.id = "wrapper"
body.append(wrapperEl)

const mainEl = document.createElement("main")
wrapperEl.append(mainEl)

const footerEl = document.createElement("footer")
wrapperEl.append(footerEl)


// ============================================
// Hero
// ============================================

const heroFragment = document.createDocumentFragment()

const heroEl = document.createElement("header")
heroEl.id = "hero"

const h1 = document.createElement("h1")
h1.innerHTML = 
`
<span>
    Milano<br>
    Cortina<br>
    2026<br>
</span>
Swedish Olympic Medalists
`

const logoImg = document.createElement("img")
logoImg.src = "./images/logo.png"
logoImg.setAttribute("alt", "Olympic logo")

heroEl.append(h1, logoImg)
heroFragment.append(heroEl)

wrapperEl.insertBefore(heroFragment, mainEl)

