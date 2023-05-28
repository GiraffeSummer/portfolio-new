<script>
  import SkillItem from './SkillItem.svelte';
  import { getSkills } from '../data.js';
  import lang, { language } from '../lang';
  let data = getSkills();
  $: {
    $language; //listen to language changes
    data = getSkills();
  }
</script>

<section id="skills">
  <h2 class="prose">{data.title}</h2>
  <div class="grid grid-flow-row-dense w-full gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {#each data.skills as skill}
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <SkillItem {skill} />
          {#each skill.children as child}
            <SkillItem skill={child} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
