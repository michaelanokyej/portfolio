    $('.projectLi').hover(function(){
        // event.stopPropagation();
        $(this).find(".description").css({"display": "flex"});  
    },function(){
        $(this).find(".description").css({"display": "none"});     
    });