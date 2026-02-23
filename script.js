import { goldMedals, silverMedals, bronzeMedals } from "/data/medalData.js"



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


// ============================================
// Gold section
// ============================================



function createMedalSection(value, array) {
    const fragment = document.createDocumentFragment()
    console.log(array.length)

    //section
    const section = document.createElement("section")
    section.setAttribute("id", `${value}-medalists`)
    section.classList.add("medalists")

        //section header
        const header = document.createElement("header")
        header.setAttribute("id", `header-${value}`)
        header.classList.add("header-medal")

            //h2
            const h2 = document.createElement("h2")
            h2.textContent = value[0].toUpperCase() + value.slice(1).toLowerCase()

            //medal icons
            const medalIcons = document.createElement("ul")
            medalIcons.classList.add("medal-icons")
                
                for (let i = 1; i <= array.length; i++) {
                    const listItem = document.createElement("li")
                    listItem.classList.add("medal-icon", value)
                    medalIcons.append(listItem)
                }

        header.append(h2, medalIcons)
        section.append(header)

    fragment.append(section)
    mainEl.append(fragment)

}

createMedalSection("gold", goldMedals)

