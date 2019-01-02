module.exports = (env, argv) => {
  console.log(`--env.target=${env.target}`, '\n');
  console.log(`--mode=${argv.mode}`, '\n');

  // by return empty object webpack will fallback to default options
  return {};
};