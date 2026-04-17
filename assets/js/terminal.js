/* ── Terminal typewriter ── */
const lines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'tomas-navarro' },
  { type: 'cmd', text: 'cat role.txt' },
  { type: 'out', text: 'Security Researcher & Cloud Engineer' },
  { type: 'cmd', text: 'echo $FOCUS' },
  { type: 'out', text: 'SDN/NFV Security · AWS · DevOps' },
  { type: 'cmd', text: 'ls skills/' },
  { type: 'out', text: 'python/  aws/  kubernetes/  linux/  django/' },
];

const terminalBody = document.getElementById('terminalBody');
const PROMPT       = '<span class="t-prompt">$ </span>';
const CURSOR       = '<span class="cursor">▋</span>';
let lineIdx = 0;

function appendLine(html) {
  const p = document.createElement('p');
  p.innerHTML = html;
  terminalBody.appendChild(p);
}

function typeLine(text, el, cb) {
  let i = 0;
  const interval = setInterval(() => {
    el.querySelector('.t-cmd').textContent = text.slice(0, ++i);
    if (i === text.length) { clearInterval(interval); cb(); }
  }, 45);
}

function renderNext() {
  if (lineIdx >= lines.length) {
    appendLine(PROMPT + CURSOR);
    return;
  }

  const line = lines[lineIdx++];

  if (line.type === 'cmd') {
    const p = document.createElement('p');
    p.className = 't-line';
    p.innerHTML = PROMPT + '<span class="t-cmd"></span>';
    terminalBody.appendChild(p);
    typeLine(line.text, p, () => setTimeout(renderNext, 180));
  } else {
    appendLine(`<span class="t-out">${line.text}</span>`);
    setTimeout(renderNext, 60);
  }
}

setTimeout(renderNext, 600);
