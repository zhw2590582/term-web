var term = new Term({
    container: '#term',
    pixelRatio: 2,
    title: `Term Web ${Term.version}`,
    fontFamily: 'monospace',
    prefix: 'root@linux: ~ <d color="#00f501">$</d> ',
    welcome: '🎉 Hello, welcome to use <d color="yellow">Term Web</d>',
    loading: () => '<d color="yellow">Please wait for a moment...</d>',
    notFound: (val) => `🐶 : <d color='red'>${val}</d> : command not found`,
    actions: [
        {
            // Automatic input
            input: 'what is this ?',
            output: '<d color="yellow">This is a simple Terminal UI that run on the web</d>',
        },
        {
            // Exact match
            input: 'hi',
            output: "😄 <d color='yellow'>hellow</d>",
        },
        {
            // Regular match
            input: /^bye/i,
            output(input, args) {
                return JSON.stringify({
                    input: `<d color='#00BCD4'>${input}</d>`,
                    args: args,
                });
            },
        },
        {
            // Return a promise
            input: /^test/i,
            output(input) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(input.repeat(10));
                    }, 1000);
                });
            },
        },
        {
            // Return a http request
            input: /^http$/i,
            output() {
                return fetch('https://jsonplaceholder.typicode.com/todos/1')
                    .then((data) => data.json())
                    .then(JSON.stringify);
            },
        },
        {
            // Return your ip
            input: /^ip$/i,
            output() {
                return fetch('https://ipinfo.io/json')
                    .then((data) => data.json())
                    .then(JSON.stringify);
            },
        },
        {
            // Return colorful text
            input: /^color$/i,
            output() {
                const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                return fetch('https://data.iana.org/TLD/tlds-alpha-by-domain.txt')
                    .then((data) => data.text())
                    .then((text) => {
                        return text
                            .split(/\r?\n/)
                            .map((item) => {
                                const color = randomColor();
                                const random = Math.random() > 0.5;
                                return `<d color="${random ? color : '#fff'}" background="${
                                    random ? '' : color
                                }">${item}</d>`;
                            })
                            .join(' ');
                    });
            },
        },
        {
            // Clear all log
            input: /^clear$/i,
            output() {
                this.clear();
                return '<d color="#27C93F">Cleared successfully</d>';
            },
        },
        {
            // Ask a question
            input: /^ask$/i,
            output() {
                this.ask(`<d color='#27C93F'>> How are you ? </d>`).then((answer) => {
                    this.output(`<d color='yellow'>${answer}</d>`, true).input('');
                });
            },
        },
        {
            // Radio
            input: /^radio$/i,
            output() {
                this.radio([
                    {
                        key: 0,
                        text: 'hi',
                    },
                    {
                        key: 1,
                        text: 'bye',
                    },
                ]).then((key) => {
                    this.output(`<d color='yellow'>${key}</d>`, true).input('');
                });
            },
        },
        {
            // Checkbox
            input: /^checkbox$/i,
            output() {
                this.checkbox([
                    {
                        key: 0,
                        text: 'hi',
                    },
                    {
                        key: 1,
                        text: 'bye',
                    },
                ]).then((key) => {
                    this.output(`<d color='yellow'>${key}</d>`, true).input('');
                });
            },
        },
    ],
});

term.type('what is this ?');
