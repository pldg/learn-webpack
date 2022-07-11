const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isProd = env.target === "prod";

  return {
    output: {
      clean: true,
    },
    mode: isProd ? "production" : "development",
    plugins: [
      new HtmlWebpackPlugin({
        // Do not inject assets (import them inside template)
        inject: false,
        // Load custom template (by default use lodash syntax)
        template: "./template.ejs",
        // `title`, `attributes`, `head`, `body` variables are exposed inside
        // the template:
        title: "HTML Template",
        attributes: {
          html: {
            lang: "en",
          },
          js: {
            defer: true,
          },
        },
        head: {
          meta: [
            {
              name: "description",
              content: "Custom webpack html template",
            },
          ],
          links: [
            {
              href: "https://fonts.googleapis.com/css?family=Roboto:400&display=swap",
              rel: "stylesheet",
            },
          ],
        },
        body: {
          scripts: [
            {
              src: "https://polyfill.io/v3/polyfill.min.js?flags=gated",
              type: "text/javascript",
              crossorigin: "anonymous",
              defer: true,
            },
          ],
        },
      }),
    ],
  };
};
