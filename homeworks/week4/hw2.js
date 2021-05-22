const action = process.argv[2]
const request = require('request')

const baseUrl = 'https://lidemy-book-store.herokuapp.com/books'

if (action === 'list') {
  listBooks()
} else if (action === 'read') {
  readBook(process.argv[3])
} else if (action === 'delete') {
  deleteBook(process.argv[3])
} else if (action === 'create') {
  createBook(process.argv[3])
} else if (action === 'update') {
  updateBooks(process.argv[3], process.argv[4])
} else {
  console.log('unknow action')
}

function listBooks() {
  request(`${baseUrl}?_limit=20`, (error, response, body) => {
    if (error) {
      console.log('error', error)
      return
    }
    let books
    try {
      books = JSON.parse(body)
    } catch (error) {
      console.log(error)
      return
    }
    for (let i = 0; i < books.length; i++) {
      console.log(`${books[i].id}  ${books[i].name}`)
    }
  })
}
function readBook(id) {
  request(`${baseUrl}/${id}`, (error, response, body) => {
    if (error) {
      console.log('error', error)
      return
    }
    let book
    try {
      book = JSON.parse(body)
    } catch (error) {
      console.log(error)
      return
    }

    console.log(book)
  })
}
function deleteBook(id) {
  request.delete(`${baseUrl}/${id}`, (error, response, body) => {
    if (error) {
      console.log('error', error)
      return
    }
    let book
    try {
      // eslint-disable-next-line
      book = JSON.parse(body)
    } catch (error) {
      console.log(error)
      return
    }
    console.log('刪除成功！')
  })
}
function createBook(name) {
  request.post({
    url: `${baseUrl}/`,
    form: {
      name
    }
  },
  (error, response, body) => {
    if (error) {
      return console.log('error', error)
    }
    let book
    try {
      book = JSON.parse(body)
    } catch (error) {
      console.log(error)
      return
    }
    console.log(`${book} 新增成功！`)
  })
}
function updateBooks(id, newName) {
  request.patch({
    url: `${baseUrl}/${id}`,
    form: {
      newName
    }
  },
  (error, response, body) => {
    if (error) {
      console.log('error', error)
      return
    }
    let book
    try {
      // eslint-disable-next-line
      book = JSON.parse(body)
    } catch (error) {
      console.log(error)
      return
    }
    console.log('更新成功!')
  })
}
