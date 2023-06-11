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
  <div class="flex w-full justify-center my-5">
    <div class="card bg-base-100 shadow-xl lg:w-4/12">
      <div class="card-body">
        <form data-netlify="true" method="POST" name="contact" class="form">
          <!-- hidden input to define input name -->
          <input type="hidden" name="contact" value="contact" />
          <legend>{text.title}</legend>
          <fieldset>
            <div class="row">
              <div class="form-control w-full max-w-xs">
                <label class="label" for="contact-email">
                  <span class="label-text">{text.email}</span>
                </label><input
                  type="text"
                  name="email"
                  id="contact-email"
                  placeholder={text.email}
                  class="input input-bordered w-full max-w-xs"
                />
              </div>

              <div class="form-control">
                <label class="label" for="contact-subject">
                  <span class="label-text">{text.subject}</span>
                </label>

                <input
                  type="text"
                  name="subject"
                  id="contact-subject"
                  placeholder={text.subject}
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control">
                <label class="label" for="contact-message">
                  <span class="label-text">{text.message}</span>
                </label>

                <textarea
                  class="input input-bordered w-full max-w-xs"
                  name="message"
                  id="contact-message"
                  rows="3"
                  placeholder={text.message}
                />
              </div>
            </div>
          </fieldset>
          <button class="btn btn-primary" type="submit" id="submit">
            {text.send}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
