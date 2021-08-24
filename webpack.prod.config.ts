import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.config';

const prodConfig: webpack.Configuration = {
    entry: {
        index: './src/index.ts',
    },
    mode: 'production',
    devtool: 'source-map',
    externals: ['react'],
};

export default merge(baseConfig, prodConfig);
