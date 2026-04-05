export const linkStyles = (path) => {
    styles("styles/Theme/light.css")
    styles("styles/Theme/dark.css")
    styles("styles/style.css")
    styles("components/MainHero/hero.css")
    styles("components/Header/header.css")
    styles("components/Splash/splash.css")
};

function styles(path){
    const style_ = document.createElement("link");
    style_.rel = "stylesheet";
    style_.href = path;
    
    document.head.appendChild(style_);
}