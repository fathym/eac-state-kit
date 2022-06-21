import { Status } from '@fathym/common';

function state() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = ['Hello', 'state'].join(' ');

  return element;
}

document.body.appendChild(state());
