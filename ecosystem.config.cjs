module.exports = {
  apps: [
    {
      name: 'eveonlineitalia.it',
      port: '4000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env_file: '.env',
    }
  ]
}