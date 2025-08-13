#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the raw JavaScript code
const jsCode = fs.readFileSync('page-scroller.js', 'utf8').trim();

// Create bookmarklet by wrapping in IIFE and URL encoding
const bookmarklet = `javascript:(function(){${jsCode}})()`;
const encodedBookmarklet = encodeURIComponent(bookmarklet).replace(/'/g, '%27');

console.log('Raw JavaScript code:');
console.log(jsCode);
console.log('\nBookmarklet:');
console.log(bookmarklet);
console.log('\nURL-encoded bookmarklet:');
console.log(encodedBookmarklet);

// Update index.html
let htmlContent = fs.readFileSync('index.html', 'utf8');
const htmlRegex = /href="javascript[^"]*"/;
htmlContent = htmlContent.replace(htmlRegex, `href="${encodedBookmarklet}"`);
fs.writeFileSync('index.html', htmlContent);
console.log('\n✅ Updated index.html');

// Update README.md - use a more robust approach
let readmeContent = fs.readFileSync('README.md', 'utf8');
// Find the line with the bookmarklet and replace it entirely
const lines = readmeContent.split('\n');
const bookmarkletLineIndex = lines.findIndex(line => line.includes('drag to your bookmark bar:'));
if (bookmarkletLineIndex !== -1) {
    lines[bookmarkletLineIndex] = `drag to your bookmark bar: [page-scroller](${encodedBookmarklet})`;
    readmeContent = lines.join('\n');
    fs.writeFileSync('README.md', readmeContent);
    console.log('✅ Updated README.md');
} else {
    console.log('⚠️  Could not find bookmarklet line in README.md');
}

console.log('\n🎉 Build complete! The bookmarklet has been updated in both files.');