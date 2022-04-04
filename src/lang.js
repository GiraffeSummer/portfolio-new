import NL from './lang/nl.js';
import EN from './lang/en.js';

let language = navigator.language.split('-')[0].toLowerCase();
console.log(`Language: ${language}`);

const langMap = {
    en: { translate: EN, name: "English", icon: '🇬🇧' },
    nl: { translate: NL, name: "Dutch", icon: '🇳🇱' }
};

const langlist = Object.keys(langMap)

function setLanguage(lang) {
    if (langlist.includes(lang)) {
        language = lang;
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
    let val = (field != null) ? langMap[language].translate(field) : "invalid translation";
    return val
}

const _events = {};
function addListener(key, cb, single = false) {
    const newCb = { run: cb, single }
    if (key in _events) {
        _events[key].push(newCb)
    } else {
        _events[key] = [newCb]
    }
};
function dispatch(key) {
    if (key in _events) {
        let args = Array.prototype.slice.call(arguments);
        if (args.length > 1) { args.shift() };
        _events[key].forEach((fun => {
            if (args.length <= 0) {
                fun.run(this)
            }
            else {
                fun.run(this, ...args)
            }
        }));
        _events[key].filter(x => !x.single);
    }
}

export {
    langlist,
    getLanguage,
    setLanguage,
    langProperties,

    addListener,
    dispatch
}