export default function (field) {
    return {
        //general
        contact: 'stuur een bericht',
        link: 'Link',

        //project page
        'projects/more': 'Meer',
        'projects/nosource': 'Als er geen Github link staat',

        'projects/drawapp/name': 'Drawapp',
        'projects/drawapp/description': 'Een app die meerdere users tegelijkertijd aan een pixelart laat werken.',

        'projects/gifmonkey/name': 'Gifmonkey',
        'projects/gifmonkey/description': 'Een reactie gif deel platform met focus op een API voor bijvoorbeeld Discord bots',

        'projects/procons/name': 'Voor-/nadelen lijst',
        'projects/procons/description': 'Een app om pro/con lijsten te maken, het kan ook andere lijsten, zoals todo.',

        'projects/pokeclicker/name': 'Pokemon clicker cheats',
        'projects/pokeclicker/description': 'Een script die UI cheats toevoegd aan de Pokemon clicker game, het was leuk om dit project te analyseren en dingen zo toe te voegen.',

        'projects/boardgame/name': 'Bordspel',
        'projects/boardgame/description': "Een aanpasbaar bordspel, hij is erg modulair en aanpasbaar, je kan ook je eigen borden maken. Dit was erg anders dan mijn normale projecten.\nDit heeft ook een electron versie, dat was ook interessant om te maken.",

        'projects/friendlight/name': 'Vrienden lamp',
        'projects/friendlight/description': "Een (physieke) vrienden lamp die synchroniseerd met de lamp van een vriend.",
        'projects/friendlight/longtext': 'Ik zag zo\'n zelfde idee online, en ik dacht dat ik het beter en goedkoper kon. dit was ook erg interessant met veel verschillende technieken.\n(De website is setup instructies, stuur een bericht voor meer info, of een demo)',

        'projects/portfolio/name': "Dit portfolio",
        'projects/portfolio/description': "Portfolio van de projecten waar ik het meest trots op ben, of die het meest interessant zijn.",

        'projects/shortener/name': "crri.pw",
        'projects/shortener/description': "Url verkorter and bestand deel site",
        'projects/shortener/longtext': `Ik had een instructie video gekeken (van CodeGarden)\nOm nieuwe technieken te leren,
         en ik dit interessant vond, hiervan heb ik grootendeels de url delen vandaan.
         Later heb ik zelf de bestanden delen functie gemaakt omdat wetransfer niet gemakkelijk was vond ik.`,

        //skills general
        'skills/title': 'Skills',

        //skill parents
        'skills/softdev': 'Software ontwikkeling',
        'skills/webdev': 'Web development',
        'skills/databases': "Databases",
        //skills
        'skills/general': 'Algemene skills',
        'skills/problemsolve': 'Probleem oplossing',
        'skills/creative': 'Creativiteit',


        //about page
        'about/name': 'Hoi, ik ben Gido,',
        'about/description': 'Ik vind het leuk om creative en leuke webapps te maken.',

        //contact page
        'contact/title': "Stuur bericht",
        'contact/email': "Email",
        'contact/subject': "Onderwerp",
        'contact/message': "Bericht",
        'contact/send': "Verstuur",

        //nav page
        'nav/home': 'Home',
        'nav/projects': 'Projecten',
        'nav/about': 'Over ons',
        'nav/contact': 'Contact',

        //footer
        footer: 'Gemaakt door'
    }[field];
}