export default [
    {
        input: 'test',
        output: 'test1',
    },
    {
        input: 'test2',
        output(input) {
            return input.repeat(2);
        },
    },
    {
        input: 'test3',
        output(input) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(input.repeat(2));
                }, 1000);
            });
        },
    },
];
