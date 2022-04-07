import { writable, get } from 'svelte/store'
import NL from './lang/nl.js';
import EN from './lang/en.js';

const language = writable(navigator.language.split('-')[0].toLowerCase());
//only log language once
language.subscribe(v => {
    console.log(`Language: ${v}`);
})();

const langMap = {
    en: { translate: EN, name: "English", icon: '🇬🇧' },
    nl: { translate: NL, name: "Nederlands", icon: '🇳🇱' }
};

const langlist = Object.keys(langMap)

function setLanguage(lang) {
    if (langlist.includes(lang)) {
        language.set(lang);
    } else
        throw new Error('Invalid language')
}

function getLanguage() {
    return language;
}

function langProperties(lang) {
    //idk if this'll work yet
    if (langlist.includes(lang)) {
        const ref = langMap[lang];
        let out = { ...ref }
        delete out.translate;
        return out; // {icon: ref.icon}
    } else
        throw new Error('Invalid language')
}

export default function (field = null) {
    //let val = (field != null) ? langMap[language].translate(field) : "invalid translation";
    let val = {}
    Object.keys(langMap).forEach(lang => {
        val[lang] = langMap[lang].translate(field)
    })
    return val
}

export {
    langlist,
    getLanguage,
    setLanguage,
    langProperties,

    language,
}