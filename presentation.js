import Reveal from 'https://cdn.skypack.dev/reveal.js';
import Highlight from 'https://cdn.skypack.dev/reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'https://cdn.skypack.dev/reveal.js/plugin/notes/notes.esm.js';
import Markdown from 'https://cdn.skypack.dev/reveal.js/plugin/markdown/markdown.esm.js';

let deck = new Reveal({
   plugins: [ Markdown, Highlight, Notes ],
   hash: true
})
deck.initialize();