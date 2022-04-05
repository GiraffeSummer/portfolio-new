import lang, { addListener } from './lang.js';

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

//About
function getAbout() {
    return {
        name: lang('about/name'),
        description: lang('about/description'),
    }
}

//Projects
function getProjects() {
    return [
        {
            name: lang('projects/drawapp/name'),
            description: lang('projects/drawapp/description'),
            url: 'https://draw.cripplerick.com/create',
            source: 'https://github.com/GiraffeSummer/newest-image-api',
        },
        {
            name: lang('projects/gifmonkey/name'),
            description: lang('projects/gifmonkey/description'),
            url: 'https://gifmonkey.cripplerick.com',
            source: 'https://github.com/GiraffeSummer/newest-image-api',
        },
        {
            name: lang('projects/procons/name'),
            description: lang('projects/procons/description'),
            url: 'https://procons.netlify.app/',
            source: 'https://github.com/GiraffeSummer/pro-cons-list',
        },
        {
            name: lang('projects/pokeclicker/name'),
            description: lang('projects/pokeclicker/description'),
            url: 'https://pokeclickercheat.netlify.app/',
            // source: 'https://github.com/GiraffeSummer/pro-cons-list',
        },
        {
            name: lang('projects/boardgame/name'),
            description: lang('projects/boardgame/description'),
            url: 'https://svelte-boardgame.netlify.app/',
            // source: 'https://github.com/GiraffeSummer/pro-cons-list',
        },
        {
            name: lang('projects/friendlight/name'),
            description: lang('projects/friendlight/description'),
            longText: lang('projects/friendlight/longtext'),
            url: 'https://friendlamp.netlify.app/',
            // source: 'https://github.com/GiraffeSummer/pro-cons-list',
        },
        {
            name: lang('projects/portfolio/name'),
            description: lang('projects/portfolio/description'),
            url: '/',
            target: '_self',
            source: 'https://github.com/GiraffeSummer/portfolio-new',
        },
    ];
}

export { socials, getProjects, getAbout } 