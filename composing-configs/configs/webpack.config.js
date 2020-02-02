module.exports = (env) => {
  if (!env) throw new Error('You must set --env flag');

  if (env.target === 'prod') return require('./webpack.prod');
  if (env.target === 'dev') return require('./webpack.dev');
  if (env.target === 'devServer') return require('./webpack.devServer');
};