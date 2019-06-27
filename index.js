//add new items to list
$(function(){
    $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    let item = $(this).find('input[name="shopping-list-entry"]').val();
    let newListItem =
      `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
  $('ul.shopping-list').append(newListItem);
  });
})

//delete items from list
$(function() {
  $('ul').on('click', 'button.shopping-item-delete', function(event) {
  $(this).parents('li').remove();
  });
});

//check items off List
$(function(){
  $('ul').on('click', 'button.shopping-item-toggle', function(event) {
    $(this).closest('div').siblings('.shopping-item').toggleClass('shopping-item__checked');
  });

})
