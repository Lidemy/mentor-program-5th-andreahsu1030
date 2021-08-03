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
  let URL = `http://mentor-program.co/mtr04group6/andrea/week12/board/api_comment.php?site_key=${siteKey}`
  if (before) {
    URL = URL + `&before=${before}`
  }
  $.ajax({
    url: URL,
  }).done(function (data) {
    cb(data)
  });
}

const siteKey = '123'
let lastId = null
let isEnd = false
const commentDOM = $('.comments')

$(document).ready(() => {
  getComments()

  $('.container').on('click', '.loading-btn', () => {
    getComments()
  })

  $('.add-comment-form').submit( e => {
    e.preventDefault();
    const newCommentData = {
      'site_key': siteKey,
      'nickname': $('input[name=nickname]').val(),
      'content': $('textarea[name=content]').val()
    }
    $.ajax({
      type: 'POST',
      url: 'http://mentor-program.co/mtr04group6/andrea/week12/board/api_add_comment.php',
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

  getCommentsAPI(siteKey, lastId, data => {
    if (!data.ok) {
      alert(data.message)
      return
    }
    const comments = data.discussions
    let length = comments.length

    for (let comment of comments) {

      appendCommentToDOM(commentDOM, comment)

      if (length < 5) {
        $('.loading-btn').hide()
        isEnd = true
        return
      } else {
        lastId = comments[length - 1].id
      }
    }
  })
}