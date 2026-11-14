const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function updateCounts() {
  const todoItems = list.querySelectorAll(`.${classNames.TODO_ITEM}`)
  const uncheckedItems = list.querySelectorAll(
    `.${classNames.TODO_ITEM} input:not(:checked)`
  )

  itemCountSpan.textContent = todoItems.length
  uncheckedCountSpan.textContent = uncheckedItems.length
}

function newTodo() {
  const todoText = prompt('Enter a new TODO:')

  if (todoText === null || todoText.trim() === '') {
    return
  }

  const todoItem = document.createElement('li')
  todoItem.classList.add(classNames.TODO_ITEM)

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.classList.add(classNames.TODO_CHECKBOX)
  checkbox.addEventListener('change', updateCounts)

  const text = document.createElement('span')
  text.classList.add(classNames.TODO_TEXT)
  text.textContent = todoText.trim()

  const deleteButton = document.createElement('button')
  deleteButton.type = 'button'
  deleteButton.classList.add(classNames.TODO_DELETE)
  deleteButton.textContent = 'Delete'
  deleteButton.addEventListener('click', function () {
    todoItem.remove()
    updateCounts()
  })

  todoItem.append(checkbox, text, deleteButton)
  list.append(todoItem)

  updateCounts()
}

updateCounts()
