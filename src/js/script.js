/*jshint esversion: 6 */
var indexCreater = {
    initialize: function() {
        $('.index-wrap').html(this.TPL);
        this.appendSearchEngle();
        this.changeSearchEngle();
        this.search();
        this.hrefSearchEngle();
        this.appendNewSite();
        this.inputFocus();
        this.setBackGround();
        this.snowFall();
        this.appendNewSite("ACG");
        this.appendNewSite("SNS");
        this.appendNewSite("techonology");
        this.appendNewSite("shopping");
        this.appendNewSite("others");
        this.keyboardListener();
    },
    infoList: [{
            "name": "google",
            "url": "https://www.google.com.hk/webhp?tab=Tw#newwindow=1&safe=strict&q=",
            "href": "https://www.google.com.hk/webhp?hl=zh-CN"
        },
        { "name": "baidu", "url": "https://www.baidu.com/s?wd=", "href": "https://www.baidu.com/" }, {
            "name": "MDN",
            "url": "https://developer.mozilla.org/zh-CN/search?q=",
            "href": "https://developer.mozilla.org/zh-CN/"
        },
        { "name": "npmjs", "url": "https://www.npmjs.com/package/", "href": "https://www.npmjs.com/package/package" },
        { "name": "谷歌镜像", "url": "http://soguge.com/search?hl=zh-CN&q=", "href": "http://www.google.com/" },
        { "name": "bing", "url": "http://global.bing.com/search?q=", "href": "http://global.bing.com/" },
        { "name": "必应", "url": "http://cn.bing.com/search?q=", "href": "http://cn.bing.com/" },
        { "name": "yahoo!", "url": "https://sg.search.yahoo.com/search?p=", "href": "https://search.yahoo.com/" },
        { "name": "网易云音乐", "url": "http://music.163.com/#/search/m/?s=", "href": "http://music.163.com/#" }, {
            "name": "维基百科",
            "url": "https://zh.wikipedia.org/w/index.php?search=",
            "href": "https://zh.wikipedia.org/wiki/Wikipedia:首页"
        },
        { "name": "wikipedia", "url": "https://en.wikipedia.org/wiki/", "href": "https://www.wikipedia.org/" },
        { "name": "谷歌翻译", "url": "http://translate.google.cn/#en/zh-CN/", "href": "https://translate.google.cn/" }, {
            "name": "谷歌搜图",
            "ur l": "https://www.google.com.hk/search?newwindow=1&safe=strict&hl=zh-CN&site=webhp&tbm=isch&sa=1&q=",
            "href": "https://www.google.com/"
        }, {
            "name": "百度搜图",
            "url": "http://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&word=",
            "href": "https://www.baidu.com/"
        },
        { "name": "torrentkitty", "url": "https://www.torrentkitty.tv/search/", "href": "https://www.torrentkitty.tv/" },
        { "name": "虾米音乐", "url": "http://www.xiami.com/search?key=", "href": "http://www.xiami.com/" },
        { "name": "高德地图", "url": "http://ditu.amap.com/search?query=", "href": "http://ditu.amap.com/" }, {
            "name": "百度云",
            "url": "http://baiduyun.57fx.cn/so-result.html?keyword=",
            "href": "https://pan.baidu.com/disk/home#list/path=%2F"
        }

    ],
    tableList: [{

        "type": "ACG",
        "name": "bilibili",
        "url": "http://www.bilibili.com"
    }, {
        "type": "ACG",
        "name": "acfun",
        "url": "http://www.acfun.tv/"
    }, {
        "type": "ACG",
        "name": "TGbus",
        "url": "http://games.tgbus.com/pspcn/"
    }, {
        "type": "ACG",
        "name": "thwiki",
        "url": "http://www.thwiki.cc/"
    }, {
        "type": "SNS",
        "name": "weibo",
        "url": "http://weibo.com/"
    }, {
        "type": "SNS",
        "name": "zhihu",
        "url": "https://www.zhihu.com/"
    }, {
        "type": "SNS",
        "name": "douban",
        "url": "https://www.douban.com/"
    }, {
        "type": "SNS",
        "name": "twitter",
        "url": "https://twitter.com/"
    }, {
        "type": "SNS",
        "name": "facebook",
        "url": "https://www.facebook.com/"
    }, {
        "type": "techonology",
        "name": "github",
        "url": "https://github.com/love999262"
    }, {
        "type": "others",
        "name": "gmail",
        "url": "https://mail.google.com/mail/"
    }, {
        "type": "techonology",
        "name": "stackoverflow",
        "url": "http://stackoverflow.com/"
    }, {
        "type": "shopping",
        "name": "taobao",
        "url": "https://www.taobao.com/"
    }, {
        "type": "shopping",
        "name": "jd",
        "url": "http://www.jd.com/"
    }, {
        "type": "shopping",
        "name": "amazon",
        "url": "http://www.amazon.cn/"
    }, {
        "type": "shopping",
        "name": "smzdm",
        "url": "http://www.smzdm.com/"
    }, {
        "type": "shopping",
        "name": "bmall",
        "url": "http://bmall.bilibili.com/#!/"
    }, {

        "type": "techonology",
        "name": "w3schools",
        "url": "http://www.w3schools.com/"
    }, {

        "type": "others",
        "name": "alexa",
        "url": "http://www.alexa.com/"
    }, {


        "type": "techonology",
        "name": "$.api",
        "url": "http://api.jquery.com/"
    }, {

        "type": "techonology",
        "name": "caniuse",
        "url": "http://caniuse.com/"
    }, {

        "type": "others",
        "name": "flaticon",
        "url": "http://www.flaticon.com/"
    }, {

        "type": "ACG",
        "name": "llss",
        "url": "https://www.hacg.li/"
    }, {

        "type": "others",
        "name": "jsfiddle",
        "url": "https://jsfiddle.net/"
    }, {


        "type": "others",
        "name": "extensionsAPI",
        "url": "https://developer.chrome.com/extensions/extension"
    }],
    TPL: `
        <div class="bg-img"></div>
        <div class="wrap">
            <div id="search" role="search">
                <div class="btn-group">
                    <button id="down" type="button" class="btn btn-info">google</button>
                    <button type="button" id="dropdown-select" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="caret"></span>
                        <span class="sr-only"></span>
                    </button>
                    <ul class="dropdown-menu">
                    </ul>
                </div>
                <div class="form-group">
                    <input id="input" type="text" class="form-control" placeholder="开启新世界的大门吧｡:.ﾟヽ(*\´∀\`)ﾉﾟ.:｡">
                </div>
                <button id="btn" type="button" class="btn btn-primary"><span class="glyphicon glyphicon-search"></span></button>
            </div>
            <div class="table-wrap">
                <table id="table" class="table table-striped table-bordered table-hover">
                    <thead class="thead">
                        <tr>
                        </tr>
                    </thead>
                    <tbody class="tbody">
                        <tr class="ACG">
                            <th>ACG</th>
                        </tr>
                        <tr class="SNS">
                            <th>SNS</th>
                        </tr>
                        <tr class="techonology">
                            <th>techonology</th>
                        </tr>
                        <tr class="shopping">
                            <th>shopping</th>
                        </tr>
                        <tr class="others">
                            <th>others</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <audio id="audio" src=""></audio>
        <div id="pannel" style="display:none;">
            <ul>
                <li><a target="_blank" href="https://github.com/love999262/index">About</a></li>
                <li><a target="_blank" href="http://weibo.com/2724118583/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1">weibo</a></li>
                <li><a target="_blank" href="https://github.com/love999262">github</a></li>
                <li><a target="_blank" href="https://twitter.com/sqyl8LGNkxO21I1">twitter</a></li>
            </ul>
        </div>
    `,
    appendSearchEngle: function() {
        for (var i = 0; i < this.infoList.length; i++) {
            $(".dropdown-menu").append('<li class="searchEngle"><a>' + this.infoList[i].name + '</a></li><li role="separator" class="divider"></li>');
        }
    },
    changeSearchEngle: function() {
        $(".searchEngle").click(function() {
            $("#down").html($(this).children().html());
        });
    },
    search: function() {

        var that = this;
        $("#btn").click(function() {
            for (var i = 0; i < that.infoList.length; i++) {
                if (that.infoList[i].name == $("#down").html()) {
                    window.open(that.infoList[i].url + $("#input").val());

                }
            }
        });
    },
    hrefSearchEngle: function() {

        var that = this;
        $("#down").click(function() {
            for (var i = 0; i < that.infoList.length; i++) {
                if ($("#down").html() == that.infoList[i].name) {
                    window.open(that.infoList[i].href);

                }
            }
        });
    },
    appendNewSite: function(name) {
        for (var i = 0; i < this.tableList.length; i++) {
            if (this.tableList[i].type == name) {
                $("." + name).append('<td><a target="_blank" href="' + this.tableList[i].url + '">' + this.tableList[i].name + '</a></td>');
            }
        }
    },
    inputFocus: function() {
        $("#input").focus();
    },
    audioPlay: function() {
        if ($("#input").is(":focus") === false) {
            var audio = document.getElementById("audio");
            var url = "http://112.74.114.37:9090/yanjiuyuan/yanjiuyuan/images/bg-music0.mp3";
            if (audio.src !== url && audio.src !== "") {
                audio.setAttribute("src", url);
            }
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    },
    snowFall: function() {
        $(".bg-img").snowfall({ image: "images/flake.png", minSize: 10, maxSize: 32 });
    },
    eventHandle: function(keyCode) {
        switch (keyCode) {
            case 13:
                if ($("#input").is(":focus")) {
                    for (var i = 0; i < this.infoList.length; i++) {
                        if (this.infoList[i].name == $("#down").html()) {
                            window.open(this.infoList[i].url + $("#input").val());
                        }
                    }
                }
                break;
            case 192:
                if ($("#input").is(":focus") === false) {
                    this.setBackGround();
                }
                break;
            case 80:
                this.audioPlay();
                break;
        }
    },
    keyboardListener: function() {
        document.onkeydown = function(e) {
            e = e || event;
            var keyCode = e.keyCode;
            console.log(e.key + ":" + e.keyCode);
            indexCreater.eventHandle(keyCode);
        };
    },
    setBackGround: function() {
        var bg = Math.round(Math.random() * 436);
        $(".bg-img").css("background-image", "url(images/bg" + bg + ".jpg)");
        console.log(bg + ".jpg");
    },
};

$(function() {
    indexCreater.initialize();
});
