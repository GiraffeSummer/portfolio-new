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
  // @ts-ignore
  $: projects = getProjects($language);
</script>

<section id="projects" class="row is-center">
  <div
    class="grid grid-flow-row-dense gap-3 gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    {#each projects as project}
      <div class="card w-96 bg-base-100 shadow-xl">
        {#if project.img != undefined}
          <figure class="px-10 pt-10">
            <img src={project.img} alt={project.name} class="rounded-xl" />
          </figure>
        {/if}
        <div class="card-body">
          <h2 class="card-title">{project.name}</h2>

          <p>{project.description}</p>

          {#if project.tags}
            <div class="flex flex-auto flex-row gap-1">
              {#each project.tags as tag}
                <div class="badge badge-info">{tag}</div>
              {/each}
            </div>
          {/if}

          {#if project.longText != undefined}
            <div
              class="collapse border border-base-300 bg-base-100 rounded-box"
            >
              <input type="checkbox" />
              <div class="collapse-title text-xl font-medium">
                {text.more}..
              </div>
              <div class="collapse-content">
                <p>{project.longText}</p>
              </div>
            </div>
          {/if}

          <div class="card-actions justify-end">
            {#if project.url != undefined}
              <a
                class="btn btn-sm btn-primary"
                target={project.target || '_blank'}
                href={project.url}
              >
                <span class="fa-solid fa-arrow-up-right-from-square" />
                {text.link}
              </a>
            {/if}
            {#if project.source != undefined}
              <a
                class="btn btn-sm btn-secondary gap-2"
                target="_blank"
                href={project.source}
              >
                <span class="fa-brands fa-github" /> Github
              </a>
            {/if}
          </div>
        </div>
      </div>
    {/each}

    <div class="order-last col-span-full">
      <i class="">
        {text.nosource}, <a class="btn-link" href="#contact">{text.contact}</a>
      </i>
    </div>
  </div>

  <!-- <div class="col-lg-3 card">
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
  </div> -->
</section>
