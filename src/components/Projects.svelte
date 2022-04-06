<script>
  import lang, { addListener } from '../lang';
  import { getProjects } from '../data.js';

  let text = {
    nosource: lang('projects/nosource'),
    contact: lang('contact'),
    more: lang('projects/more'),
    link: lang('link'),
  };

  addListener('langChanged', () => {
    projects = getProjects();

    text = {
      nosource: lang('projects/nosource'),
      contact: lang('contact'),
      more: lang('projects/more'),
      link: lang('link'),
    };
  });

  let projects = getProjects();
</script>

<section id="projects" class="row is-center">
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
          <a
            class="button tertiary col-md"
            target={project.target || '_blank'}
            href={project.url}
            ><i class="fa-regular fa-share-from-square" /> {text.link}</a
          >
          {#if project.source != undefined}
            <a
              class="button primary col-md"
              target="_blank"
              href={project.source}><i class="fa-brands fa-github" /> Github</a
            >
          {/if}
        </div>
      </div>
    {/each}
  </div>
  <div class="row">
    <i class="nosource"
      >{text.nosource},
      <a href="#contact">{text.contact}</a></i
    >
  </div>
</section>

<style>
  section {
    margin: 1.5rem 0;
    padding: 1rem 1rem;
  }

  i.nosource {
    padding: 1rem 1rem;
    font-size: 1rem;
  }
</style>
