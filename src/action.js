export default [
    {
        input: '',
        output: 'test',
    },
    {
        input: '',
        output(input) {
            return input.repeat(2);
        },
    },
    {
        input: '',
        output(input) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(input.repeat(2));
                }, 3000);
            });
        },
    },
];
