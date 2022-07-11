module.exports = (env) => {
  const isProd = env.target === "prod";

  return {
    output: {
      // Clean the output directory before emit
      clean: true,
    },
    // Make development output cleaner by removing source map
    devtool: false,
    // Run different webpack configurations based on environment
    mode: isProd ? "production" : "development",
  };
};
