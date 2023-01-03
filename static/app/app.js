let myLibrary = []

let BookContainer = document.getElementById('book')
let AddingNewBook = document.getElementById('add-new')



function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}
// Displays Book
let Display = document.querySelector('.display')

function DisplayingBooks () {
  for (let i = 0; i < myLibrary.length; i++) {
    let Container = document.createElement('div')
    let title = document.createElement('h1')
    let author = document.createElement('h2')
    let pages = document.createElement('p')
    let read = document.createElement('p')
  
    title.textContent += myLibrary[i].title
    author.textContent += myLibrary[i].author
    pages.textContent += myLibrary[i].pages
    read.textContent += myLibrary[i].read
  
    Container.appendChild(title)
    Container.appendChild(author)
    Container.appendChild(pages)
    Container.appendChild(read)
  
    Display.appendChild(Container)
  }
}

DisplayingBooks()


function addBookToLibrary () {
// All the info
  const Title = document.getElementById('title').value
  const Author = document.getElementById('author').value
  const Pages = document.getElementById('pages').value
  const Read = document.getElementById('isRead').value

  if (Title !== '' || Author !== '' || Pages !== '') {
    myLibrary.push(new Book(Title, Author, Pages, Read))
    BookContainer.style.display = 'none'
  } else {
    console.log('No!')
  }
}

const Submit = document.querySelector('.submit')

Submit.addEventListener('click', (e) =>{
  e.preventDefault()
  e.target = addBookToLibrary()
  DisplayingBooks()
  
})
