<script>
  // import '../node_modules/@fortawesome/fontawesome-free/css/solid.min.css';
  // import '../node_modules/@fortawesome/fontawesome-free/css/brands.min.css';
  import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
  // import 'mini.css';
  // import './global.css';
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
  <div class="grid gap-y-8">
    <About />
    <Skills />
    <Projects />
  </div>
  <Contact />
  <Footer />
</main>
