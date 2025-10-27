import { Configuration } from "webpack";
import { VueLoaderPlugin } from "vue-loader";

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