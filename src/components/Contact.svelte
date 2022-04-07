<script>
  import lang, { language } from '../lang';
  $: text = {
    title: lang('contact/title')[$language],
    email: lang('contact/email')[$language],
    subject: lang('contact/subject')[$language],
    message: lang('contact/message')[$language],
    send: lang('contact/send')[$language],
  };
</script>

<section id="contact">
  <form data-netlify="true" method="POST" name="contact" class="form">
    <legend>{text.title}</legend>
    <fieldset>
      <div class="row">
        <input type="hidden" name="form-name" value="contact" />
        <label for="email">{text.email}</label>
        <input
          type="email"
          name="email"
          aria-describedby="emailHelp"
          placeholder={text.email}
        />
      </div>

      <div class="row">
        <label for="subject">{text.subject}</label>
        <input type="text" name="subject" placeholder={text.subject} />
      </div>

      <div class="row">
        <label for="message">{text.message}</label>
        <textarea name="message" rows="3" placeholder={text.message} />
      </div>
    </fieldset>
    <button class="button g-secondary" type="submit" id="submit"
      >{text.send}</button
    >
  </form>
</section>

<style>
  section {
    margin: 1.5rem 0;
    padding: 1rem 1rem;
  }
</style>
