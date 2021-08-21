/* eslint-disable */ 
function escape(toOutput) {
  return toOutput.replace(/\&/g, '&amp;')
    .replace(/\</g, '&lt;')
    .replace(/\>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/\'/g, '&#x27')
    .replace(/\//g, '&#x2F');
}
let id = 1
const templateHTML = `
  <div class="todo list-group-item list-group-item-action d-flex justify-content-between align-items-center">
    <div class="todo__content-wrapper custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="todo-{id}">
      <label class="todo__content custom-control-label" for="todo-{id}">{content}</label>
    </div>
    <button type="button" class="btn-del btn btn-danger">刪除</button>
  </div>
  `

function addTodo() {
  const newTodo = $('.input_todo').val()
  if (!newTodo) return
  $('.todos').append(
    templateHTML
      .replace('{content}', escape(newTodo))
      .replace(/{id}/g, id)
  )
  id += 1
  $('.input_todo').val('')
  undoCount++
  updateUndoCount()
  $('.todo').addClass('undo')
}

let undoCount = 0

function updateUndoCount() {
  $('.undo_count').text(undoCount)
}



// 新增
$('.add_btn').click(() => {
  addTodo()
})

$('.input_todo').keydown(e => {
  if (e.key === 'Enter') {
    addTodo()
  }
})

// 刪除
$('.todos').on('click', '.btn-del', function (e) {
  $(e.target).parent().remove()

  let checkedBox = $(e.target).prev().find('[type=checkbox]')
  if (!checkedBox.prop('checked')) {
    undoCount--
    updateUndoCount()
  }
})

// 已完成
$('.todos').on('change', function (e) {
  let todo = $(e.target).closest('.todo')

  if ($(e.target).is(":checked")) {
    undoCount--
    updateUndoCount()
    todo.toggleClass('undo')
    todo.toggleClass('done')
  } else {
    undoCount++
    updateUndoCount()
    todo.toggleClass('undo')
    todo.toggleClass('done')
  }
})

//移除已完成事項
$('.container').on('click', '.clear_all', (e) => {
  $('.todo').has(":checked").remove()
})

// 篩選功能
$('.options').on('click', 'div', (e) => {

  if ($(e.target).hasClass('select_all')) {
    handelActive('all')
    $('.todo').each((i, el) => {
      if ($(el).hasClass('checked')) {
        $(el).addClass('hide')
      } else {
        $(el).removeClass('hide')
      }
    })
  }

  if ($(e.target).hasClass('select_undo')) {
    handelActive('undo')
    $('.todo').each((i, el) => {
      if ($(el).hasClass('done')) {
        $(el).addClass('hide')
      } else {
        $(el).removeClass('hide')
      }
    })
  }

  if ($(e.target).hasClass('select_done')) {
    handelActive('done')
    $('.todo').each((i, el) => {
      if ($(el).hasClass('undo')) {
        $(el).addClass('hide')
      } else {
        $(el).removeClass('hide')
      }
    })
  }

// active 另外做
  function handelActive(filter) {
    $('.select_all').removeClass('active')

    if (filter === 'all') {
      $('.select_all').addClass('active')
    } else {
      $('.select_all').removeClass('active')
    }

    if (filter === 'undo') {
      $('.select_undo').addClass('active')
    } else {
      $('.select_undo').removeClass('active')
    }

    if (filter === 'done') {
      $('.select_done').addClass('active')
    } else {
      $('.select_done').removeClass('active')
    }
  }
})

