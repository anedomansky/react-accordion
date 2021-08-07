import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.config';

const prodConfig: webpack.Configuration = {
    mode: 'production',
    devtool: 'source-map',
};

export default merge(baseConfig, prodConfig);
