import langRaw, { language } from './lang.js';
import { get } from 'svelte/store'

//Social links
const socials = [
    {
        url: 'https://github.com/GiraffeSummer',
        icon: 'fa-brands fa-github',
    },
    {
        url: 'https://linkedin.com/in/gido-selten-02067815b',
        icon: 'fa-brands fa-linkedin',
    },
];

//Projects
function getProjects() {
    return [
        {
            name: lang('projects/koala/name'),
            description: lang('projects/koala/description'),
            source: "https://github.com/GiraffeSummer/Koala",
            tags: ['bot', 'js']
        },
        {
            name: lang('projects/friendlight/name'),
            description: lang('projects/friendlight/description'),
            longText: lang('projects/friendlight/longtext'),
            url: 'https://friendlamp.netlify.app/',
            tags: ['websockets', 'website','app', 'arduino', 'database']
            //source: 'https://github.com/GiraffeSummer/pro-cons-list',
        },
        {
            name: lang('projects/gifmonkey/name'),
            description: lang('projects/gifmonkey/description'),
            url: 'https://gifmonkey.cripplerick.com',
            source: 'https://github.com/GiraffeSummer/newest-image-api',
            tags: ['website', 'logins', 'database', 'images']
        },
        {
            name: lang('projects/fabeltjeskrant/name'),
            description: lang('projects/fabeltjeskrant/description'),
            longText: lang('projects/fabeltjeskrant/longtext'),
            tags: ['UX', 'website']
            // url: 'https://pokednd.cripplerick.com',
            // source: 'https://github.com/GiraffeSummer/PokemonDnd',
        },
        {
            name: lang('projects/pokednd/name'),
            description: lang('projects/pokednd/description'),
            url: 'https://pokednd.cripplerick.com',
            tags: ['website']
            // source: 'https://github.com/GiraffeSummer/PokemonDnd',
        },
        {
            name: lang('projects/drawapp/name'),
            description: lang('projects/drawapp/description'),
            url: 'https://draw.cripplerick.com/create',
            source: 'https://github.com/GiraffeSummer/newest-image-api',
            tags: ['websockets', 'website']
        },
        {
            name: lang('projects/shortener/name'),
            description: lang('projects/shortener/description'),
            longText: lang('projects/shortener/longtext'),
            url: 'https://crri.pw/',
            tags: ['website']
            //source: 'https://github.com/GiraffeSummer/pro-cons-list',
        },
        {
            name: lang('projects/pokeclicker/name'),
            description: lang('projects/pokeclicker/description'),
            url: 'https://pokeclickercheat.netlify.app/',
            tags: ['website', 'reverse engineering']
            //source: 'https://github.com/GiraffeSummer/pro-cons-list',
        },
        {
            name: lang('projects/boardgame/name'),
            description: lang('projects/boardgame/description'),
            url: 'https://svelte-boardgame.netlify.app/',
            tags: ['game design', 'website', 'dynamic']
            //source: 'https://github.com/GiraffeSummer/pro-cons-list',
        },
        {
            name: lang('projects/procons/name'),
            description: lang('projects/procons/description'),
            url: 'https://procons.netlify.app/',
            source: 'https://github.com/GiraffeSummer/pro-cons-list',
            tags: ['website']
        },
        {
            name: lang('projects/portfolio/name'),
            description: lang('projects/portfolio/description'),
            tags: ['UX', 'website'],
            url: '/',
            target: '_self',
            source: 'https://github.com/GiraffeSummer/portfolio-new',
        },
    ];
}

function getSkills(dataOnly = false) {
    const skillData = {
        title: lang('skills/title'),
        skillMaxNumber: 10,
    }
    if (dataOnly) {
        return skillData;
    } else
        return {
            ...skillData,
            skills: [
                {
                    name: lang('skills/webdev'), iconClass: 'fa-solid fa-code', value: 7, children: [
                        { name: 'nodejs', iconClass: 'fa-brands fa-node-js', value: 9 },
                        { name: 'javascript / typescript', iconClass: 'fa-brands fa-js-square', value: 9 },
                        { name: 'html', iconClass: 'fa-brands fa-html5', value: 9 },
                        { name: 'css', iconClass: 'fa-brands fa-css3', value: 4 },
                        { name: 'php', iconClass: 'fa-brands fa-php', value: 6 },
                        { name: 'laravel', iconClass: 'fa-brands fa-laravel', value: 6 }
                    ].sort(desc)
                },

                {
                    name: lang('skills/databases'), iconClass: 'fa-solid fa-database', value: 8, children: [
                        { name: 'mysql', icon: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png', value: 7 },
                        { name: 'mongodb', icon: 'https://raw.githubusercontent.com/mongodb-js/leaf/master/dist/mongodb-leaf_128x128.png', value: 8 },
                    ].sort(desc)
                },

                {
                    name: lang('skills/softdev'), iconClass: 'fa-solid fa-code', children: [
                        { name: 'C#', iconClass: 'fa-brands fa-csharp', value: 8 },
                        { name: 'Electronjs', iconClass: 'fa-solid fa-atom', value: 7 },
                    ].sort(desc)
                },

                {
                    name: lang('skills/general'), iconClass: 'fa-solid fa-box', children: [
                        { name: lang('skills/problemsolve'), iconClass: 'fa-solid fa-lightbulb', value: 8 },
                        { name: lang('skills/creative'), iconClass: 'fa-solid fa-paintbrush', value: 7 },
                    ].sort(desc)
                }
            ]
        }
}

function desc(a, d) { return d.value - a.value }
function asc(a, d) { return a.value - d.value }

//wrapper function
function lang(field) {
    return langRaw(field)[get(language)]
}

export { socials, getProjects, getSkills } 