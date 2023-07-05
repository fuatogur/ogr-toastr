class Toastr {

  constructor() {
    let element = document.querySelector('.big_message-box');

    if (!element) {
      const div = document.createElement('div');
      div.className = '.big_message-box';
      document.body.append(div);
      element = div;
    }

    this.container = element;
  }

  success(text) {
    return this.createToast({
      text: text,
      className: 'successful_box',
      icon: '<svg class="icon successful_icon" viewBox="0 0 125 102"><polygon class="st0" points="103.7,5.2 44.6,64.3 21.3,40.9 5,57.2 44.6,96.8 120,21.5 "/></svg>'
    })
  }

  error(text) {
    return this.createToast({
      text: text,
      className: 'error_box',
      icon: '<svg class="icon error_icon" viewBox="0 0 125 125"><polygon class="st0" points="81.5,62.5 115,29 96,10 62.5,43.5 29,10 10,29 43.5,62.5 10,96 29,115 62.5,81.5 96,115 115,96 "/></svg>'
    })
  }

  warning(text) {
    return this.createToast({
      text: text,
      className: 'warning_box',
      icon: '<svg class="icon warning_icon" viewBox="0 0 125 113"><g><g><path class="st0" d="M106.9,108H18.1c-4.7,0-9-2.4-11.3-6.6c-2.4-4.1-2.4-9,0-13.1l44.4-76.9C53.5,7.4,57.8,5,62.5,5c0,0,0,0,0,0c4.7,0,9,2.4,11.3,6.6l44.4,76.9c2.4,4.1,2.4,9,0,13.1C115.9,105.6,111.6,108,106.9,108z M57,14.9L12.7,91.8c-1.1,2-1.1,4.3,0,6.3c1.1,2,3.2,3.2,5.5,3.2h88.8c2.3,0,4.3-1.2,5.5-3.2c1.1-2,1.1-4.3,0-6.3L68,14.9c-1.1-2-3.2-3.2-5.5-3.2C60.2,11.8,58.2,12.9,57,14.9L57,14.9z"/></g><g><path class="st0" d="M62.5,32.8L62.5,32.8c4.9,0,8.7,4.3,8.1,9.2l-3.6,30.1c-0.3,2.3-2.2,4.1-4.6,4.1l0,0c-2.3,0-4.3-1.7-4.6-4.1L54.4,42C53.8,37.1,57.6,32.8,62.5,32.8z"/><path class="st0" d="M57.9,90.8C56.6,89.5,56,88,56,86.1c0-1.8,0.6-3.4,1.9-4.6c1.3-1.3,2.8-1.9,4.6-1.9c1.8,0,3.4,0.6,4.6,1.9c1.3,1.3,1.9,2.8,1.9,4.6c0,1.8-0.6,3.4-1.9,4.6c-1.3,1.3-2.8,1.9-4.6,1.9C60.7,92.7,59.1,92.1,57.9,90.8z"/></g></g></svg>'
    })
  }

  info(text) {
    return this.createToast({
      text: text,
      className: 'information_box',
      icon: '<svg class="icon information_icon" viewBox="0 0 125 115"><g><circle class="st0" cx="62.5" cy="16.7" r="11.7"/><polygon class="st0" points="78.1,110 70.3,110 54.7,110 46.9,110 46.9,102.2 54.7,102.2 54.7,51.7 46.9,51.7 46.9,43.9 54.7,43.970.3,43.9 70.3,51.7 70.3,102.2 78.1,102.2"/></g></svg>'
    })
  }

  createToast({text, className, icon}) {
    const toast = document.createElement('div');

    toast.className = `message-box ${className}`;
    toast.innerHTML = `
          <div class="text-and-icon-flex">
              ${icon}
              <p class="text">${text}</p>
          </div>
          <div class="close-box">
              <svg class="close-icon" viewBox="0 0 40 40">
                  <g>
                      <path class="st0"
                            d="M27.8,8.2L8.2,27.8c-1,1-1,2.6,0,3.5l0.5,0.5c1,1,2.6,1,3.5,0l19.5-19.5c1-1,1-2.6,0-3.5l-0.5-0.5C30.3,7.3,28.7,7.3,27.8,8.2z"/>
                      <path class="st0"
                            d="M12.2,8.2l19.5,19.5c1,1,1,2.6,0,3.5l-0.5,0.5c-1,1-2.6,1-3.5,0L8.2,12.2c-1-1-1-2.6,0-3.5l0.5-0.5C9.7,7.3,11.3,7.3,12.2,8.2z"/>
                  </g>
              </svg>
          </div>
        `;

    this.container.append(toast);

    toast.querySelector('.close-box').addEventListener('click', () => toast.remove());
    setTimeout(() => toast.remove(), 5000);

    return toast
  }
}

export default new Toastr
