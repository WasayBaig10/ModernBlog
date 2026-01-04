const { execSync } = require('child_process');
const fs = require('fs');

try {
    console.log('Starting npm install...');
    const output = execSync('npm install --legacy-peer-deps', { encoding: 'utf8' });
    fs.writeFileSync('install-output.txt', output);
    console.log('npm install finished. Output written to install-output.txt');
} catch (error) {
    fs.writeFileSync('install-output.txt', error.stdout + '\n' + error.stderr);
    console.log('npm install failed. Error written to install-output.txt');
    process.exit(1);
}
