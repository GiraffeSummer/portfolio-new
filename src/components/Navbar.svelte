<script>
  import lang, {
    langlist,
    getLanguage,
    setLanguage,
    langProperties,
    addListener,
    dispatch,
  } from '../lang';

  addListener('langChanged', () => {
    navitems = getNavItems();
  });

  let navitems = getNavItems();

  function getNavItems() {
    return [
      { label: lang('nav/home'), href: '#home' },
      { label: lang('nav/about'), href: '#about' },
      { label: lang('nav/projects'), href: '#projects' },
      { label: lang('nav/contact'), href: '#contact' },
    ];
  }

  let selectedLanguage = getLanguage();

  function changeLang() {
    setLanguage(selectedLanguage);
    dispatch('langChanged', { lang: selectedLanguage });
  }
</script>

<header>
  <!--Mobile-->
  <div class="hidden-md hidden-lg ">
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

    <select bind:value={selectedLanguage} on:change={changeLang} class="mobile">
      {#each langlist as lang}
        <option value={lang}>{langProperties(lang).icon.trim()}</option>
      {/each}
    </select>
  </div>

  <!--Desktop-->
  <div class="visually-hidden-sm row">
    <li>
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
  li {
    list-style: none;
  }
  img {
    margin: 0;
    width: 40px;
    padding-left: 5px;
  }
  /* a {
    color: blue; /*var(--white);*/
  /*}*/
</style>
