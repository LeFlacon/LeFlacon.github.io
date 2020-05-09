link = {
    init:function() {
        const that=this;
        $.getJSON("links.json",
            function(data){
                that.render(data);
            });
    },
    render:function(data){
        let name,site,info,avatar,li="";
        for(let i=0;i<data.length;i++){
            name=data[i].name;
            site=data[i].site;
            info=data[i].info;
            avatar=data[i].avatar;
            li+='<div class="card">'+'<img class="ava" src="'+avatar+'"/><div class="card-header"><div><a href="'+site+'" target="_blank">'+name+'</a></div><div class="info">'+info+'</div></div></div>';
        }
        $(".link-navigation").append(li);
    }
};
link.init();