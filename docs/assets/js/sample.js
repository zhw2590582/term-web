var term = new Term({
    container: '#term',
    pixelRatio: 2,
    title: 'Term Web',
    fontFamily: 'monospace',
    prefix: 'root@linux: ~ <d color="#00f501">$</d> ',
    welcome: '🎉 Hello, welcome to use <d color="yellow">Term Web</d>',
    loading: () => '<d color="yellow">Please wait for a moment...</d>',
    notFound: (val) => `🐶 : <d color='red'>${val}</d> : command not found`,
    actions: [
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
                            .map((item) => `<d color="${randomColor()}">${item}</d>`)
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
    ],
});
