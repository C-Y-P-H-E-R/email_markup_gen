import { writeHTML, generateTemplateName } from './node_modules/markup-generator/dist/index.cjs.js'

const content = '<html><body><p>Hello world!</p></body></html>'; // long html template stored in this variable
const fileName = generateTemplateName('prefix-for-your-generated-file');

writeHTML(fileName, content);
