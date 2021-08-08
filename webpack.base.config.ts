import webpack from 'webpack';
import path from 'path';

const baseConfig: webpack.Configuration = {
    entry: {
        index: './src/index.tsx',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /.s?css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                },
            },
        ],
    },
    plugins: [
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    externals: ['react', 'react-dom'],
};

export default baseConfig;
