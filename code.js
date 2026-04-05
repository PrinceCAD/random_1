import { Header } from "./components/Header/Header.js";
import { webHero } from "./components/MainHero/web.js";
import { Splash } from "./components/Splash/Splash.js";
import { linkStyles } from "./styles/styleFunctions.js";
Header()
Splash("Main Categories", "Here are the most common picks...")
webHero()

linkStyles()
console.log("🚀 Vercel Deployment Test: index.js is running!!");