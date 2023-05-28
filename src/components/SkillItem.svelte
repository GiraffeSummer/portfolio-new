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
        class="greyscale"
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
    <progress
      class="progress progress-info w-56 bg-secondary"
      value={percent}
      max="100"
    />
    <div>{skill.value}/{data.skillMaxNumber}</div>
  {/if}
</div>
