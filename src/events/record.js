export default function (term, events) {
    const { recordType, recorder } = term.options;
    const { $recorderBtn, $recorder, $recorderSize, $recorderDuration } = term.template;

    events.proxy($recorderBtn, 'click', () => {
        if (term[recordType].recording) {
            term[recordType].end();
        } else {
            term[recordType].start();
        }
    });

    term.on('start', () => {
        if (recorder) {
            $recorder.classList.add('recording');
        }
    });

    term.on('recording', ({ size, duration }) => {
        if (recorder) {
            $recorderSize.innerText = `${Math.ceil(size / 1024 / 1024) || 0}mb`;
            $recorderDuration.innerText = `${duration || 0}s`;
        }
    });

    term.on('creating', () => {
        if (recorder) {
            $recorderSize.innerText = '';
            $recorderDuration.innerText = `${recordType} is creating...`;
        }
    });

    term.on('end', () => {
        if (recorder) {
            $recorder.classList.remove('recording');
        }
    });
}
