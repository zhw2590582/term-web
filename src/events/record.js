export default function (term, events) {
    const { recordType, recorder } = term.options;
    const { $recorder } = term.template;

    events.proxy($recorder, 'click', () => {
        if (term[recordType].recording) {
            term[recordType].end();
        } else {
            term[recordType].start();
        }
    });

    term.on('start', () => {
        if (recorder) {
            $recorder.classList.remove('creating');
            $recorder.classList.add('recording');
        }
    });

    term.on('creating', () => {
        if (recorder) {
            $recorder.classList.remove('recording');
            $recorder.classList.add('creating');
        }
    });

    term.on('end', () => {
        if (recorder) {
            $recorder.classList.remove('recording');
            $recorder.classList.remove('creating');
        }
    });
}
