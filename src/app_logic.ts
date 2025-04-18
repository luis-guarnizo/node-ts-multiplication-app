import fs from 'fs';        
import { yarg } from "./config/plugins/yargs.plugin";


const { b: base, l: limit, s: show } = yarg;
let outpuntMessage = '';
const headerMessage = `
=========================
Tabla del ${base}
=========================\n`;

for ( let i = 1; i <= limit; i++ ) {
    outpuntMessage += `    ${base} x ${i} = ${base * i}\n`;
};

outpuntMessage = headerMessage + outpuntMessage;

show && console.log(outpuntMessage);

const outputPath = `./src/outputs`;
if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}
fs.writeFileSync(`${outputPath}/tabla-${ base }.txt`, outpuntMessage);


