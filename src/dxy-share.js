if (typeof require !== 'undefined') {
    var jQuery = require('jquery');
}

(function ($) {
    function dxy_share() {

        var isMobile = /mobile|dxyapp/i.test(window.navigator.userAgent);

        function synIMG(url, fun, wrapDom) {
            var img = new Image();
            img.src = url;
            img.style.display = 'none';
            img.onload = function () {
                //console.log('onload:',this);
            }
            img.onerror = function () {
                //console.log('onerror:',this);
                fun(img);
            }

            if (!wrapDom) {
                wrapDom = document.getElementsByTagName('body')[0];
            }
            wrapDom.appendChild(img);
        }

        var sName_obj = {
            sina: '新浪微博',
            tt: '腾讯微博',
            douban: '豆瓣',
            renren: '人人网',
            qzone: 'QQ空间',
            idxy: '丁香客',
            kaixin: '开心网',
            weixin: '微信',
            favorite: '收藏夹'
        };
        var sApi = {
            sina: 'http://v.t.sina.com.cn/share/share.php?appkey=1611508056&content=' + (document.charset || "gbk") + '&',
            tt: 'http://v.t.qq.com/share/share.php?',
            douban: 'http://www.douban.com/share/service/?',
            // douban: 'http://www.douban.com/recommend/?',
            renren: 'http://share.renren.com/share/buttonshare?',
            qzone: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?',
            idxy: '',
            kaixin: 'http://www.kaixin001.com/repaste/share.php?',
            weixin: 'http://api.dxy.cn/qr-code/?'
        };

        var share_html = '',
            share_lst_html = '';


        this.show = function (op) {
            var id = op['id'],
                arr = op['lst'],
                style = op['style'],
                shareUrl = op['url'],
                _fnAddTo = op.fnAddTo || {},
                container = $('#' + id);
            //$(id).style.visibility="hidden";

            //console.log(id,arr);

            switch (style) {
                case 1:
                    if (arr.length > 0) {
                        for (var i = 0; i < arr.length; i++) {
                            share_lst_html += "<div class='plg_share_el_nav1_it'><i class='plg_share_el_nav1_ico plg_ico_" + arr[i] + "'>&nbsp;</i><a href='javascript:void(0);' title='" + sName_obj[arr[i]] + "' name='" + arr[i] + "'>" + sName_obj[arr[i]] + "</a></div>";
                        }
                    }

                    share_html = '<div class="plg_share_wrap plg_share_style' + style + '"><a href="javascript:void(0)" class="share_btn" id="j_dxy_sharebtn_' + id + '">分享到</a><dl class="plg_share_el_box2 xbox1" id="j_dxy_sharebox_' + id + '"><dt class="plg_share_el_box2_hd"><b class="pl10 mr10">分享到</b></dt><dd class="plg_share_el_box2_ct"><div class="plg_share_el_nav1" id="j_dxyshare_lst_' + id + '">' + share_lst_html + '</div></dd></dl></div>';
                    //console.log(share_html);

                    container.html(share_html);
                    toggle();
                    break;

                case 2:
                    if (arr.length > 0) {
                        for (var i = 0; i < arr.length; i++) {
                            share_lst_html += "<div class='plg_share_el_nav1_it'><i class='plg_share_el_nav1_ico plg_ico_" + arr[i] + "'>&nbsp;</i><a href='javascript:void(0);' title='" + sName_obj[arr[i]] + "' name='" + arr[i] + "'>" + sName_obj[arr[i]] + "</a></div>";
                        }
                    }

                    share_html = '<div class="plg_share_wrap plg_share_style' + style + '"><a href="javascript:void(0)" class="share_btn" id="j_dxy_sharebtn_' + id + '">分享到</a><dl class="plg_share_el_box2 xbox1" id="j_dxy_sharebox_' + id + '"><dt class="plg_share_el_box2_hd"><b class="pl10 mr10">分享到</b></dt><dd class="plg_share_el_box2_ct"><div class="plg_share_el_nav1" id="j_dxyshare_lst_' + id + '">' + share_lst_html + '</div></dd></dl></div>';
                    //console.log(share_html);

                    container.html(share_html);
                    toggle();
                    break;

                case 3:
                    if (arr.length > 0) {
                        for (var i = 0; i < arr.length; i++) {
                            share_lst_html += "<div class='plg_share_el_nav1_ico_wrap'><a href='javascript:void(0);' name='" + arr[i] + "' class='plg_share_el_nav1_ico plg_ico_" + arr[i] + "' title='" + sName_obj[arr[i]] + "'>&nbsp;</a></div>";
                        }
                    }

                    share_html = '<div class="plg_share_wrap plg_share_style' + style + '"><span class="share_btn">分享到：</span><div class="plg_share_el_box2_ct" id="j_dxyshare_lst_' + id + '">' + share_lst_html + '</div></div>';
                    //console.log(share_html);

                    container.html(share_html);

                    break;

                case 4:
                    if (arr.length > 0) {
                        for (var i = 0; i < arr.length; i++) {
                            share_lst_html += "<div class='plg_share_el_nav1_it'><a href='javascript:void(0);' name='" + arr[i] + "' class='plg_share_el_nav1_ico plg_ico_" + arr[i] + "' title='" + sName_obj[arr[i]] + "'>" + sName_obj[arr[i]] + "</a></div>";
                        }
                    }

                    share_html = '<div class="plg_share_wrap plg_share_style' + style + '"><dl class="plg_share_el_box2 xbox1" id="j_dxy_sharebox_' + id + '"><dd class="plg_share_el_box2_ct"><div class="plg_share_el_nav1" id="j_dxyshare_lst_' + id + '"><div class="plg_share_el_nav1_it dxy_sharebox_title">分享</div>' + share_lst_html + '</div></dd></dl></div>';
                    //console.log(share_html);
                    container.html(share_html);

                    break;


                case 5:
                    if (arr.length > 0) {
                        for (var i = 0; i < arr.length; i++) {
                            share_lst_html += "<div class='plg_share_el_nav1_it'><a href='javascript:void(0);' name='" + arr[i] + "' title='" + sName_obj[arr[i]] + "' class='plg_share_el_nav1_ico plg_ico_" + arr[i] + "'>" + sName_obj[arr[i]] + "</a></div>";
                        }
                    }

                    share_html = '<dl id="j_dxy_sharebox_' + id + '" class="plg_share_el_box2 xbox1" style="margin-top:' + parseInt(op.top) + 'px;"><dd class="plg_share_el_box2_ct"><div id="j_dxyshare_lst_' + id + '" class="plg_share_el_nav1">' + share_lst_html + '</div></dd></dl>';

                    var follow_share = document.createElement('div');
                    follow_share.className = 'plg_share_wrap plg_share_style' + style;
                    follow_share.innerHTML = share_html;
                    document.body.appendChild(follow_share);

                    break;

                case 6:
                    if (arr.length > 0) {
                        for (var i = 0; i < arr.length; i++) {
                            share_lst_html += "<div class='plg_share_el_nav1_it'><i class='plg_share_el_nav1_ico plg_ico_" + arr[i] + "'>&nbsp;</i><a href='javascript:void(0);' title='" + sName_obj[arr[i]] + "' name='" + arr[i] + "'>" + sName_obj[arr[i]] + "</a></div>";
                        }
                    }

                    share_html = '<div class="plg_share_wrap plg_share_style' + style + '"><dl class="plg_share_el_box2 xbox1"><dt class="plg_share_el_box2_hd"><b class="pl10 mr10">分享到</b></dt><dd class="plg_share_el_box2_ct"><div class="plg_share_el_nav1" id="j_dxyshare_lst_' + id + '">' + share_lst_html + '</div></dd></dl></div>';
                    //console.log(share_html);

                    container.html(share_html);
                    toggle();

                    break;

                case 'm1':
                    if (arr.length > 0) {
                        for (var i = 0; i < arr.length; i++) {
                            share_lst_html += "<div class='plg_share_el_nav1_it'><a href='javascript:void(0);' name='" + arr[i] + "' class='plg_share_el_nav1_ico plg_ico_" + arr[i] + "' title='" + sName_obj[arr[i]] + "'>" + sName_obj[arr[i]] + "</a></div>";
                        }
                    }

                    share_html = '<div class="plg_share_wrap plg_share_style_' + style + '"><dl class="plg_share_el_box2 xbox1"><dt><div class="plg_share_el_nav1_it dxy_sharebox_title" id="j_dxy_sharebtn_' + id + '">分享</div></dt><dd class="plg_share_el_box2_ct" id="j_dxy_sharebox_' + id + '"><div class="plg_share_el_nav1" id="j_dxyshare_lst_' + id + '">' + share_lst_html + '</div></dd></dl></div>';
                    container.html(share_html);
                    toggle2();
                    break;

            }


            //tagName='a' event
            var j_dxyshare_a_arr = document.getElementById('j_dxyshare_lst_' + id).getElementsByTagName('a');

            for (var i = 0; i < j_dxyshare_a_arr.length; i++) {

                function addBtnEvent(e) {
                    var _url = shareUrl || window.location.href;
                    _url = encodeURI(_url);

                    if (this.name == 'favorite') {

                        if (document.all) {
                            window.external.addFavorite(_url, document.title);
                        } else if (window.sidebar && window.sidebar.addPanel) {
                            window.sidebar.addPanel(document.title, _url, '');
                        } else {
                            alert('对不起，暂时不支持您的浏览器');
                        }

                    } else if (this.name == 'weixin') {
                        var weixin_node = this.parentNode,
                            weixin_api = sApi[this.name] + 'url=' + _url + '&size=5&margin=1&format=png';
                        console.log(weixin_node);

                        var weixin = $('.weixin', weixin_node)[0];

                        if (weixin) {
                            weixin.style.display = 'block';
                        } else {
                            // PC 端的微信分享
                            var temp, close, triangle;

                            temp = '<div class="w_center">' +
                                '<div id="w_qr" class="w_qr" width="90" height="90"></div>' +
                                '<p class="w_cont">使用微信“扫一扫”分享到朋友圈。</p>' +
                                '</div>' +
                                '<div id="triangle" class="w_bottom"></div>' +
                                '<div id="w_close" class="w_close"></div>';
                            weixin = document.createElement('div');
                            weixin.id = 'w_xin';
                            weixin.className = 'weixin';

                            weixin.innerHTML = temp;

                            weixin_node.appendChild(weixin);
                            triangle = $('.w_bottom', weixin_node)[0];

                            console.log(e);
                            //微信box定位调整
                            if (style == 1) {
                                weixin.style.top = '-83px';
                                weixin.style.left = '175px';
                                triangle.className = 'w_left';
                            } else if (style == 2) {
                                weixin.style.top = '-83px';
                                weixin.style.left = '120px';
                                triangle.className = 'w_left';
                            } else if (style == 3) {
                                weixin.style.left = '-12px';
                            } else if (style == 5) {
                                weixin.style.top = '-83px';
                                weixin.style.left = '-283px';
                                triangle.className = 'w_right';
                                weixin.style.zIndex = 3;
                            }

                            //重新绑定事件
                            var w_a = weixin.parentNode.getElementsByTagName('a');
                            for (var i = 0; i < w_a.length; i++) {
                                w_a[i].onclick = addBtnEvent;
                            }

                            close = $('.w_close', weixin_node)[0];
                            close.onclick = function() {
                                weixin.style.display = 'none';
                            };

                            $('.w_qr', weixin_node)[0].innerHTML = '<img src="' + weixin_api + '" width="90" height="90">';
                        }

                    } else if (this.name === 'idxy') {

                        var _txt = ((op.share_txt) ? op.share_txt : document.title) + ' ' + _url;


                        shareFeed(_txt);

                    } else {
                        var share_txt = (op.share_txt) ? op.share_txt : document.title + ((op.addTo) ? op.addTo : '');
                        var api = '';

                        if (this.name === 'douban') {
                            api = sApi[this.name] + 'name=' + encodeURIComponent(share_txt) + '&href=' + encodeURIComponent(_url) + '&text=%20';
                            //console.log(api);
                        } else {
                            api = sApi[this.name] + 'title=' + encodeURIComponent(share_txt) + '&url=' + encodeURIComponent(_url) + '&summary=%20';
                        }
                        window.open(api, '_blank', 'toolbar=0,status=0,resizable=1,width=750,height=430,' + 'left=' + (screen.width - 750) / 2 + ',top=' + (screen.height - 430) / 2);
                    }

                    if (typeof _fnAddTo[this.name] == "function") {
                        _fnAddTo[this.name]();
                    }
                    //console.log();

                }

                j_dxyshare_a_arr[i].onclick = addBtnEvent;
            }

            // shareto idxy
            function shareFeed(body) {

                //1.验证是否登录
                synIMG('https://auth.dxy.cn/login?service=http://i.dxy.cn/', function () {

                    var url = 'http://i.dxy.cn' + '/snsapi/share/feed?dataType=jsonp&callback=cb';
                    $.ajax({

                        type: 'GET',
                        url: url,
                        async: false,
                        jsonpCallback: 'cb',
                        contentType: "application/json",
                        dataType: 'jsonp',
                        data: {
                            'body': body
                        },
                        success: function (data) {
                            if (data.status == 'ok') {
                                alert('分享成功');
                            } else {
                                if (data.message == '100') {
                                    alert('请先登录');
                                    if (op.other && op.other.loginIdxy) {
                                        window.open('https://auth.dxy.cn/login?service=http://i.dxy.cn/');
                                    }
                                } else {
                                    alert('系统异常');
                                }
                            }
                        }
                    });

                })

            }

            //add event
            function toggle() {
                var share_btn = $('#j_dxy_sharebtn_' + id),
                    share_box = $('#j_dxy_sharebox_' + id),
                    tid;
                if (share_btn.length && share_box.length) {

                    var show_share_box = function () {
                        if (tid) {
                            clearTimeout(tid);
                        }
                        share_box.css('display', 'block');
                    };

                    var hide_share_box = function (timeout) {
                        if (timeout) {
                            tid = setTimeout(function () {
                                share_box.css('display', 'none');
                            }, 1000);
                        }
                        else {
                            share_box.css('display', 'none');
                        }
                    };

                    if (isMobile) {
                        share_btn.click(function (event) {
                            show_share_box();

                            document.body.addEventListener('click', function (event) {
                                if (!event.target.parentNode.classList.contains('plg_share_el_nav1_it')) {
                                    hide_share_box(false);
                                }
                            }, true);
                        });
                    }
                    else {
                        share_btn.mouseenter(function () {
                            show_share_box();
                        });

                        share_btn.mouseout(function () {
                            hide_share_box(true);
                        });

                        share_box.mouseover(function () {
                            show_share_box();
                        });

                        share_box.mouseout(function () {
                            hide_share_box(true);
                        });
                    }
                }
            }

            function toggle2() {
                var share_btn = $('#j_dxy_sharebtn_' + id),
                    share_box = $('#j_dxy_sharebox_' + id);
                if (share_btn.length && share_box.length) {
                    share_btn.click(function () {
                        share_box.css('display', share_box.css('display') === 'block' ? 'none' : 'block');
                    });
                }
            }


            //show
            /*setTimeout(function(){
             $(id).style.visibility="visible";
             },1000)*/

        }

        this.share = function (id) {
            //console.log(id);
        }
    }

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = dxy_share;
    }
    else {
        window.dxy_share = dxy_share;
    }
})(jQuery);