fetchTasks();

// GET function:
function fetchTasks() {
  axios({
    method: 'GET',
    url: '/tasks'
  }).then((response) => {
    let taskList = response.data;
    renderTasks(taskList);
  }).catch((error) => {
    console.log('fetchTasks axios error:', error);
  })
}

// Render tasks on the DOM:
function renderTasks(taskList) {

  // Grab the table body element from the DOM:
  let tbodyElement = document.getElementById('the-tasks');

  // Empty the table body:
  tbodyElement.innerHTML = '';

  // Loop through the array of task objects:
  for (let task of taskList) {

    // Add the table data (td) cells to the table row (tr) element:
    tbodyElement.innerHTML += `
        <tr data-id="${task.id}" class="${task.is_done ? 'complete' : ''}">
          <td>
            <button class="delete-button" onclick="deleteTask(event)">🗑</button>
          </td>
          <td>
            <button class="complete-button" onclick="completeTask(event)">✔️</button>
          </td>
          <td>
            ${task.todoText}
          </td>
        </tr>
    `;
  }
}

// POST function:
function createTask() {
  // Get the input element off the DOM:
  let taskInputElement = document.getElementById('taskInput');

  // Extract the value of the input element:
  const newTask = taskInputElement.value;

  // Make a POST request, sending the newTask to the server:
  axios({
    method: 'POST',
    url: '/task',
    data: {
      todo_text: newTask,
      is_done: false
    }
  }).then((response) => {
    // Sice we've used the input, let's clear out the input field.
    taskInputElement.value = '';
    fetchTasks();
  }).catch((error) => {
    console.log('createTask axios error:', error);
  })
}

// DELETE function:
function deleteTask(event) {
  // Grab the deleteButtonElement, (that was clicked) from the DOM:
  const deleteButtonElement = event.target;

  // Use the deleteButtonElement to find the table row we want to delete:
  let tableRowElement = deleteButtonElement.closest('tr');

  // Grab the id of the task we want to delete, from the row data-id attribute:
  let idToDelete = tableRowElement.dataset.id;

  axios({
    method: 'DELETE',
    url: `/tasks/${idToDelete}`
  }).then((response) => {
    fetchTasks();
  }).catch((error) => {
    console.log('deleteTask axios error:', error);
  })
}

// PUT function:
function completeTask(event) {
  // Grab the updateButtonElement, (that was clicked) from the DOM:
  const updateButtonElement = event.target;

  // Use the updateButtonElement to find the table row we want to update:
  let tableRowElement = updateButtonElement.closest('tr');

  // Grab the id of the task we want to update, from the row data-id attribute:
  let idToUpdate = tableRowElement.dataset.id;

  axios({
    method: 'PUT',
    url: `/tasks/${idToUpdate}`
  }).then((response) => {
    fetchTasks();
  }).catch((error) => {
    console.log('CompleteTask axios error:', error);
  })
}
