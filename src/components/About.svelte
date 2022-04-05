<script>
  import lang, { addListener } from '../lang';

  const socials = [
    {
      url: 'https://github.com/GiraffeSummer',
      icon: 'fa fa-github-square',
    },
    {
      url: 'https://linkedin.com/in/gido-selten-02067815b',
      icon: 'fa fa-linkedin-square',
    },
  ];

  let text = {
    name: lang('about/name'),
    description: lang('about/description'),
  };

  addListener('langChanged', () => {
    text = {
      name: lang('about/name'),
      description: lang('about/description'),
    };
  });
</script>

<section id="about" class="row is-center">
  <div class="col-lg-6">
    <img
      alt="me"
      src="https://cdn.discordapp.com/avatars/151039550234296320/a_d27758887cd0d33cca84eba18f86cd6b.webp"
    />
  </div>
  <div class="col-lg-6">
    <div class="bio">
      <h1>{text.name}</h1>
      <p>{text.description}</p>
    </div>
    <div class="icons row">
      {#each socials as social}
        <a rel="noopener noreferrer" target="_blank" href={social.url}>
          <i class={social.icon} />
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  img {
    border: 1.5px solid black;

    box-shadow: 2px 2px 6px #003864;
    border-radius: 13px;
    padding: 0.2rem;
    object-fit: cover;
  }
  i.fa {
    font-size: 2rem;
    margin: 0.1rem 0.4rem;
    margin-left: 0.4rem;
  }
</style>
