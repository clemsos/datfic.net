const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

    env = check_env_varaible(env);

    return [
    {
        entry: "./workshop/groupName/dev/scripts/main.ts",
        output: {
            path: path.resolve(__dirname, "workshop/groupName/prod"),
            filename: "main.js"
        },
        resolve: {
            extensions: [".ts", ".js"]
        },
        module: {
            rules: [

                // typescript
                {
                    test: /\.ts$/,
                    use: [
                        {loader: "ts-loader"},
                    ],
                    exclude: /node_modules/
                },

                // html template
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                            },
                        }

                    ],
                    exclude: /node_modules/,
                },

                // files
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'images/'
                            }
                        }
                    ],
                    exclude: /node_modules/,
                },

                // sass
                {
                    test: /(\.scss$)/,
                    use: (() => {
                        if(env.production) return ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            //resolve-url-loader may be chained before sass-loader if necessary
                            use: ['css-loader', 'sass-loader']
                        });
                        else return [
                            {
                                loader: "style-loader", // creates style nodes from JS strings
                                options: {
                                    sourceMap: true,
                                },
                            }, {
                                loader: "css-loader", // translates CSS into CommonJS
                                options: {
                                    sourceMap: true,
                                },
                            }, {
                                loader: "sass-loader", // compiles Sass to CSS
                                options: {
                                    sourceMap: true
                                },
                            }
                        ];
                    })(),
                    exclude: /node_modules/,
                }

            ]
        },

        // source map
        devtool: (() => {
            if(env.production){
                return false;
            }
            return "source-map";
        })(),

        plugins: (() => {
            if( env.production ){
                return [
                    new ExtractTextPlugin('style.css'),
                    new HtmlWebpackPlugin({
                        template: './workshop/groupName/dev/index.html'
                    })
                ]
            }
            return [new HtmlWebpackPlugin({
                template: './workshop/groupName/dev/index.html'
            })];
        })()
    }
]};

function check_env_varaible(env) {
    env = env === undefined ? {production: false} : env;
    env.production = env.production === undefined || typeof env.production !== "boolean" ? false : env.production;

    console.log(`
    ——————————————————————————————————————————————————————————————————————————————————————
    env.production: ${env.production}
    (you can set env.production [boolean] with --env.production flag with webpack command)
    ——————————––––––––––——————————————————————————————————————————————————————————————————
    `);
    return env;
}
