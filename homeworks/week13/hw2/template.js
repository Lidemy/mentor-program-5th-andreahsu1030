/* eslint-disable */
export const cssTemplate = '.card { margin-top:12px } .container { margin: 10px auto; padding: 8px 30px; background: white; width: 100%; max-width: 600px; box-shadow: 1px 1px 3px #e8e8e8; border-radius: 5px; } body { background: #f7f7f7; margin: 0; } * { box-sizing: border-box; }'
export function getForm(className, commentsClassName, loadMoreClassName) {
  return `
    <div>
      <form action="" class="${className}">
        <div class="form-group">
          <label> Nickname</label>
          <input name="nickname" type="text" placeholder="your nickname.." class="form-control"
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="form-group">
          <label>Comment</label>
          <textarea name="content" class="form-control" placeholder="Leave a comment here" 
            style="height: 100px"></textarea>
        </div>
        <button type="submit" class="btn btn-outline-info mt-2">送出</button>
      </form>
    <div class="${commentsClassName}"></div>
    <button name="${loadMoreClassName}" type="button" class=" btn btn-outline-info ${loadMoreClassName} mt-3">Load More..</button>
  </div>`
}
