import { Configuration } from "webpack";
import "webpack-dev-server";
import { VueLoaderPlugin } from "vue-loader";
import path from "path";
import { FlavorType } from ".";

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
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        setupExitSignals: false,
        client: {
            logging: "none"
        }
    }
};