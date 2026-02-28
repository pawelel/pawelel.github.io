const fs = require('fs');
let c = fs.readFileSync('src/pages/index.astro', 'utf8');

function s(start, end) {
  let i = c.indexOf(start);
  if (!end) return c.substring(i);
  let j = c.indexOf(end, i);
  return c.substring(i, j);
}

let pre = c.substring(0, c.indexOf('<!-- HOW I WORK -->'));
let how = s('<!-- HOW I WORK -->', '<!-- TECH STACK -->');
let tech = s('<!-- TECH STACK -->', '<!-- PROJECTS -->');
let proj = s('<!-- PROJECTS -->', '<!-- EXPERIENCE -->');
let exp = s('<!-- EXPERIENCE -->', '<!-- EDUCATION -->');
let edu = s('<!-- EDUCATION -->', '</main>');
let post = s('</main>');

// Replace labels
exp = exp.replace('>05.<', '>01.<');
tech = tech.replace('>03.<', '>02.<');
how = how.replace('>02.<', '>03.<');
edu = edu.replace('>06.<', '>05.<'); // projects stays 04.

// Replace nav
const oldNavMatch = pre.match(/<ul>[\s\S]*?<\/ul>/);
if (oldNavMatch) {
  const newNav = `<ul>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#stack">Stack</a></li>
        <li><a href="#approach">Approach</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
      </ul>`;
  pre = pre.replace(oldNavMatch[0], newNav);
}

fs.writeFileSync('src/pages/index.astro', pre + exp + tech + how + proj + edu + post);
console.log('Done!');
