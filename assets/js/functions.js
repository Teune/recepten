$(document).ready(function(){
    $('.task-list-item-checkbox').prop("disabled", false); 
    $('.task-list-item-checkbox').on('change', function () {                
        var input = $(this).parent().closest("li")
        if (this.checked) {
            $(input).css('text-decoration', 'line-through');
        } else {
            $(input).css('text-decoration', 'none');
        }
    })
 }); 