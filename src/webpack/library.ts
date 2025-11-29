import { Configuration } from "webpack";
import "webpack-dev-server";
import { VueLoaderPlugin } from "vue-loader";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const ts: Configuration = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        appendTsSuffixTo: [/\.vue$/],
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
};
export const vue: Configuration = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
};
export const css: Configuration = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                ],
            },
        ],
    },
};
export const wds: Configuration = {
    devServer: {
        static: {
            directory: path.resolve("public"),
        },
        compress: true,
        setupExitSignals: false,
        client: {
            logging: "none"
        }
    }
};
export const dontClean: Configuration = {
    output: {
        clean: false
    }
};
export const html: Configuration = {
    plugins: [
        new HtmlWebpackPlugin({
            template: "./templates/index.html",
            filename: "index.html"
        }),
    ],
};