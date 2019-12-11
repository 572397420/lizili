class page{
    constructor(options){
        this.ul = options.ul;
        this.url = options.url;
        this.ul1 = options.ul1;
        this.load();
    }
    load(){
        let this1 = this;
        ajaxGet(
            this.url,
            function(res){
                this1.res = JSON.parse(res);
                console.log(this1.res)
                this1.display();
            }
        )
    }
    display(){
        let str = "";
        for(let i=0;i<6;i++){
            str += `
                        <li class="dd"><a href="shoop.html?id=${this.res[i].id}">
                                <h2>${this.res[i].name}</h2>
                                <h3>${this.res[i].conten}</h3>
                                <img src="${this.res[i].url}" alt="">
                        </a></li>
                        
            `
        }
        let str1 = `
        <li class="dianqi">
        <a href="">
            <img src="img/x1.jpg" alt="">
        </a></li>
        `
        str1 += str;
        this.ul.html(str1);




        let str2 = "";
        for(let i=6;i<this.res.length;i++){
            console.log(this.res[i].name)
            str2 += `
            <li class="dn">
            <a href="shoop.html?id=${this.res[i].id}">
                <h2>${this.res[i].name}</h2>
                <h3>${this.res[i].conten}</h3>
                <img src="${this.res[i].url}" alt="">
            </a></li>
            `
        }
        let str3 = `
        <li class="dianjia"><a href="">
            <img src="img/s.jpg" alt="">
        </a></li>
        `
        str3 += str2;
        this.ul1.html(str3);
    }
}
new page({
    ul:$(".yunwang-2").children("ul"),
    url:"http://localhost/项目/data/pro.json",
    ul1:$(".guang-2").children("ul"),
})
