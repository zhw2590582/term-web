export default function (term, events) {
    const { recorder } = term.options;
    if (!recorder) return;
    const { $recorder } = term.template;

    events.proxy($recorder, 'click', () => {
        if (term.recorder.recording) {
            term.recorder.end();
        } else {
            term.recorder.start();
        }
    });

    term.on('start', () => {
        $recorder.classList.remove('creating');
        $recorder.classList.add('recording');
    });

    term.on('creating', () => {
        $recorder.classList.remove('recording');
        $recorder.classList.add('creating');
    });

    term.on('end', () => {
        $recorder.classList.remove('recording');
        $recorder.classList.remove('creating');
    });
}
