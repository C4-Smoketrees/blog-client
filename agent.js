const https = require('https')
const fs = require('fs')
const path = require('path')

const httpsAgent = new https.Agent({
  hostname: 'localhost',
  key: fs.readFileSync(path.resolve(process.env.SERVER_CERT_KEY)),
  cert: fs.readFileSync(path.resolve(process.env.SERVER_CERT)),
  ca: [fs.readFileSync(path.resolve(process.env.SERVER_CA))],
  rejectUnauthorized: false
})

module.exports = httpsAgent
