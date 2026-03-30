const fs = require('fs');
let c = fs.readFileSync('js/main.js', 'utf8');

// Remove reveal class from dynamically generated service cards
// so they are always visible
c = c.replace(
  'service-category reveal',
  'service-category'
);

fs.writeFileSync('js/main.js', c, 'utf8');
console.log('Reveal class removed from service categories - they will be always visible now!');
