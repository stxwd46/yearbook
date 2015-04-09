var $page1 = $('#page1');
var $page2 = $('#page2');
var $page3 = $('#page3');
var $page4 = $('#page4');
var $page5 = $('#page5');
var $page6 = $('#page6');

var page2Array = ['你', '曾', '问', '过', '我', ',', '前', '端', '是', '什', '么', '？', '如', '果', '单', '纯', '用', '言', '语', '去', '解', '释', ',', '也', '许', '说', '了', '你', '也', '是', '一', '头', '雾', '水', '。', '但', '这', '不', '重', '要', ',', '你', '只', '需', '要', '知', '道', ',', '作', '为', '一', '个', '前', '端', ',', '我', '可', '以', '为', '你', '做', '什', '么', '。', '接', '下', '来', '.', '.', '.'];

var init = function() {
    initEvent();
};
var initEvent = function() {
    $(document).on('keydown', function(e) {
        if (e.keyCode == 122 && $page1.css('display') == 'block') {
            $page1.fadeOut();
            $page2.fadeIn();
            page2ContentShow();
        }
    });
};

var page2ContentShow = function() {
    var index = 0;
    var len = page2Array.length;
    var textShow = setInterval(function() {
        if (index < len) {
            $page2.find('#page2-text').append(page2Array[index]);
            index++;
        } else {
            clearInterval(textShow);
            page3show();
            setTimeout(function() {
                var i;
                $page3.fadeOut();
                $page4.show();
                for (i = 1; i <= 35; i++) {
                    $page4.find('#img' + i).addClass('img' + i);
                }
                for (i = 1; i <= 24; i++) {
                    $page4.find('#tips' + i).addClass('tips' + i);
                }
                setTimeout(function() {
                    $page4.fadeOut();
                    document.getElementById('music').pause();
                    $page5.fadeIn();
                    videoPlay();
                }, 108000);
            }, 5000);
        }
    }, 200);
};

var page3show = function() {
    document.getElementById('music').play();
    $page2.fadeOut();
    $page3.fadeIn();
    $page3.find('div').animate({
            'font-size': '70px'
        }, 1500)
        .animate({
            'font-size': '50px'
        }, 1500);
};

var videoPlay = function() {
    $('#video').html('<video class="video video1" src="video/video3.mp4" autoplay="autoplay"></video>');
    setTimeout(function() {
        $('#video').html('<video class="video video1" src="video/video4.mp4" autoplay="autoplay"></video>');
        setTimeout(function() {
            $('#video').html('<video class="video video5" src="video/video5.MOV" autoplay="autoplay"></video>');
            setTimeout(function() {
                $('#video').html('<video class="video video5" src="video/video6.mp4" autoplay="autoplay"></video>');
                setTimeout(function() {
                    $page5.fadeOut();
                    $page6.fadeIn();
                }, 44000);
            }, 111000);
        }, 43000);
    }, 57000);
};

init();