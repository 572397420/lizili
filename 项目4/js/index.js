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




$(".zili li").click(function(){
    //			1获取点击元素的索引
    //			console.log($(this).index())
                var i = $(this).index();
    //			2根据索引找到指定结构,获取距离顶部的位置
                var t = $(".asd").eq(i).offset().top;
                console.log($(".asd").eq(i).offset().top)
    //			$(document).scrollTop(t);
    //			3配合动画方法,设置滚动距离
                $("html").animate({
                    scrollTop:t
                })
            })