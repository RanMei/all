// import xs from 'xstream';
// import {run} from '@cycle/xstream-run';
// import {makeDOMDriver} from '@cycle/dom';
// import {html} from 'snabbdom-jsx';

// function main(sources) {
//   const checkbox$ = 
//     sources.DOM.select('input').events('click')
//       .map(ev => ev.target.checked)
//       .startWith(false)
//       .map(toggled =>
//         <div className="CheckBox">
//           <input type="checkbox" /> Toggle me
//           <p>{toggled ? 'ON' : 'off'}</p>
//         </div>
//       );
//   const sinks = {
//     DOM: checkbox$
//   };
//   return sinks;
// }

// const drivers = {
//   DOM: makeDOMDriver('#app')
// };

// run(main, drivers);

import Rx from 'rxjs/Rx';

var button = document.querySelector('button');

const click$ = Rx.Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`Clickeded for ${count} times!`));


if(module.hot) {
  // accept itself
  module.hot.accept();
}