import { createDomElement, addToDom } from '../src/util/domHelpers.js'
import { getApi } from '../src/util/api.js'
import {
  getRows,
  addNewRow,
  editRow,
  deleteRow,
} from '../src/util/rowFunctions.js'

// add a new entry

const addRowBtn = document.getElementById('add-a-row-btn')
addRowBtn.addEventListener('click', () => {
  getApi('https://pokeapi.co/api/v2/pokemon/ditto').then((res) => {
    addNewRow(res.name)
    render()
  })
})

// render function

const render = () => {
  let rows = getRows()

  // reset the container

  const rowsContainer = document.getElementById('rows-container')
  rowsContainer.innerHTML = null

  rows.forEach((row, index) => {
    // create elements

    const rowContainer = createDomElement('div', {
      id: `row-${index + 1}`,
    })
    const btnContainer = createDomElement('div')
    const editBtn = createDomElement('button', {
      textContent: 'edit',
      onclick: () => {
        rowContainer.className = 'hidden'
        editForm.classList.remove('hidden')
      },
    })
    const deleteBtn = createDomElement('button', {
      textContent: 'delete',
      onclick: () => {
        deleteRow(index)
        render()
      },
    })
    const rowContent = createDomElement('h5', {
      textContent: `${row}`,
    })
    const editForm = createDomElement('form', {
      className: `hidden`,
      onsubmit: (event) => {
        event.preventDefault()
        editRow(editInput.value, index)
        render()
        editForm.classname = 'hidden'
        rowContainer.classList.remove('hidden')
      },
    })
    const editInput = createDomElement('input', {
      textContent: 'edit',
      type: 'text',
      value: `${row}`,
    })
    const submitBtn = createDomElement('button', {
      textContent: 'submit',
      type: 'submit',
    })
    const cancelBtn = createDomElement('button', {
      textContent: 'cancel',
    })

    // append elements

    addToDom(editForm, editInput)
    addToDom(editForm, submitBtn)
    addToDom(editForm, cancelBtn)

    addToDom(btnContainer, editBtn)
    addToDom(btnContainer, deleteBtn)

    addToDom(rowContainer, rowContent)
    addToDom(rowContainer, btnContainer)

    addToDom(rowsContainer, editForm)
    addToDom(rowsContainer, rowContainer)
  })
}
render()
