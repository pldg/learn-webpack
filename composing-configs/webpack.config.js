const errorsHandling = require('./configs/errorsHandling');

module.exports = env => {
  if (!env) throw new Error(errorsHandling.no_env_flag);
  
  if (env.target === 'prod') return require('./configs/webpack.prod');
  if (env.target === 'dev') return require('./configs/webpack.dev');
  if (env.target === 'devServer') return require('./configs/webpack.devServer');
};