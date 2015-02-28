var nbg = 0;
var nlock = false;

$(document).ready(function() {
    var tt = setInterval("timec()", 5000);
    $('#searchbar').focus();
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
            tmpt = '<div class="m-border" style="height: 800px;"></div>';
        } else if (name2 == '_about') {
            $('.nav2').each(function() {
                $(this).children().last().addClass('active');
            });
            tmpt = chgeAbout();
        } else if (name2 == '_my2048') {
            $('.nav2').each(function() {
                $(this).children().first().next().addClass('active');
            });
            tmpt = chge2048();
        }
        $('#board').empty();
        $('#board').append(tmpt);
        window.scrollTo(0, 660);
        fresh();
    });

    $('#about').click(function() {
        $('.nav2 a').removeClass('active');
        $('.nav2 a:last-child').addClass('active');
        var t = chgeAbout();
        $('#board').empty();
        $('#board').append(t);
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

function chgeAbout() {
    var t = '<div class="m-border" style="height: 100%;">';
    t += '<h1>About</h1>';
    t += '<h3>想说的话：</h3>';
    t += '<p>这是我个人纯练手的作品，只是为了将一些自己的想法记录并努力实现，\
    或者将别人的创意模仿到自己的页面中，也许做的很烂，但是我会不断的更新，\
    以后应该会功能多一些吧，甚至是有互动吧，嘛，慢慢来吧。</p>';
    t += '</br>';
    t += '<h3>功能简介：</h3>';
    t += '<p>1.优化了百度各领域搜索跳转的问题，这里不跳转可以直接搜索。</p>';
    t += '<p>2.保持修改搜索网域后，输入焦点始终在搜索栏的优点。</p>';
    t += '<p>3.输入搜索内容后，搜索栏最右会出现“X”的图案，点击即可清空搜索栏。</p>';
    t += '<p>4.背景图片可以锁定。</p>';
    t += '<p>5.关于翻译那个，我没做，你们别以为是bug，哈哈哈。</p>';
    t += '<p>6.自己做的2048小游戏玩。</p>';
    t += '</br>';
    t += '<h3>New idea:</h3>';
    t += '<p>增加常用页面的点击访问。</p>';
    t += '<p>增加留言板功能（估计要改成php了，或者新页面）</p>';
    t += '</br>';
    t += '<h3>更新日志：</h3>';
    t += '<h5>2015-2-27</h5>';
    t += '<p>1.修复了IE下不能显示cursor图标的问题。</p>';
    t += '<p>2.但是！貌似IE下有点往上位移…怎么办！？</p>';
    t += '<h5>2015-2-22</h5>';
    t += '<p>1.新年快乐！羊年大吉！喜气洋洋！</p>';
    t += '<p>2.修改了cursor的图标，现在变得tiny了，眼力不好的不能怪我啦。</p>';
    t += '<h5>2015-2-14</h5>';
    t += '<p>1.优化2048(改为图片了耶)</p>';
    t += '<p>2.借鉴了百度搜索的叉叉，终于把蛋疼的清字换了。</p>';
    t += '<p>3.情人节单身狗表示恨鸡摸！！！！！</p>';
    t += '<h5>2015-2-13</h5>';
    t += '<p>1.优化界面css。</p>';
    t += '<p>2.新增2048小游戏（没做动画效果，纯实现方法了，也没有分数…凑合着玩吧）</p>';
    t += '<h5>2015-2-10</h5>';
    t += '<p>1.新增弹出导航栏。</p>';
    t += '<h5>2015-1-19</h5>';
    t += '<p>1.禁止除了搜索框以外的元素被选择(我就是觉得这样干净…)</p>';
    t += '<h5>2014-12-31</h5>';
    t += '<p>1.增加top置顶功能按钮。</p>';
    t += '<p>2.实现置顶功能按钮的平滑滚动(其实也不怎么平滑。。)</p>';
    t += '<h5>2014-12-23</h5>';
    t += '<p>1.修改了清空按钮的出现条件，搜索栏有内容时才出现。</p>';
    t += '<p>2.增加了背景图片和背景控制条。</p>';
    t += '<p>3.实现图片自动轮播，锁定，前后切换等功能。</p>';
    t += '<h5>2014-12-15</h5>';
    t += '<p>1.增加了搜索栏上面的功能按钮，实现了不跳转网页直接搜索不同网页的内容。</p>';
    t += '<p>2.优化了按钮css，改变了总体布局。</p>';
    t += '<p>3.增加“清”按钮，实现移动端搜索时清空搜索栏的功能。</p>';
    t += '<h5>2014-12-10</h5>';
    t += '<p>1.搭建好框架结构，css雏形。</p>';
    t += '<p>2.简单加入一些js测试运行正常。</p>';
    t += '</div>';
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