var mirror = CodeMirror(document.querySelector('.code'), {
    lineNumbers: true,
    mode: 'javascript',
    readOnly: true,
    matchBrackets: true,
    styleActiveLine: true,
    theme: 'dracula',
    value: '',
});

var url = '/assets/js/sample.js';
if (window.location.href.includes('github.io')) {
    url = '/term-web/assets/js/sample.js';
}

fetch(url)
    .then(function (response) {
        return response.text();
    })
    .then(function (text) {
        mirror.setValue(text);
        eval(text);
    });

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
        Term.instances[0].color = color.toHEXA().toString();
        $color.hide();
    })
    .on('change', function (color) {
        Term.instances[0].color = color.toHEXA().toString();
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
        Term.instances[0].background = color.toHEXA().toString();
        $background.hide();
    })
    .on('change', function (color) {
        Term.instances[0].background = color.toHEXA().toString();
    });

var lastIndex = -1;
function randomIndex() {
    var index = parseInt(Math.random() * 19 + 1, 10);
    if (index === lastIndex) return randomIndex();
    return index;
}

var $watermark = document.querySelector('.watermark');
$watermark.addEventListener('click', function () {
    Term.instances[0].watermark = `/assets/img/watermark${randomIndex()}.png`;
});

var $pip = document.querySelector('.pip');
var $video = document.querySelector('.video');
$pip.addEventListener('click', function () {
    var canvas = Term.instances[0].template.$canvas;
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
