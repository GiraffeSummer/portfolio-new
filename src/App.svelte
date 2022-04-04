<script>
  import 'mini.css';
  import lang, { setLanguage } from './lang.js';

  let darkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  import Header from './components/Header.svelte';
  import Projects from './components/Projects.svelte';
  import About from './components/About.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';

  //setLanguage('nl');
  /*
  
  */
</script>

<main class:dark={darkMode}>
  <Header />
  <div id="#home" />
  <About />
  <Projects />
  <Contact />
  <Footer />
</main>
