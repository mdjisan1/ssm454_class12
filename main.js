$(document).ready(function(){
    $('.add-task').val();

    $(".add-task").keypress(function(e){

        if(e.keyCode == 13 && $(".add-task").val() != ''){

        var task = $('<div class="task"></div>').text($(".add-task").val());

        var del = $('<i class="fa fa-trash text-danger ms-2"></i>').click(function(){
           var p = $(this).parent();
           p.fadeOut(function(){
            p.hide();
           });

        });
        var ok = $('<i class="fa fa-check text-success"></i>').click(function(){
            var p = $(this).parent();
            
            $('.c-task ').append(p);
            $(this).hide();

        });

        task.append(del,ok);
        
        $('.ic-task').append(task);
        $(".add-task").val('');
    }
    });
});