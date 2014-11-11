
var nbg=0;
var nlock=false;

$(document).ready(function(){
    var tt=setInterval("timec()",5000);
    $('#searchbar').focus();

    $('.nav li').click(function(){
        $('.nav li').removeClass('active');
        $(this).addClass('active');
        var name=$(this).attr('name');
        $('form.search').attr("action",function(){
            switch(name){
                case 'wy':
                    return "http://www.baidu.com/s";
                case 'sp':
                    return "http://v.baidu.com/v";
                case 'tb':
                    return "http://tieba.baidu.com/f";
                case 'tp':
                    return "http://image.baidu.com/i";
                case 'zd':
                    return "http://zhidao.baidu.com/search";
                case 'yy':
                    return "http://music.baidu.com/search";
            }
        });
        $('form.search input:text').attr("name",function(){
            switch(name){
                case 'wy':
                    return "wd";
                case 'sp':
                    return "word";
                case 'tb':
                    return "kw";
                case 'tp':
                    return "word";
                case 'zd':
                    return "word";
                case 'yy':
                    return "key";
            }
        });
        focusback();
    });
    
    $('#cleansb').click(function(){
        document.getElementById('searchbar').value="";
        showbt();
        focusback();
    });

    $('#lock').click(function(){
        if(nlock===false){
            nlock=true;
            $('#lock').css("background","url(http://moe123.com/static/img/locked.png) center no-repeat");
        }
        else{
            nlock=false;
            $('#lock').css("background","url(http://moe123.com/static/img/locker.png) center no-repeat");
        }
    });

    $('#prev').click(function(){
        if(nlock===false){
            var u=nbgurlp();
            $('.nav').css("background-image",u);
        }
    });

    $('#next').click(function(){
        if(nlock===false){
            var u=nbgurln();
            $('.nav').css("background-image",u);
        }
    });

    
});

function nbgurln(){
    nbg++;
    if(nbg>6){
        nbg=0;
    }
    switch(nbg){
        case 0:
            return 'url(http://moe123.com/static/img/mirugo_nanami_vs_kyoko.jpg)';
        case 1:
            return 'url(http://moe123.com/static/img/mirugo_nanami_kyoko_hanabi.jpg)';
        case 2:
            return 'url(http://moe123.com/static/img/pid_4122676.jpg)';
        case 3:
            return 'url(http://moe123.com/static/img/vivi.jpg)';
        case 4:
            return 'url(http://moe123.com/static/img/saru.jpg)';
        case 5:
            return 'url(http://moe123.com/static/img/vivi_aki.jpg)';
        case 6:
            return 'url(http://moe123.com/static/img/oking.jpg)';
    }
}

function timec(){
    if(nlock===false){
            var u=nbgurln();
            $('.nav').css("background-image",u);
    }
}

function nbgurlp(){
    if(nbg==0){
        nbg=7;
    }
    nbg--;
    switch(nbg){
        case 0:
            return 'url(http://moe123.com/static/img/mirugo_nanami_vs_kyoko.jpg)';
        case 1:
            return 'url(http://moe123.com/static/img/mirugo_nanami_kyoko_hanabi.jpg)';
        case 2:
            return 'url(http://moe123.com/static/img/pid_4122676.jpg)';
        case 3:
            return 'url(http://moe123.com/static/img/vivi.jpg)';
        case 4:
            return 'url(http://moe123.com/static/img/saru.jpg)';
        case 5:
            return 'url(http://moe123.com/static/img/vivi_aki.jpg)';
        case 6:
            return 'url(http://moe123.com/static/img/oking.jpg)';
    }
}

function focusback(){
    document.getElementById('searchbar').focus();
    return true;
};

function showbt(){
    if (document.getElementById('searchbar').value !=="") {
        document.getElementById('cleansb').style.visibility="visible";
    }else{
        document.getElementById('cleansb').style.visibility="hidden";
    }
};

if (typeof(document.onselectstart) != "undefined") {       
    // IE下禁止元素被选取       
    document.onselectstart = function (event){
        if(event.target.tagName!="INPUT"){
            return false;
        }
    }      
} else {
    // firefox下禁止元素被选取的变通办法       
    document.onmousedown = function (event){
        if(event.target.tagName!="INPUT"){
            return false;
        }
    }      
    document.onmouseup = function(event){
        if(event.target.tagName!="INPUT"){
            return false;
        }
    }       
}