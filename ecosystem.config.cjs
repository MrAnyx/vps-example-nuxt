module.exports = {
    apps: [
      {
        name: 'vps_example_nuxt',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  