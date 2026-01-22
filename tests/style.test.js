const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

const checks = [
    { selector: '#exportBtn', property: 'top' },
    { selector: '#importBtn', property: 'top' },
];

let hasError = false;

console.log('Testing CSS Styles...');

checks.forEach(check => {
    // 嘗試更簡單的匹配，並處理可能的 escape 問題
    // 尋找 selector 後面跟著 { 然後在 } 之前有 property
    // 注意：CSS 可能像這樣 #id{ top: ... } 或 #id { \n top: ... }
    const pattern = `${check.selector}[^\\{]*\\{[^\\}]*${check.property}`;
    const regex = new RegExp(pattern, 'i'); // Case insensitive
    
    if (regex.test(htmlContent)) {
        console.log(`[PASS] Found CSS rule for ${check.selector} with ${check.property}`);
    } else {
        console.error(`[FAIL] Missing CSS rule for ${check.selector} with ${check.property}`);
        // Debug: Check if selector exists at all
        if (htmlContent.indexOf(check.selector) !== -1) {
            console.log(`Debug: Selector ${check.selector} found in file, but regex failed.`);
            // Print context
            const idx = htmlContent.indexOf(check.selector);
            console.log('Context:', htmlContent.substring(idx, idx + 50));
        } else {
            console.log(`Debug: Selector ${check.selector} NOT found in file.`);
        }
        hasError = true;
    }
});

if (hasError) {
    console.error('CSS Style tests failed.');
    process.exit(1);
} else {
    console.log('All CSS Style tests passed.');
}