const myLibrary = []
const Display = document.querySelector('.display')
const FormContainer = document.querySelector('.form-container')
const AddingNewBook = document.getElementById('add-new')
const Form = document.getElementById('addBooks')
// Hiding the input--

FormContainer.style.display = 'none'
AddingNewBook.addEventListener('click', () => {
  FormContainer.style.display = 'block'
})
// --

function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}
// Displays Book

function DisplayingBooks () {
  const removeDivs = document.querySelectorAll('.card')
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove()
  }

  // eslint-disable-next-line no-lone-blocks
  {
    for (let i = 0; i < myLibrary.length; i++) {
      const Container = document.createElement('div')
      Container.classList.add('card')
      const title = document.createElement('h1')
      title.classList.add('h1-of-book-collection')
      const author = document.createElement('h3')
      author.classList.add('h3-of-book-collection')
      const pages = document.createElement('p')
      pages.classList.add('p-of-book-collection')
      const read = document.createElement('input')
      read.classList.add('read-of-book-collection')
      read.setAttribute('type', 'checkbox')

      title.textContent += myLibrary[i].title
      author.textContent += myLibrary[i].author
      pages.textContent += myLibrary[i].pages
      // eslint-disable-next-line no-cond-assign, no-constant-condition
      if (myLibrary[i].read = true) {
        // eslint-disable-next-line no-unused-expressions
        read.checked = true
      }

      Container.appendChild(title)
      Container.appendChild(author)
      Container.appendChild(pages)
      Container.appendChild(read)

      Display.appendChild(Container)
    }
  }
}

function addBookToLibrary () {
  // All the info
  const Title = document.getElementById('title').value
  const Author = document.getElementById('author').value
  const Pages = document.getElementById('pages').value
  const Read = document.getElementById('isRead').checked

  if (Title !== '' || Author !== '' || Pages !== '') {
    myLibrary.push(new Book(Title, Author, Pages, Read))

    FormContainer.style.display = 'none'
  } else {
    console.log('No!')
  }
}

const Submit = document.querySelector('.submit')

Submit.addEventListener('click', (e) => {
  e.preventDefault()
  e.target = addBookToLibrary()
  DisplayingBooks()
  Form.reset()
})
