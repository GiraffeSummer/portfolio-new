<script>
  import lang, { addListener } from '../lang';
  let text = {
    title: lang('contact/title'),
    email: lang('contact/email'),
    subject: lang('contact/subject'),
    message: lang('contact/message'),
    send: lang('contact/send'),
  };

  addListener('langChanged', () => {
    text = {
      title: lang('contact/title'),
      email: lang('contact/email'),
      subject: lang('contact/subject'),
      message: lang('contact/message'),
      send: lang('contact/send'),
    };
  });
</script>

<section id="contact">
  <form netlify name="contact" class="form">
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
    <button class="primary" type="submit" id="submit">{text.send}</button>
  </form>
</section>
