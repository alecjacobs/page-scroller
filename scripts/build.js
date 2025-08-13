#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const jsCode = fs.readFileSync('page-scroller.js', 'utf8').trim();

// Create bookmarklet by wrapping in IIFE and URL encoding
const jsFunction = `(function(){${jsCode}})()`;
const encodedJs = encodeURIComponent(jsFunction).replace(/'/g, '%27');
const encodedBookmarklet = `javascript:${encodedJs}`;

console.log('Raw JavaScript code:');
console.log(jsCode);
console.log('\nURL-encoded bookmarklet:');
console.log(encodedBookmarklet);

// Update index.html
let htmlContent = fs.readFileSync('index.html', 'utf8');
const htmlRegex = /href="javascript[^"]*"/;
htmlContent = htmlContent.replace(htmlRegex, `href="${encodedBookmarklet}"`);
fs.writeFileSync('index.html', htmlContent);
console.log('\n✅ Updated index.html');

console.log('\n🎉 Build complete! The bookmarklet has been updated in both files.');