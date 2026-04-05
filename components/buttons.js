export const spinnerButton = (text, onClick) =>{
    let node = document.createElement('div')
    node.className = 'carousel-button'

    let svg = document.createElement('div')
    svg.className = "arrow"
    svg.innerHTML = `<img src="public/Icons/Arrow.svg" style="margin:0;width:40px"/>`

    node.innerHTML = `${text}`
    node.addEventListener("click", ()=>{
        onClick()
    })
    node.appendChild(svg)

    return node
}