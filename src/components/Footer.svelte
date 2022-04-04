<script>
  import lang, { addListener } from '../lang';
  
  let text = lang('footer');

  addListener('langChanged', () => {
    text = lang('footer');
  });
</script>

<footer>
  <p>© 2022 - {text} Gido Selten</p>
</footer>
