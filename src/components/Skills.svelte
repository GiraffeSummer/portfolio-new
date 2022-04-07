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
  <div class="row">
    <h2>{data.title}</h2>
  </div>
  <div class="row">
    {#each data.skills as skill}
      <div class="col-lg-3 card">
        <SkillItem {skill} />
        {#each skill.children as child}
          <SkillItem skill={child} />
        {/each}
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    margin-top: 1.5rem;
    padding: 1rem 2rem;
  }
</style>
