<script>
  import { getSkills } from '../data.js';
  const data = getSkills(true);
  export let skill;

  let percent = (100 * skill.value) / data.skillMaxNumber;
</script>

<div class="section">
  <div>
    {#if skill.icon}
      <img
        class="icon"
        src={skill.icon}
        alt={skill.name}
        width="1.2rem"
        height="1.2rem"
      />
    {:else if skill.iconClass}
      <span class={skill.iconClass} />
    {/if}
    <b>
      {skill.name}
    </b>
  </div>
  {#if !isNaN(skill.value)}
    <div class="slider">
      <div class="slider-inner" style="width:{percent}%;" />
    </div>
    <div>{skill.value}/{data.skillMaxNumber}</div>
  {/if}
</div>

<style>
  img.icon {
    width: 1.2rem;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
  .slider-inner {
    background-color: #3f5efb;
    height: 1rem;
    border-radius: 4px;
  }
  .slider {
    border-radius: 4px;
    margin: 0;
    padding: 0;
    background-color: #fc466b;
  }
</style>
