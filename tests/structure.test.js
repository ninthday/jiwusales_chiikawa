const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

const checks = [
    { id: 'exportBtn', name: 'Export Button' },
    { id: 'importBtn', name: 'Import Button' },
    { id: 'importInput', name: 'Import File Input' }
];

let hasError = false;

console.log('Testing HTML Structure...');

checks.forEach(check => {
    // 簡單的字串檢查，模擬 DOM 查找
    // 檢查 id="value" 或 id='value'
    const regex = new RegExp(`id=["']${check.id}["']`, 'i');
    if (regex.test(htmlContent)) {
        console.log(`[PASS] Found ${check.name} (#${check.id})`);
    } else {
        console.error(`[FAIL] Missing ${check.name} (#${check.id})`);
        hasError = true;
    }
});

if (hasError) {
    console.error('HTML Structure tests failed.');
    process.exit(1);
} else {
    console.log('All HTML Structure tests passed.');
}
