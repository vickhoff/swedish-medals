import { goldMedals, silverMedals, bronzeMedals } from "/data/medalData.js"



const body = document.body

let allMedals = []

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

            //medalists list
            const medalistsList = document.createElement("ul")
            medalistsList.classList.add("medalists-list")

                array.forEach(medal => {
                    const medalIcon = document.createElement("li")
                    medalIcon.classList.add("medal-icon", value)
                    medalIcons.append(medalIcon)

                    allMedals.push(value)
                    
                    //Add items to medalists
                    const medalistsLi = medal.medalist.map(medalist => `<li>${medalist}</li>`)
                    const medalistsAlt = medal.medalist.map(medalist => medalist)

                    medalistsList.innerHTML += `
                        <li>
                            <h3>${medal.sport}</h3>
                            <ul>
                                ${medalistsLi.join("")}
                            </ul>
                            <img src="${medal.image}" alt="${medalistsAlt}">
                        </li>
                    `

                })


        header.append(h2, medalIcons)

        section.append(header)
        section.append(medalistsList)
   
    fragment.append(section)
    mainEl.append(fragment)
}

console.log(allMedals)

createMedalSection("gold", goldMedals)
createMedalSection("silver", silverMedals)
createMedalSection("bronze", bronzeMedals)

