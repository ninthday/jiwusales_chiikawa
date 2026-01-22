const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

console.log('Testing Export Logic Implementation...');

let hasError = false;

// 1. Check for exportData function definition
if (!/function\s+exportData\s*\(\)\s*\{/.test(htmlContent)) {
    console.error('[FAIL] Missing exportData() function definition');
    hasError = true;
} else {
    console.log('[PASS] Found exportData() function');
}

// 2. Check for event listener binding
if (!/document\.getElementById\(['"]exportBtn['"]\)\.addEventListener/.test(htmlContent)) {
    console.error('[FAIL] Missing event listener for exportBtn');
    hasError = true;
} else {
    console.log('[PASS] Found event listener for exportBtn');
}

if (hasError) {
    console.error('Export logic tests failed.');
    process.exit(1);
} else {
    console.log('All Export logic tests passed.');
}
