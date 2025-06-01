const alertPlaceholder = document.getElementById('alert')
const email = document.getElementById('email')
const sender = document.getElementById('name')
const message = document.getElementById('message')

const appendAlert = (message, type) => {
  alertPlaceholder.innerHTML = ''
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('form-button')
if (alertTrigger) {
  alertTrigger.addEventListener('click', e => {
    e.preventDefault();
    if (email.value === '' || sender.value === '' || message.value === '') {
      appendAlert("Please fill in all fields.", 'warning')
      return
    }
    if (!email.value.includes('@')) {
      appendAlert("Please enter a valid email address.", 'warning')
      return
    }
    if (message.value.length < 10) {
      appendAlert("Message must be at least 10 characters long.", 'warning')
      return
    }
    if (sender.value.length < 3) {
      appendAlert("Name must be at least 3 characters long.", 'warning')
      return
    }
    email.value = ''
    sender.value = ''
    message.value = ''

    appendAlert("Your message has been sent successfully. We will shortly get back to you.", 'success')
  })
}
