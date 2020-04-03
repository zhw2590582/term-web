import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import { eslint } from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import { version, homepage } from './package.json';

const isProd = process.env.NODE_ENV === 'production';

export default {
    input: 'src/index.js',
    output: {
        name: 'Term',
        file: isProd ? 'dist/term-ui.js' : 'docs/uncompiled/term-ui.js',
        format: 'umd',
        sourcemap: !isProd,
    },
    plugins: [
        eslint({
            exclude: ['node_modules/**'],
        }),
        nodeResolve(),
        commonjs(),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**',
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                    },
                ],
            ],
            plugins: ['@babel/plugin-external-helpers', '@babel/plugin-transform-runtime'],
        }),
        replace({
            exclude: 'node_modules/**',
            __ENV__: JSON.stringify(process.env.NODE_ENV || 'development'),
            __VERSION__: version,
        }),
        isProd &&
            uglify({
                output: {
                    preamble:
                        '/*!\n' +
                        ` * term-ui.js v${version}\n` +
                        ` * Github: ${homepage}\n` +
                        ` * (c) 2017-${new Date().getFullYear()} Harvey Zack\n` +
                        ' * Released under the MIT License.\n' +
                        ' */\n',
                },
            }),
    ],
};
