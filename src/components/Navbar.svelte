<script>
  import lang, { language, langlist, langProperties } from '../lang';

  $: navitems = [
    { label: lang('nav/home')[$language], href: '#home' },
    { label: lang('nav/about')[$language], href: '#about' },
    { label: lang('nav/projects')[$language], href: '#projects' },
    { label: lang('nav/contact')[$language], href: '#contact' },
  ];

  let selectedLanguage = $language;

  function changeLang() {
    language.set(selectedLanguage);
  }
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden" for="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        {#each navitems as nav}
          {#if nav.enabled == undefined || nav.enabled == true}
            <li><a href={nav.href}>{nav.label}</a></li>
          {/if}
        {/each}
        <li tabindex="0" class="z-10">
          <a class="justify-between">
            <!-- mobile -->
            {langProperties(selectedLanguage).name || selectedLanguage}
            {langProperties(selectedLanguage).icon}
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              ><path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              /></svg
            >
          </a>
          <ul class="p-2">
            {#each langlist as lang}
              <li>
                <a
                  on:click={() => {
                    selectedLanguage = lang;
                    changeLang();
                  }}
                  >{langProperties(lang).icon}
                  {langProperties(lang).name || lang}</a
                >
              </li>
            {/each}
          </ul>
        </li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl" href="">
      <div class="w-10">
        <img src={'/favicon.ico'} alt="icon" />
      </div>
      <div class="pl-2">Gido Selten</div>
    </a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {#each navitems as nav}
        {#if nav.enabled == undefined || nav.enabled == true}
          <li><a href={nav.href}>{nav.label}</a></li>
        {/if}
      {/each}
      <li tabindex="0" class="z-10">
        <a>
          <!-- desktop -->
          {langProperties(selectedLanguage).icon}
          {langProperties(selectedLanguage).name || selectedLanguage}
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            ><path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            /></svg
          >
        </a>
        <ul class="p-2">
          {#each langlist as lang}
            <li>
              <button
                value={lang}
                on:click={() => {
                  selectedLanguage = lang;
                  changeLang();
                }}
                >{langProperties(lang).icon}
                {langProperties(lang).name || lang}</button
              >
            </li>
          {/each}
        </ul>
      </li>
    </ul>
  </div>
</div>
