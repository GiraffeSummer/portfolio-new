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

<header>
  <!--Mobile-->
  <div class="hidden-md hidden-lg row">
    <li>
      <label for="drawer-control" class="drawer-toggle" />
      <input type="checkbox" id="drawer-control" class="drawer" />
      <!--Drawer-->
      <div class="container">
        <label for="drawer-control" class="drawer-close" />
        {#each navitems as nav}
          {#if nav.enabled == undefined || nav.enabled == true}
            <a class="row" href={nav.href}>{nav.label}</a>
          {/if}
        {/each}
      </div>
    </li>

    <li class="langbtn">
      <select
        bind:value={selectedLanguage}
        on:change={changeLang}
        class="mobile"
      >
        {#each langlist as lang}
          <option value={lang}>{langProperties(lang).icon.trim()}</option>
        {/each}
      </select>
    </li>
  </div>

  <!--Desktop-->
  <div class="visually-hidden-sm row">
    <li class="head-icon">
      <img src={'/favicon.ico'} alt="" />
    </li>
    {#each navitems as nav}
      {#if nav.enabled == undefined || nav.enabled == true}
        <li>
          <a class="button" href={nav.href}>{nav.label}</a>
        </li>
      {/if}
    {/each}

    <li>
      <select bind:value={selectedLanguage} on:change={changeLang}>
        {#each langlist as lang}
          <option value={lang}
            >{langProperties(lang).icon}
            {langProperties(lang).name || lang}</option
          >
        {/each}
      </select>
    </li>
  </div>
</header>

<style>
  select {
    float: right;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
  }
  select.mobile {
    font-size: 1.3rem;
    text-indent: -3px;
    padding: 0.3em 0 0.3em 0.7em;
  }

  .langbtn {
    margin: 0 0.8rem 0 auto;
  }

  .head-icon {
    padding: auto;
    margin-top: 0.3rem;

    width: 40px;
    padding-left: 5px;
  }
  .head-icon img {
    width: 40px;
  }
  li {
    list-style: none;
  }
  .drawer-toggle {
    padding: auto;
  }
  /* a {
    color: blue; /*var(--white);*/
  /*}*/
</style>
