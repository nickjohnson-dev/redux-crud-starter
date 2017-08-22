import join from 'lodash/fp/join';
import printMe from './printMe';
import './styles/index.scss';

function component() {
  const el = document.createElement('div');
  const btn = document.createElement('button');

  el.innerHTML = join(' ', ['Hello', 'Webpack']);

  el.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = printMe;

  el.appendChild(btn);

  return el;
}

document.body.appendChild(component());
