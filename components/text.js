export const text = (text, className="heading") => {
    let node = document.createElement('p')

    node.className = className
    node.textContent= text
    return node
};
