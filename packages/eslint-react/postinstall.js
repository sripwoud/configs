const fs = require('fs')
const path = require('path')

const INIT_CWD = process.env.INIT_CWD

// See sharing eslint config & npm scoped modules https://eslint.org/docs/latest/developer-guide/shareable-configs#npm-scoped-modules
const configPath = path.join(INIT_CWD, '.eslintrc.yaml')
if (!fs.existsSync(configPath))
  fs.writeFileSync(configPath, "extends: ['@sripwoud']")

const destinationPath = path.join(INIT_CWD, '.eslintignore')
if (!fs.existsSync(destinationPath))
  fs.copyFileSync(path.join(__dirname, '.eslintignore'), destinationPath)
