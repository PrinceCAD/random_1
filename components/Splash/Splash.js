import { heading } from "../headings.js"
import { text } from "../text.js"

export const Splash = (text_1,text_2) =>{
    const splash = document.createElement('div')
    splash.id = "splash"

    splash.appendChild(heading(text_1, "headline"))
    splash.appendChild(text(text_2, "splash-text"))
    document.body.appendChild(splash)
}