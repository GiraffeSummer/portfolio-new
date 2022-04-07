<script>
  import 'mini.css';
  import './global.css';
  import lang, { setLanguage } from './lang.js';

  let darkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  import Navbar from './components/Navbar.svelte';
  import Projects from './components/Projects.svelte';
  import About from './components/About.svelte';
  import Skills from './components/Skills.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';

  //setLanguage('nl');
  /*
  
  */
</script>

<main class:dark={darkMode}>
  <Navbar />
  <div id="#home" />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
</main>
