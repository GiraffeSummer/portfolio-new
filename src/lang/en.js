export default function (field) {
    return {
        //general
        contact: 'contact me',
        link: 'Link',

        //project page
        'projects/more': 'More',
        'projects/nosource': 'If there\'s no Github link',

        'projects/koala/name': 'Hikage / Koala',
        'projects/koala/description': 'Hikage  is a Discord bot that I\'ve worked on since 2017 (3 iterations).\nI\'ve kept it open source because I put a lot of effort into structuring it,\nand I want others to be able to learn from it.',

        'projects/pokednd/name': 'Pokednd',
        'projects/pokednd/description': 'PokeDND was made as a set of tools to help out with a Pokémon themed Dungeons & Dragons game.',

        'projects/fabeltjeskrant/name': 'Fabeltjes Krant',
        'projects/fabeltjeskrant/description': 'This was a website that I made for DICHTERBIJ ',
        'projects/fabeltjeskrant/longtext': 'One of the first dynamic websites I made. I also focussed on that even the clients could edit the information shown in the website.',

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
        'projects/friendlight/longtext': `I saw a similar idea online, and I thought I could do it better and cheaper.\n(Website is setup instructions, contact me for more info/demo)\n
        This was a lot of systems working together, a websocket server with database, arduino light (with websocket client), soldering and constructing the hardware and a mobile app to control the light.`,

        'projects/portfolio/name': "This portfolio",
        'projects/portfolio/description': "A portfolio that I made with projects that I'm most proud of, or that are most interesting.",

        'projects/shortener/name': "crri.pw",
        'projects/shortener/description': "Url shortener and file sharing site",
        'projects/shortener/longtext': `I followed a tutorial of an url shortener website (from CodeGarden) I found this interesting and wanted to learn new things.\n
        I later added the filesharing system myself because I didn't like what Wetransfer was doing. I also made some other improvements so it's more user friendly.`,

        //skills general
        'skills/title': 'Skills',

        //skill parents
        'skills/softdev': 'Software development',
        'skills/webdev': 'Web development',
        'skills/databases': "Databases",
        //skills
        'skills/general': 'General skills',
        'skills/problemsolve': 'Problem solving',
        'skills/creative': 'Creativity',

        //about page
        'about/name': 'Hi, I\'m Gido,',
        'about/description': 'I am trustworthy, open, optimistic and creative, and I make fun and imaginative (web) apps, or small useful gimmicks.',

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
        'footer': 'Made by',
    }[field];
}