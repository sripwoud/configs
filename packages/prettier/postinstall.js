const fs = require('fs')
const path = require('path')

const INIT_CWD = process.env.INIT_CWD

const configPath = path.join(INIT_CWD, '.prettierrc.yaml')
if (!fs.existsSync(configPath))
  fs.writeFileSync(configPath, "'@sripwoud/prettier-config'")

const destinationPath = path.join(INIT_CWD, '.prettierignore')
if (!fs.existsSync(destinationPath))
  fs.copyFileSync(path.join(__dirname, '.prettierignore'), destinationPath)
