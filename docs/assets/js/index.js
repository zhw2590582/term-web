var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
    window.location.href = './mobile.html';
}

function init() {
    var pickrOpt = {
        theme: 'classic',
        swatches: [
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)',
        ],
        components: {
            preview: true,
            opacity: false,
            hue: true,
            interaction: {
                hex: true,
                rgba: true,
                input: true,
                save: true,
            },
        },
    };

    var $color = Pickr.create(
        Object.assign(
            {
                el: '.color',
                default: '#b0b2b6',
            },
            pickrOpt,
        ),
    );

    $color
        .on('save', function (color) {
            var term = Term.instances[0];
            term.color = color.toHEXA().toString();
            $color.hide();
        })
        .on('change', function (color) {
            var term = Term.instances[0];
            term.color = color.toHEXA().toString();
        });

    var $background = Pickr.create(
        Object.assign(
            {
                el: '.background',
                default: 'rgb(42, 39, 52)',
            },
            pickrOpt,
        ),
    );

    $background
        .on('save', function (color) {
            var term = Term.instances[0];
            term.background = color.toHEXA().toString();
            $background.hide();
        })
        .on('change', function (color) {
            var term = Term.instances[0];
            term.background = color.toHEXA().toString();
        });

    var lastIndex = -1;
    function randomIndex() {
        var index = parseInt(Math.random() * 19 + 1, 10);
        if (index === lastIndex) return randomIndex();
        return index;
    }

    var $watermark = document.querySelector('.watermark');
    $watermark.addEventListener('click', function () {
        var term = Term.instances[0];
        term.watermark = `/assets/img/watermark${randomIndex()}.png`;
    });

    var $pip = document.querySelector('.pip');
    var $video = document.querySelector('.video');
    $pip.addEventListener('click', function () {
        var term = Term.instances[0];
        var canvas = term.template.$canvas;
        var steam = canvas.captureStream(30);
        $video.srcObject = steam;
        setTimeout(function () {
            $video.play();
            if (document.pictureInPictureEnabled) {
                $video.requestPictureInPicture();
            } else if ($video.webkitSupportsPresentationMode) {
                $video.webkitSetPresentationMode('picture-in-picture');
            } else {
                $video.srcObject = null;
            }
        }, 1000);
    });

    var $debug = document.querySelector('.debug');
    $debug.addEventListener('click', function () {
        var term = Term.instances[0];
        term.debug = !term.debug;
    });
}

var mirror = CodeMirror(document.querySelector('.code'), {
    lineNumbers: true,
    mode: 'javascript',
    readOnly: true,
    matchBrackets: true,
    styleActiveLine: true,
    theme: 'dracula',
    value: '',
});

var options = {};
fetch('/assets/js/sample.js')
    .then(function (response) {
        return response.text();
    })
    .then(function (text) {
        mirror.setValue(text);
        eval(text);
        options = Term.instances[0].options;
        init();
    });

var $fontFamily = document.querySelector('.fontFamily');
$fontFamily.addEventListener('change', function () {
    if (!$fontFamily.value) {
        Term.instances[0].destroy();
        var term = new Term(
            Object.assign({}, options, {
                fontFamily: 'monospace',
                fontSize: 13,
            }),
        );
    } else {
        Term.font($fontFamily.value.replace('.ttf', ''), '/assets/font/' + $fontFamily.value).then((font) => {
            Term.instances[0].destroy();
            var fontSize = Number($fontFamily.selectedOptions[0].getAttribute('size'));
            var term = new Term(
                Object.assign({}, options, {
                    fontFamily: font.family,
                    fontSize: fontSize,
                }),
            );
        });
    }
});
