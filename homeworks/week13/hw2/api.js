/* eslint-disable */
import $ from 'jquery'
export function getComments(apiUrl, siteKey, before, cb) {
  let URL = `${apiUrl}/api_comment.php?site_key=${siteKey}`
  if (before) {
    URL = URL + `&before=${before}`
  }
  $.ajax({
    url: URL,
  }).done(function (data) {
    cb(data)
  });
}

export function addComments(apiUrl, siteKey, data, cb) {
  $.ajax({
    type: 'POST',
    url: `${apiUrl}/api_add_comment.php`,
    data
  }).done(function (data) {
    cb(data)
  });
}