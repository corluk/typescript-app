const fs = require('fs');

const packageJsonPath = './package.json';

// package.json içeriğini oku
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

// Scripts'i ekle
packageJson.scripts = {
  ...packageJson.scripts,
  "build": "rimraf dist && babel src --out-dir dist --extensions \".ts\"",
  "type-check": "tsc --noEmit",
  "test": "jest"
};

// Güncellenen package.json'ı kaydet
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('package.json güncellendi!');