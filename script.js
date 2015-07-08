var nbg = 0;
var nlock = false;

$(document).ready(function() {
    var tt = setInterval("timec()", 5000);
    $('#searchbar').focus();
    $('#board').load('lyb.php');
    $('.nav li').click(function() {
        $('.nav li').removeClass('active');
        $(this).addClass('active');
        var name = $(this).attr('name');
        $('form.search').attr("action", function() {
            switch (name) {
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
                case 'fy':
                    return "http://fanyi.baidu.com/#en/zh/";
            }
        });

        $('form.search input:text').attr("name", function() {
            switch (name) {
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
                case 'fy':
                    return "";
            }
        });

        focusback();
    });

    $('#cleansb').click(function() {
        document.getElementById('searchbar').value = "";
        showbt();
        focusback();
    });

    $('#lock').click(function() {
        if (nlock === false) {
            nlock = true;
            $('#lock').css("background", "url(img/chaossearch/locked.png) center no-repeat");
        } else {
            nlock = false;
            $('#lock').css("background", "url(img/chaossearch/locker.png) center no-repeat");
        }
    });

    $('#prev').click(function() {
        if (nlock === false) {
            var u = nbgurlp();
            $('.nav').css("background-image", u);
        }
    });

    $('#next').click(function() {
        if (nlock === false) {
            var u = nbgurln();
            $('.nav').css("background-image", u);
        }
    });

    $('.nav2 a').click(function() {
        $('.nav2 a').removeClass('active');
        var name2 = $(this).attr('name');
        var tmpt = '';
        if (name2 == '_main') {
            $('.nav2').each(function() {
                $(this).children().first().addClass('active');
            });
            $('#board').load('lyb.php',function(){
                window.scrollTo(0,660);
            });
        } else if (name2 == '_about') {
            $('.nav2').each(function() {
                $(this).children().last().addClass('active');
            });
            $('#board').load('about.html',function(){
                window.scrollTo(0,660);
            });
        } else if (name2 == '_my2048') {
            $('.nav2').each(function() {
                $(this).children().first().next().addClass('active');
            });
            tmpt = chge2048();
            $('#board').empty();
            $('#board').append(tmpt);
            fresh();
        }
        window.scrollTo(0, 660);
        
    });

    $('#about').click(function() {
        $('.nav2 a').removeClass('active');
        $('.nav2 a:last-child').addClass('active');
        $('#board').load('about.html');
    });

    $('#gotop').click(function() {
        goTop();
        focusback();
    });


});


$(document).scroll(function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop || window.scrollTop;
    if (t > 670) {
        $("#tbar").attr("style", "top:0;");
    } else {
        $("#tbar").attr("style", "top:-40px;");
    }
    // s=800-t;
    // spx=s+"px";
    // document.getElementById('nav').style.height = spx;
});


function chge2048() {
    var t = "             \
            <div class='m-border' style='height: 800px;'>   \
            <table cellspacing = '5px' class='tb2048'><tr>  \
                    <td id='0'></td>                        \
                    <td id='1'></td>                        \
                    <td id='2'></td>                        \
                    <td id='3'></td>                        \
                </tr>                                       \
                <tr>                                        \
                    <td id='4'></td>                        \
                    <td id='5'></td>                        \
                    <td id='6'></td>                        \
                    <td id='7'></td>                        \
                </tr>                                       \
                <tr>                                        \
                    <td id='8'></td>                        \
                    <td id='9'></td>                        \
                    <td id='10'></td>                       \
                    <td id='11'></td>                       \
                </tr>                                       \
                <tr>                                        \
                    <td id='12'></td>                       \
                    <td id='13'></td>                       \
                    <td id='14'></td>                       \
                    <td id='15'></td>                       \
                </tr></table></div>";
    return t;
}



function nbgurln() {
    nbg++;
    if (nbg > 6) {
        nbg = 0;
    }
    switch (nbg) {
        case 0:
            return 'url(img/chaossearch/mirugo_nanami_vs_kyoko.jpg)';
        case 1:
            return 'url(img/chaossearch/mirugo_nanami_kyoko_hanabi.jpg)';
        case 2:
            return 'url(img/chaossearch/pid_4122676.jpg)';
        case 3:
            return 'url(img/chaossearch/vivi.jpg)';
        case 4:
            return 'url(img/chaossearch/saru.jpg)';
        case 5:
            return 'url(img/chaossearch/vivi_aki.jpg)';
        case 6:
            return 'url(img/chaossearch/oking.jpg)';
    }
}

function timec() {
    if (nlock === false) {
        var u = nbgurln();
        $('.nav').css("background-image", u);
    }
}

function nbgurlp() {
    if (nbg == 0) {
        nbg = 7;
    }
    nbg--;
    switch (nbg) {
        case 0:
            return 'url(img/chaossearch/mirugo_nanami_vs_kyoko.jpg)';
        case 1:
            return 'url(img/chaossearch/mirugo_nanami_kyoko_hanabi.jpg)';
        case 2:
            return 'url(img/chaossearch/pid_4122676.jpg)';
        case 3:
            return 'url(img/chaossearch/vivi.jpg)';
        case 4:
            return 'url(img/chaossearch/saru.jpg)';
        case 5:
            return 'url(img/chaossearch/vivi_aki.jpg)';
        case 6:
            return 'url(img/chaossearch/oking.jpg)';
    }
}

function focusback() {
    document.getElementById('searchbar').focus();
    return true;
};

function showbt() {
    if (document.getElementById('searchbar').value !== "") {
        document.getElementById('cleansb').style.visibility = "visible";
    } else {
        document.getElementById('cleansb').style.visibility = "hidden";
    }
};

if (typeof(document.onselectstart) != "undefined") {
    // IE下禁止元素被选取       
    document.onselectstart = function(event) {
        if (event.target.tagName != "INPUT") {
            return false;
        }
    }
} else {
    // firefox下禁止元素被选取的变通办法       
    document.onmousedown = function(event) {
        if (event.target.tagName != "INPUT") {
            return false;
        }
    }
    document.onmouseup = function(event) {
        if (event.target.tagName != "INPUT") {
            return false;
        }
    }
}


function goTop(acceleration, time) {
    acceleration = acceleration || 0.1;
    time = time || 16;

    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    var x3 = 0;
    var y3 = 0;

    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }
    var x3 = window.scrollX || 0;
    var y3 = window.scrollY || 0;

    // 滚动条到页面顶部的水平距离
    var x = Math.max(x1, Math.max(x2, x3));
    // 滚动条到页面顶部的垂直距离
    var y = Math.max(y1, Math.max(y2, y3));

    // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
    var speed = 1 + acceleration;
    window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));

    // 如果距离不为零, 继续调用迭代本函数
    if (x > 0 || y > 0) {
        var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
        window.setTimeout(invokeFunction, time);
    }
}