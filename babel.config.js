module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current",
                },
            },
        ],
        "@babel/preset-typescript",
        "@babel/preset-react",
        "babel-preset-expo",
    ],
    plugins: [
        "@babel/proposal-class-properties",
		"@babel/proposal-object-rest-spread",
    ],
}
