const form = document.querySelector('#schedule-form');
const dataContainer = document.querySelector('#schedule-list');

const addTaskToMarkup = (task) => {
  const markup = `
    <div class="schedule__item" id="${new Date().getTime()}">
      <span class="schedule__item_body">
        <h5 class="schedule__item_header">${task.text}</h5>
        <p class="schedule__item_text">${task.day}</p>
      </span>
      <span class="schedule__button-delete">
        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.38867 18.6094H11.5996C12.9355 18.6094 13.7559 17.8672 13.8184 16.5312L14.3262 5.45312H15.0605C15.5684 5.45312 15.9434 5.09375 15.9434 4.59375C15.9434 4.10156 15.5605 3.74219 15.0605 3.74219H11.748V2.60938C11.748 1.30469 10.9277 0.570312 9.47461 0.570312H6.49805C5.04492 0.570312 4.23242 1.30469 4.23242 2.60938V3.74219H0.919922C0.427734 3.74219 0.0449219 4.10156 0.0449219 4.59375C0.0449219 5.09375 0.427734 5.45312 0.919922 5.45312H1.6543L2.16992 16.5312C2.23242 17.875 3.04492 18.6094 4.38867 18.6094ZM6.0293 2.67188C6.0293 2.33594 6.26367 2.13281 6.63086 2.13281H9.3418C9.7168 2.13281 9.95117 2.33594 9.95117 2.67188V3.74219H6.0293V2.67188ZM4.62305 16.8672C4.2168 16.8672 3.95117 16.5781 3.92773 16.1172L3.42773 5.45312H12.5371L12.0527 16.1172C12.0371 16.5859 11.7715 16.8672 11.3574 16.8672H4.62305ZM5.70898 15.7344C6.09961 15.7344 6.3418 15.4844 6.33398 15.125L6.09961 7.23438C6.0918 6.86719 5.83398 6.63281 5.4668 6.63281C5.08398 6.63281 4.8418 6.875 4.85742 7.24219L5.08398 15.1328C5.0918 15.4922 5.34961 15.7344 5.70898 15.7344ZM7.99023 15.7344C8.36523 15.7344 8.62305 15.4922 8.62305 15.1328V7.22656C8.62305 6.86719 8.36523 6.63281 7.99023 6.63281C7.62305 6.63281 7.36523 6.86719 7.36523 7.22656V15.1328C7.36523 15.4922 7.62305 15.7344 7.99023 15.7344ZM10.2793 15.7344C10.6387 15.7344 10.8887 15.5 10.8965 15.1328L11.1309 7.24219C11.1387 6.875 10.8965 6.63281 10.5215 6.63281C10.1465 6.63281 9.89648 6.86719 9.88867 7.23438L9.6543 15.125C9.64648 15.4844 9.88867 15.7344 10.2793 15.7344Z" fill="#08090A"/> 
        </svg>
      </span>
    </div>
  `;
  dataContainer.insertAdjacentHTML('beforeend', markup);
}

const deleteItem = (item) => {
  const values = JSON.parse(localStorage.getItem('schedule'));
  const filteredValues = values.filter((value) => value.id !== item.id);
  localStorage.setItem('schedule', JSON.stringify(filteredValues));
  item.remove();
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('schedule')) {
    const schedule = JSON.parse(localStorage.getItem('schedule'));
    schedule.forEach((task) => {
      addTaskToMarkup(task);
    });
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('.schedule__button-delete')) {
      const item = e.target.closest('.schedule__item');
      deleteItem(item);
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);

    if (!values.text) {
      alert('Please fill in all fields');
      return;
    }

    addTaskToMarkup(values);
  });

  dataContainer.addEventListener('DOMSubtreeModified', () => {
    const items = document.querySelectorAll('.schedule__item');

    let values = [];
    items.forEach((item) => {
      const text = item.getElementsByClassName('schedule__item_header')[0].innerText;
      const day = item.getElementsByClassName('schedule__item_text')[0].innerText;
      const id = item.id;

      values.push({ text, day, id });
    });

    localStorage.setItem('schedule', JSON.stringify(values));
  })
})
