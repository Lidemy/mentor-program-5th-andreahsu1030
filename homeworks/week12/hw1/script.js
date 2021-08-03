/* eslint-disable */ 
function escape(toOutput) {
  return toOutput.replace(/\&/g, '&amp;')
    .replace(/\</g, '&lt;')
    .replace(/\>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/\'/g, '&#x27')
    .replace(/\//g, '&#x2F');
}
function appendCommentToDOM(container, comment, isPrepend) {
  const html = `
  <div class="card mt-2">
    <div class="card-body">
      <h5 class="card-title">${escape(comment.nickname)}</h5>
      <p class="card-text">${escape(comment.content)}</p>
    </div>
  </div>
`
  if (isPrepend) {
    container.prepend(html)
  } else {
    container.append(html)
  }
}
function getCommentsAPI(siteKey, before, cb) {
  let URL = `http://localhost/andrea/week12/api_comment.php?site_key=${siteKey}`
  if (before) {
    URL = URL + `&before=${before}`
  }
  $.ajax({
    url: URL,
  }).done(function (data) {
    cb(data)
  });
}


const loadMoreBtnHTML = '<button name="load-more" type="button" class="btn btn-outline-info loading-btn mt-3">Load More..</button>'
const siteKey = '123'
let lastId = null
let isEnd = false
const commentDOM = $('.comments')

$(document).ready(() => {
  getComments()

  $('.comments').on('click', '.loading-btn', () => {
    getComments()
  })

  $('.add-comment-form').submit(e => {
    e.preventDefault();
    const newCommentData = {
      'site_key': siteKey,
      'nickname': $('input[name=nickname]').val(),
      'content': $('textarea[name=content]').val()
    }
    $.ajax({
      type: 'POST',
      url: 'http://localhost/andrea/week12/api_add_comment.php',
      data: newCommentData
    }).done(function (data) {
      if (!data.ok) {
        alert(data.message)
        return
      }
      $('input[name=nickname]').val('')
      $('textarea[name=content]').val('')
      appendCommentToDOM(commentDOM, newCommentData, true)
    });
  })
})

function getComments() {
  const commentDOM = $('.comments')
  $('.loading-btn').hide()
  if (isEnd) {
    return
  }
  getCommentsAPI(siteKey, lastId, data => {
    if (!data.ok) {
      alert(data.message)
      return
    }
    const comments = data.discussions
    for (let comment of comments) {
      appendCommentToDOM(commentDOM, comment)
    }
    let length = comments.length
    if (length === 0) {
      isEnd = true
      $('.loading-btn').hide()
    } else {
      lastId = comments[length - 1].id
      $('.comments').append(loadMoreBtnHTML)
    }
  })
}