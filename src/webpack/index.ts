import { Configuration } from "webpack";
import * as library from "./library";
import merge from "webpack-merge";
import Webpackbar from "webpackbar";

export type FlavorType = Exclude<keyof typeof library, "default">;
export interface FlavorConfig {
    name: string;
    use?: FlavorType[];
    options?: Record<string, any>;
    expand?: Configuration;
}

export function baseConfig(name: string): Configuration {
    return {
        plugins: [
            new Webpackbar({
                name,
                color: "green"
            })
        ],
        stats: "errors-warnings"
    }
}
export function flavor(config: FlavorConfig): Configuration {
    let result: Configuration = baseConfig(config.name);
    config.use?.forEach((type) => {
        result = merge(result, library[type]);
    });
    return merge(result, config.expand ?? {});
}