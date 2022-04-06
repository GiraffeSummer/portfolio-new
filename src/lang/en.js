export default function (field) {
    return {
        //general
        contact: 'contact me',
        link: 'Link',

        //project page
        'projects/more': 'More',
        'projects/nosource': 'If there\'s no source shown',

        'projects/drawapp/name': 'DrawApp',
        'projects/drawapp/description': 'An application where multiple users can draw pixelart at the same time',

        'projects/gifmonkey/name': 'GifMonkey',
        'projects/gifmonkey/description': 'A reaction gif sharing platform with focus on API for example for discord bots',

        'projects/procons/name': 'Pro/cons list',
        'projects/procons/description': 'An app to make pro/cons lists, also allows for other types of lists.',

        'projects/pokeclicker/name': 'Pokeclicker cheats',
        'projects/pokeclicker/description': 'A script to add UI cheats to the pokemon clicker game, this was interesting to make and reverse engineer.',

        'projects/boardgame/name': 'Svelte boardgame',
        'projects/boardgame/description': "A modifiable boardgame made with svelte. very different from my usual projects. It's very modular, and allows to make custom maps.\nThis also has an electron version",

        'projects/friendlight/name': 'Friendlight',
        'projects/friendlight/description': "A (physical) light that syncs with your friend's light.",
        'projects/friendlight/longtext': 'I saw a similar idea online, and I thought I could do it better and cheaper.\n(Website is setup instructions, contact me for more info/demo)',

        'projects/portfolio/name': "This portfolio",
        'projects/portfolio/description': "A portfolio that I made with projects that I'm most proud of, or that are most interesting.",

        //about page
        'about/name': 'Hi, I\'m Gido',
        'about/description': 'I like to make fun creative (web) apps. or small useful gimmics.',

        //contact page
        'contact/title': "Contact",
        'contact/email': "Email",
        'contact/subject': "Subject",
        'contact/message': "Message",
        'contact/send': "Send",

        //nav page
        'nav/home': 'Home',
        'nav/projects': 'Projects',
        'nav/about': 'About',
        'nav/contact': 'Contact',

        //footer
        footer: 'Made by',
    }[field];
}