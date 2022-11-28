<script>
  import lang, { language } from '../lang.js';
  import { getProjects } from '../data.js';

  $: text = {
    nosource: lang('projects/nosource')[$language],
    contact: lang('contact')[$language],
    more: lang('projects/more')[$language],
    link: lang('link')[$language],
  };

  //$language reference needed to subscribe to changes
  $: projects = getProjects($language);
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
          {#if project.url != undefined}
            <a
              class="button g-secondary col-md"
              target={project.target || '_blank'}
              href={project.url}
              ><span class="fa-solid fa-up-right-from-square" /> {text.link}</a
            >
          {/if}
          {#if project.source != undefined}
            <a
              class="button g-primary col-md"
              target="_blank"
              href={project.source}
              ><span class="fa-brands fa-github" /> Github</a
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
