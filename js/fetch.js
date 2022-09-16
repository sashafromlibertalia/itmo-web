const fetchComments = async (page = 1) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}/comments`);
  return await response.json();
}

if (!localStorage.getItem('page'))
  localStorage.setItem('page', '1');

const feedbackList = document.querySelector('.feedback__list');
const paginationButtons = document.getElementsByClassName('pagination__item');

const renderComments = async () => {
  try {
    const data = await fetchComments(localStorage.getItem('page'));
    feedbackList.innerHTML = '<skeleton-list></skeleton-list>';

    [...paginationButtons].forEach(button => {
      if (button.innerText === localStorage.getItem('page'))
        button.classList.add('pagination__active');
      else
        button.classList.remove('pagination__active');
    });

    feedbackList.innerHTML = '';

    for (const item of data) {
      feedbackList.innerHTML += `
     <div class="feedback__item">
       <div class="feedback__item_container">
         <h5 class="feedback__item_header">${item.name}</h5>
         <span class="feedback__item_mail">${item.email}</span>
       </div>
       <div class="feedback__item_body">
       ${item.body}
       </div>
     </div>
     `
    }
  } catch (e) {
    feedbackList.innerHTML = '<p class="error__text">⚠ Что-то пошло не так</p>';
  }
}

document.addEventListener('DOMContentLoaded',() => {
  renderComments();

  [...paginationButtons].forEach((button) => {
    button.addEventListener('click', () => {
      if (button.innerText === localStorage.getItem('page'))
        return;

      localStorage.setItem('page', button.innerText);
      renderComments();
    })
  });
});
