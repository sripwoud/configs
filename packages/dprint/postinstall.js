const fs = require('fs')
const path = require('path')

const INIT_CWD = process.env.INIT_CWD
const destinationPath = path.join(INIT_CWD, '.dprint.jsonc')

if (!fs.existsSync(destinationPath))
  fs.copyFileSync(path.join(__dirname, '.dprint.jsonc'), destinationPath)
