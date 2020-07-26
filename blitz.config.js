const withNextPlugins = require("next-compose-plugins")
const withMDX = require("@next/mdx")()
// const NextJsWebpackOverride = require("nextjs-webpack-override")

const webpackPlugins = [
  //   new NextJsWebpackOverride({
  //     // any standard webpack options that are usually inaccessible
  //     optimization: {
  //       runtimeChunk: "single",
  //       splitChunks: {
  //         chunks: "all",
  //         maxInitialRequests: Infinity,
  //         minSize: 0,
  //         cacheGroups: {
  //           vendor: {
  //             test: /[\\/]node_modules[\\/]/,
  //             name(module) {
  //               // get the name. E.g. node_modules/packageName/not/this/part.js
  //               // or node_modules/packageName
  //               const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
  //               // npm package names are URL-safe, but some servers don't like @ symbols
  //               return `npm.${packageName.replace("@", "")}`
  //             },
  //           },
  //         },
  //       },
  //     },
  //   }),
]

const nextPlugins = [
  [
    withMDX,
    {
      extension: /\.mdx?$/,
    },
  ],
]

const nextConfiguration = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(...webpackPlugins)
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  },
}

module.exports = withNextPlugins([...nextPlugins], nextConfiguration)
