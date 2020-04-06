export default [
    {
        input: 'test',
        output: 'test1',
    },
    {
        input: 'test2',
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
];
