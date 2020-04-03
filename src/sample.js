export default [
    {
        cmd: '',
        action: '1',
    },
    {
        cmd: '',
        action() {
            return '2';
        },
    },
    {
        cmd: '',
        action() {
            return Promise.resolve('3');
        },
    },
];
