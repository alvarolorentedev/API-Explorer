#! /usr/bin/env node

const program = require('commander'),
  index = require('../lib/index'),
  packageJson = require('../package.json')

program
  .version(packageJson.version)

program
  .command('api-explorer [pathApiDefinition]')
  .description('explores your api to check if there are any unexpected errors')
  .action((pathApiDefinition) => console.log("TBD"))
  
  program.parse(process.argv)