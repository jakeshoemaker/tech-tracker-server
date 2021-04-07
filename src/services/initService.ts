const inputYML:String = '../swagger.yaml'
const outputJson:String = '../swagger.json'
const yaml = require('js-yaml')
const fs = require('fs')

// convert swagger yaml file to json && save
const convertToJson:() => void = () => {
    const obj = yaml.load(fs.readFileSync(inputYML, {encoding: 'utf-8'}))
    fs.writeFileSync(outputJson, JSON.stringify(obj, null, 2));
}

export { convertToJson }