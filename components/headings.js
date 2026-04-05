export const heading = (text, className="heading") => {
    let node = document.createElement('h1')

    node.className = className
    node.textContent= text
    return node
};
