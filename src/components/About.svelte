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

<section id="about" class="row">
  <div class="hero bg-base-200 w-full">
    <div class="hero-content flex-col lg:flex-row">
      <div>
        <img
          src={text.img}
          alt="me"
          class="max-w-sm rounded-lg shadow-2xl place-self-start"
        />
      </div>
      <div />
      <div>
        <h1 class="text-5xl font-bold">{text.name}</h1>
        <p class="py-6">{text.description}</p>

        <div class="btn-group center">
          {#each socials as social}
            <a
              class="btn btn-circle"
              rel="noopener noreferrer"
              aria-label={social.name}
              target="_blank"
              href={social.url}
            >
              <span class="text-lg icon {social.icon}" />
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
