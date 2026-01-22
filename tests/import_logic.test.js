const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

console.log('Testing Import Logic Implementation...');

let hasError = false;

// 1. Check for importBtn click trigger
if (!/importBtn['"]\)\.addEventListener\(['"]click['"]/.test(htmlContent)) {
    console.error('[FAIL] Missing event listener for importBtn');
    hasError = true;
} else {
    console.log('[PASS] Found event listener for importBtn');
}

// 2. Check for importInput change listener
if (!/importInput['"]\)\.addEventListener\(['"]change['"]/.test(htmlContent)) {
    console.error('[FAIL] Missing event listener for importInput');
    hasError = true;
} else {
    console.log('[PASS] Found event listener for importInput');
}

// 3. Check for FileReader or JSON parsing logic
if (!/FileReader/.test(htmlContent) || !/JSON\.parse/.test(htmlContent)) {
    console.error('[FAIL] Missing FileReader or JSON parsing logic for import');
    hasError = true;
} else {
    console.log('[PASS] Found file reading and parsing logic');
}

if (hasError) {
    console.error('Import logic tests failed.');
    process.exit(1);
} else {
    console.log('All Import logic tests passed.');
}
