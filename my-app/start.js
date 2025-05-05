const { spawn } = require('child_process');
const path = require('path');

const scriptPath = path.join(__dirname, 'node_modules', '@skyscanner', 'backpack-react-scripts', 'scripts', 'start.js');
console.log(`Running script: ${scriptPath}`);

const child = spawn('node', [scriptPath], { stdio: 'inherit' });

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
