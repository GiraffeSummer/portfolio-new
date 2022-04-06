<script>
  import lang, { addListener } from '../lang';
  import { socials, getAbout } from '../data.js';

  let text = getAbout();

  addListener('langChanged', () => {
    text = getAbout();
  });
</script>

<section id="about" class="row ">
  <img
    alt="me"
    src="https://cdn.discordapp.com/avatars/151039550234296320/a_d27758887cd0d33cca84eba18f86cd6b.webp"
  />
  <div class="col-sm ">
    <div class="bio">
      <h1>{text.name}</h1>
      <p>{text.description}</p>
    </div>
    <div class="icons row">
      {#each socials as social}
        <a rel="noopener noreferrer" target="_blank" href={social.url}>
          <i class="icon {social.icon}" />
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
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
    border: 1.5px solid black;
    box-shadow: 2px 2px 6px #003864;
    border-radius: 13px;
    object-fit: cover;
  }
  i.icon {
    font-size: 2rem;
    margin: 0.1rem 0.4rem;
    margin-left: 0.4rem;
    color: var(--back-color);
  }
</style>
