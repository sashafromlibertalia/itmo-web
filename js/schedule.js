// {
//   text: string;
//   day: string
// }

const form = document.querySelector('#schedule-form');
const dataContainer = document.querySelector('#schedule-list');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const values = Object.fromEntries(formData);
  addTaskToMarkup(values);
});


const addTaskToMarkup = (task) => {
  const markup = `
    <div class="schedule__item">
      <h5 class="schedule__item_header">${task.text}</h5>
      <p>${task.day}</p>
    </div>
  `;
  dataContainer.insertAdjacentHTML('beforeend', markup);
}

(() => {
  if (localStorage.getItem('schedule')) {
    const schedule = JSON.parse(localStorage.getItem('schedule'));
    schedule.forEach((task) => {
      addTaskToMarkup(task);
    });
  }

  dataContainer.addEventListener('DOMSubtreeModified', () => {
    const items = document.querySelectorAll('.schedule__item');

    let values = [];
    items.forEach((item) => {
      const text = item.getElementsByTagName('h5')[0].innerText;
      const day = item.getElementsByTagName('p')[0].innerText;
      values.push({ text, day });
    });

    localStorage.setItem('schedule', JSON.stringify(values));
  })
})();
