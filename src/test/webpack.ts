import { flavor } from "../webpack";

console.log(flavor({
    name: "test",
    use: ["css", "vue"]
}));
