/* ================================================================
   terminal.js — Typewriter animation for the hero terminal widget
   ================================================================ */

// Script that plays out in the terminal, alternating between
// "cmd" lines (commands the user types) and "out" lines (output).
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

// HTML snippets reused across every line
const PROMPT = '<span class="t-prompt">$ </span>';    // green "$ " prefix
const CURSOR = '<span class="cursor">▋</span>';        // blinking block cursor

let lineIdx = 0; // tracks which line of the script we're rendering next

// Appends a new <p> with arbitrary HTML to the terminal body
function appendLine(html) {
  const p = document.createElement('p');
  p.innerHTML = html;
  terminalBody.appendChild(p);
}

// Simulates typing by revealing one character at a time every 45ms.
// el   — the <p> element that already contains the empty .t-cmd span
// text — the full command string to type out
// cb   — callback fired when the last character is typed
function typeLine(text, el, cb) {
  let i = 0;
  const interval = setInterval(() => {
    el.querySelector('.t-cmd').textContent = text.slice(0, ++i);
    if (i === text.length) {
      clearInterval(interval);
      cb(); // move on to the next line
    }
  }, 45); // ms per character — lower = faster typing
}

// Renders lines one by one, handling cmd vs out differently.
function renderNext() {
  // All lines done → append the idle prompt with a blinking cursor
  if (lineIdx >= lines.length) {
    appendLine(PROMPT + CURSOR);
    return;
  }

  const line = lines[lineIdx++];

  if (line.type === 'cmd') {
    // Create the line element upfront with an empty command span,
    // then fill it character-by-character via typeLine()
    const p = document.createElement('p');
    p.className = 't-line';
    p.innerHTML = PROMPT + '<span class="t-cmd"></span>';
    terminalBody.appendChild(p);

    // After finishing the command, pause 180ms before showing its output
    typeLine(line.text, p, () => setTimeout(renderNext, 180));
  } else {
    // Output lines appear instantly, then wait 60ms before the next line
    appendLine(`<span class="t-out">${line.text}</span>`);
    setTimeout(renderNext, 60);
  }
}

// Brief pause before starting so the page has time to fully render
setTimeout(renderNext, 600);
