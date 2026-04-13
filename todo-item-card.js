const checkbox = document.querySelector(
  '[data-testid="test-todo-complete-toggle"]',
);

const title = document.querySelector('[data-testid="test-todo-title"]');

const status = document.querySelector('[data-testid="test-todo-status"]');

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    title.classList.add("complete");
    status.textContent = "Done";
  } else {
    title.classList.remove("complete");
    status.textContent = "Pending";
  }
});


//dummy buttons (Edit and Delete)
const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');

editBtn.addEventListener('click', () => {
  console.log('Edit clicked');
});

deleteBtn.addEventListener('click', () => {
  alert('Delete clicked');
});