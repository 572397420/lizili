$(".cc").children(".ca").hover(function(){
    $(this).children("dl").css({
        width:200,
        color:"blue",
        position:"absolute",
        zIndex:99999,
        display:"block",
        left:200
    })
    .eq($(this).index()).css({
        display:"none",
    });
    $(this).children("dd").css(
        {
            display:"inline"
        }
    );
},function(){
    $(this).children("dl").css("display","none").eq($(this).index()).css("display","none");
    $(this).children("dd").css("display","none"); 
})