$('.nav-div').on('click',function(event){
    $('.nav-div').removeClass("selected");
    $(this).addClass("selected");
    $('#hamburger-btn').click();
});

$('#hamburger-btn').on('click',function(event){
    if($("#hamburger-btn").is(':checked')){
        $(".left-nav-div").addClass("open");
    }else{
        $(".left-nav-div").removeClass("open");
    }
});
  


