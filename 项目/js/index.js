$(".cc").children(".ca").hover(function(){
    $(this).children("dl").css({
        width:100,
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


class ShopDisplay {
    constructor(options) {
        this.timeURL = options.timeURL;
        this.newURL = options.newURL;
        this.listURL = options.listURL;
        this.chartsURL = options.chartsURL;
        this.box = options.box;
        this.box2 = options.box2;
        this.box3 = options.box3;
        this.box4 = options.box4;
        this.box4_1 = options.box4_1;

        this.load();
        this.addEvent();
    }
    load() {
        //开启ajax向数据库拿数据
        var that = this;
        ajaxPost(this.timeURL, function (res) {
            // console.log(res)
            that.res = JSON.parse(res);
            that.timeDisplay();
        });
    }
    //渲染特卖部分
    timeDisplay(){
        var strTime = "";
        for (var i = 0; i < 4; i++) {
            strTime += `
                    <li>
                        <div class="img" id="${this.res[i].dataId}">
                            <a target="_blank" href="http://localhost/unt/1910-item/shopEmpty.html?id=${this.res[i].dataId}">
                                <img src="${this.res[i].src}" alt="">
                            </a>
                        </div>
                        <div class="time-b-b">
                            <div class="time-b-l">
                                <h3><a target="_blank" href="http://localhost/unt/1910-item/shopEmpty.html?id=${this.res[i].dataId}">${this.res[i].dataName}</a></h3>
                                <p>编号:${this.res[i].dataId}</p>
                                <p>作者:${this.res[i].dataPeople}</p>
                            </div>
                            <div class="time-b-r">
                                <a target="_blank" href="http://localhost/unt/1910-item/shopEmpty.html?id=${this.res[i].dataId}">查看详情</a>
                                <p>市场价￥${this.res[i].dataWriter}</p>
                            </div>
                        </div>
                    </li>
            `
        }
        this.box2.innerHTML = strTime;
    }
    
}
new ShopDisplay({
    timeURL: "http://localhost/unt/1910-item/dataJson/TimeDate.json",
    box: document.getElementById("new-l-dataUl"),
    box2: document.getElementById("time-b-dataUl"),
    box3: document.getElementById("list-c-dataUl"),
    box4: document.getElementById("firstThree-DateUl"),
    box4_1: document.getElementById("firstThree-ul-DateUl"),
});