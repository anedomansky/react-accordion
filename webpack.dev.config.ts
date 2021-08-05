import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.config';

const devConfig: webpack.Configuration = {
    devtool: 'eval-source-map',
};

export default merge(baseConfig, devConfig);
