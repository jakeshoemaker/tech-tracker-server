const buildDocs = function() {
    // convert swagger yaml file to json && save
    const yaml = require('js-yaml')
    const fs = require('fs')
    const path = require('path')
    let inputYML = path.resolve(__dirname, '../swagger.yaml')
    let outputJson = path.resolve(__dirname, '../swagger.json')
    const obj = yaml.load(fs.readFileSync(inputYML, {encoding: 'utf-8'}))
    fs.writeFileSync(outputJson, JSON.stringify(obj, null, 2));
}

module.exports = { buildDocs }