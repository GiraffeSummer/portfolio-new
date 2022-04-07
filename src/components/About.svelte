<script>
  import lang, { language } from '../lang';
  import { socials } from '../data.js';

  $: text = {
    name: lang('about/name')[$language],
    description: lang('about/description')[$language],
    img: './profile.jpg',
    discord: {
      avatar:
        'https://cdn.discordapp.com/avatars/151039550234296320/a_d27758887cd0d33cca84eba18f86cd6b.gif',
    },
  };
</script>

<section id="about" class="row ">
  <div class="hidden-md hidden-lg row">
    <img alt="me" class="me-small" src={text.img} width="100%" height="auto" />
  </div>
  <div class="visually-hidden-sm row">
    <img alt="me" class="me" src={text.img} width="12rem" height="12rem" />
  </div>
  <div class="col-sm ">
    <div class="bio">
      <h1>{text.name}</h1>
      <h5>{text.description}</h5>
    </div>
    <div class="icons row">
      {#each socials as social}
        <a rel="noopener noreferrer" target="_blank" href={social.url}>
          <i aria-label={social.name} class="icon {social.icon}" />
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  :root {
    --about-image-size: 12rem;
  }
  section {
    margin-top: 1.5rem;
    color: var(--back-color);
    padding: 4rem 2rem;
    background: rgb(63, 94, 251);
    background: linear-gradient(
      150deg,
      rgba(63, 94, 251, 1) 45%,
      rgba(252, 70, 107, 1) 100%
    );
  }

  img {
    border: 1.8px solid black;
    box-shadow: 2px 2px 6px #003864;
    border-radius: 13px;
    object-fit: cover;
  }
  .me {
    width: var(--about-image-size);
    height: var(--about-image-size);
    margin-right: 3rem;
  }

  .me-small {
  }
  i.icon {
    font-size: 2rem;
    margin: 0.1rem 0.4rem;
    margin-left: 0.4rem;
    color: var(--back-color);
  }
</style>
