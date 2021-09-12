/* eslint-disable */
import { getComments, addComments } from './api'
import { appendCommentToDOM, appendStyle } from './utils'
import { cssTemplate, getForm } from './template'
import $ from 'jquery'

export function init(options) {
  let siteKey = ''
  let apiUrl = ''
  let containerElement = null
  let lastId = null
  let commentDOM = null
  let isEnd = false
  let formClassName
  let commentsClassName
  let formSelector
  let commentsSelector
  let loadMoreClassName
  siteKey = options.siteKey
  apiUrl = options.apiUrl

  formClassName = `${siteKey}-add-comment-form`
  commentsClassName = `${siteKey}-comments`
  loadMoreClassName = `${siteKey}-loading-btn`
  formSelector = '.' + formClassName
  commentsSelector = '.' + commentsClassName

  containerElement = $(options.containerSelector)
  containerElement.append(getForm(formClassName, commentsClassName, loadMoreClassName))
  appendStyle(cssTemplate)

  commentDOM = $(commentsSelector)
  getNewComments()
  $('.container').on('click', '.' + loadMoreClassName, () => {
    getNewComments()
  })

  $(formSelector).submit(e => {
    e.preventDefault()
    const nicknameDOM = $(`${formSelector} input[name=nickname]`)
    const contentDOM = $(`${formSelector} textarea[name=content]`)
    const newCommentData = {
      'site_key': siteKey,
      'nickname': nicknameDOM.val(),
      'content': contentDOM.val()
    }
    addComments(apiUrl, siteKey, newCommentData, data => {
      if (!data.ok) {
        alert(data.message)
        return
      }
      nicknameDOM.val('')
      contentDOM.val('')

      appendCommentToDOM(commentDOM, newCommentData, true)
    });
  })

  function getNewComments() {
    getComments(apiUrl, siteKey, lastId, data => {
      let comments = data.discussions
      let length = comments.length

      if (!data.ok) {
        alert(data.message)
        return
      }
      if (length === 0 || isEnd) {
        $('.' + loadMoreClassName).hide()
      }

      for (let comment of comments) {
        appendCommentToDOM(commentDOM, comment)
        if (length < 5) {
          $('.' + loadMoreClassName).hide()
          isEnd = true
          return
        } else {
          lastId = comments[length - 1].id
        }
      }
    })
  }
}
