const fs = require('fs');
let c = fs.readFileSync('js/main.js', 'utf8');

const fn = [
  '',
  'function renderServicesFull(lang) {',
  '  var grid = document.getElementById("servicesFullGrid");',
  '  if (!grid || !translations.servicesFull) return;',
  '  var data = translations.servicesFull[lang];',
  '  if (!data || !data.categories) return;',
  '  var html = "";',
  '  for (var i = 0; i < data.categories.length; i++) {',
  '    var cat = data.categories[i];',
  '    var mods = "";',
  '    for (var j = 0; j < cat.modules.length; j++) {',
  '      var m = cat.modules[j];',
  '      mods += "<div class=\\"service-module-card\\"><div class=\\"service-module-header\\"><h4>" + m.title + "</h4><div class=\\"service-module-meta\\"><span class=\\"service-time\\">" + m.time + "</span><span class=\\"service-price\\">" + m.price + "</span></div></div><p>" + m.desc + "</p></div>";',
  '    }',
  '    html += "<div class=\\"service-category reveal\\"><h3 class=\\"service-category-name\\">" + cat.name + "</h3><div class=\\"service-modules-list\\">" + mods + "</div></div>";',
  '  }',
  '  grid.innerHTML = html;',
  '}',
  ''
].join('\n');

// Add function at the end of file (before last closing)
c = c + '\n' + fn;

// Add call inside renderDynamicContent
c = c.replace('renderAbout();', 'renderAbout();\n  renderServicesFull(lang);');

fs.writeFileSync('js/main.js', c, 'utf8');
console.log('renderServicesFull added to main.js!');
