module.exports = {
  apps: [
    {
      name: 'eveonlineitalia.it',
      port: '4000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env_file: '.env',
      out_file: "/home/eveonlineitalia.it/logs/out.log",
      error_file: "/home/eveonlineitalia.it/logs/error.log",
      merge_logs: true,
      combine_logs: true
    }
  ]
}