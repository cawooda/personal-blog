//Theme Switching-->
const Theme = { LIGHT:'light', DARK: 'dark'};
const HTML_ELEMENT = document.documentElement;
const STORAGE_KEY = 'theme';
const cachedTheme = localStorage.getItem(STORAGE_KEY);
const themeToggle = document.getElementById('theme-toggle');
const MOON = "🌔"
const SUN = "🌻"
//checkes if a cached theme was found. if not it defaults to light


function getCachedTheme() {
if (cachedTheme) {
    if (cachedTheme === Theme.DARK) {
            HTML_ELEMENT.classList.add(Theme.DARK);
            themeToggle.textContent = MOON;
        } else {
            HTML_ELEMENT.classList.add(Theme.DARK);
            themeToggle.textContent = SUN;
        }
} else {
    HTML_ELEMENT.classList.add(Theme.LIGHT);//defailts to light
    themeToggle.textContent = SUN;
}
}

//Switches the theme
function switchTheme() {
    if (HTML_ELEMENT.classList.contains(Theme.LIGHT)) {
        console.log("classlist contains Theme.LIGHT");
        console.log(`HTML Classlist Before: ${HTML_ELEMENT.classList}`);
        HTML_ELEMENT.classList.replace(Theme.LIGHT,Theme.DARK);
        localStorage.setItem(STORAGE_KEY,Theme.DARK);
        themeToggle.textContent = MOON;
        console.log(`HTML Classlist AFTER: ${HTML_ELEMENT.classList}`);
        console.log(`cached theme ${cachedTheme}`);
    } else {
        console.log(`HTML Classlist Before: ${HTML_ELEMENT.classList}`);
        HTML_ELEMENT.classList.replace(Theme.DARK,Theme.LIGHT);
        localStorage.setItem(STORAGE_KEY,Theme.LIGHT);
        themeToggle.textContent = SUN;
        console.log(`HTML Classlist AFTER: ${HTML_ELEMENT.classList}`);
        console.log(`cached theme ${cachedTheme}`);
    }
}

//Startup
getCachedTheme();

//event Listeners
  themeToggle.addEventListener('click',switchTheme);