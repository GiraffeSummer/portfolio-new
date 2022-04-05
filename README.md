# portfolio-new"


## Features
- translation (English and Dutch)
- easy adding of new projects with their links
- component based
- made with svelte

## Reason
I made this portfolio because I felt like I needed a more recent one, as my old one is very outdated, and maybe a little unprofessional.
I want this to scale with me, and reprisent me as I progress as well, therefore I chose to build it with Svelte so I can easily swap components in and out.


## Problems fixed while making this:
I wanted the portfolio to be both Dutch and English, as I'm natively Dutch, but in the tech branch everything is in English. 
I had to sort out an easy solution to easily translate the text, that was manageable and easy to add onto.
The problem I had is that when changing the language the UI didn't change, as the text was function based, but behind the scenes while the function changed, the text was already populated, I eventually solved this by adding a simle custom event system,
and listening to language change event, and then updating the ui accordingly.
this works well, it's slightly fiddly, but it works without issues, and once it was set up, it was easy to add to it.


### quick todo: 
- better styling