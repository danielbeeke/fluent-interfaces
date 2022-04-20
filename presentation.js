import Reveal from 'https://cdn.skypack.dev/reveal.js';
import Highlight from 'https://cdn.skypack.dev/reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'https://cdn.skypack.dev/reveal.js/plugin/notes/notes.esm.js';
import Markdown from 'https://cdn.skypack.dev/reveal.js/plugin/markdown/markdown.esm.js';

let deck = new Reveal({
   simplemenu: {
      auto: true
  },
   plugins: [ Markdown, Highlight, Notes ],
   hash: true
})
deck.initialize();

deck.on( 'slidechanged', event => {
   const shouldHide = event.currentSlide.querySelector('.context').classList.contains('hidden')

   if (shouldHide) document.querySelector('.chapter').style.display = 'none'
   else document.querySelector('.chapter').style.display = 'block'

   const currentChapterText = event.currentSlide.querySelector('.context').innerText
   const chapters = [...document.querySelectorAll('.context')]
   const itemsWithSameText = chapters.filter(chapter => chapter.innerText == currentChapterText && !chapter.classList.contains('hidden'))
   const index = itemsWithSameText.indexOf(event.currentSlide.querySelector('.context'))
   document.querySelector('.chapter').innerText = `${currentChapterText} (${index + 1} / ${itemsWithSameText.length})`
 } );