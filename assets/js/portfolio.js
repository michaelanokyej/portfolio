// $(function(){
//     $('#projectInfo').hover(function(){
//         $(this).find("p.description").css({"display": "flex"});
//     }, function(){
//         $(this).find("p.description").css({"display": "flex"});
//     }
//     });
// )};


$(function(){
    $('#projectInfo').hover(function(){
        event.stopPropagation();
        $(this).find("p.description").css({"display": "flex"});  
    },function(){
        $(this).find("p.description").css({"display": "none"});     
    });
});