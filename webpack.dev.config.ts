import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import baseConfig from './webpack.base.config';

const devConfig: webpack.Configuration = {
    entry: {
        index: './example/index.tsx',
    },
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            title: 'react-accordion',
            template: path.resolve(__dirname, './example/index.html'),
        }),
    ],
};

export default merge(baseConfig, devConfig);
