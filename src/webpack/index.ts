import { Configuration } from "webpack";
import * as library from "./library";
import merge from "webpack-merge";
import Webpackbar from "webpackbar";
import path from "path";

export type FlavorType = Exclude<keyof typeof library, "default">;
export interface FlavorConfig {
    name: string;
    use?: FlavorType[];
    options?: Record<string, any>;
    expand?: Configuration;
}

export function baseConfig(name: string, entry: Configuration["entry"]): Configuration {
    return {
        entry,
        output: {
            path: path.resolve("dist"),
            filename: "app.js",
            clean: true
        },
        plugins: [
            new Webpackbar({
                name,
                color: "green"
            })
        ],
        stats: "errors-warnings"
    }
}
export function flavor(entry: Configuration["entry"], config: FlavorConfig): Configuration {
    let result: Configuration = baseConfig(config.name, entry);
    config.use?.forEach((type) => {
        result = merge(result, library[type]);
    });
    return merge(result, config.expand ?? {});
}