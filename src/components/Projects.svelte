<script>
  import lang, { addListener } from '../lang';

  let text = {
    nosource: lang('projects/nosource'),
    contact: lang('contact'),
    more: lang('projects/more'),
    link: lang('link'),
  };

  addListener('langChanged', () => {
    projects = getProjectItems();

    text = {
      nosource: lang('projects/nosource'),
      contact: lang('contact'),
      more: lang('projects/more'),
      link: lang('link'),
    };
  });

  let projects = getProjectItems();

  function getProjectItems() {
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
        url: 'https://github.com/GiraffeSummer/portfolio-new'
      }
    ];
  }
</script>

<section id="projects" class="row is-center">
  <div class="row">
    <small
      >{text.nosource},
      <a href="#contact">{text.contact}</a></small
    >
  </div>
  <div class="row">
    {#each projects as project}
      <div class="col-lg-3 card">
        <h1 class="section">{project.name}</h1>
        {#if project.img != undefined}
          <img src={project.img} alt={project.name} class="section media" />
        {/if}
        <div class="section">
          <p>{project.description}</p>
          {#if project.longText != undefined}
            <div class="collapse">
              <input type="checkbox" id={project.name} aria-hidden="true" />
              <label for={project.name} aria-hidden="true">{text.more}..</label>
              <div>
                <p>{project.longText}</p>
              </div>
            </div>
          {/if}
        </div>
        <div class="row">
          <a class="button tertiary col-md" target="_blank" href={project.url}
            >{text.link}</a
          >
          {#if project.source != undefined}
            <a
              class="button primary col-md"
              target="_blank"
              href={project.source}>Github</a
            >
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>
