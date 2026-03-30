const fs = require('fs');
let c = fs.readFileSync('js/main.js', 'utf8');

// Fix: in renderDynamicContent, use currentLang instead of lang (which is undefined)
// There should be a call renderServicesFull(lang) inside renderDynamicContent
// We need to replace just that specific one
// Find renderDynamicContent and the call inside it
const rdcIdx = c.indexOf('function renderDynamicContent');
const rdcEnd = c.indexOf('renderServicesFull(lang)', rdcIdx);
if (rdcEnd > rdcIdx) {
  c = c.substring(0, rdcEnd) + 'renderServicesFull(currentLang)' + c.substring(rdcEnd + 'renderServicesFull(lang)'.length);
  console.log('Fixed renderDynamicContent call!');
} else {
  console.log('Call not found in renderDynamicContent');
}

fs.writeFileSync('js/main.js', c, 'utf8');
