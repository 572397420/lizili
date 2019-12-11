class add{
    constructor(optios){
        this.url = "http://localhost/项目/data/pro.json",
        this.ID = getQueryVariable("id");
        this.s = optios.sBox;
        this.b = optios.bBox;
        console.log(this.ID)
        this.init();
    }
    init(){
        var that = this
        ajaxGet(this.url,function(res){
            // console.log(res);
            that.str = JSON.parse(res);
                   abc(that.str);
        });
        function abc(str){
            for(let i=0;i<str.length;i++){
                if(str[i].id === that.ID){
                    that.str1 = str[i];
                }
            }
            console.log(that.s[0])
            console.log(that.str1.url)
            that.s[0].src = that.str1.url;
            that.b[0].src = that.str1.url;
        }
        
    }
}
function getQueryVariable(key) {
    // 获取参数
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}
new add({
    sBox:$(".sBox").children("img"),
    bBox:$(".bBox").children("img"),
});