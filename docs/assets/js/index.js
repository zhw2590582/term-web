var term = new Term({
    container: '#term',
    fontFamily: 'monospace',
    actions: [
        {
            input: 'test',
            output: 'test1',
        },
        {
            input: /test2/gi,
            output(input) {
                return input.repeat(10);
            },
        },
        {
            input: 'test3',
            output(input) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(input);
                    }, 1000);
                });
            },
        },
    ],
});
