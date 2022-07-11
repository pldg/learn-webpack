module.exports = (env, argv) => {
  console.log(`env.target = ${env.target}`);
  console.log(`mode = ${argv.mode}`);

  // By return empty object webpack will fallback to default options
  return {};
};
