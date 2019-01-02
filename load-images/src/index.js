import './style.css';
import kitten from './kitten.jpg';
import h1 from './h1';
import img from './img';

console.log('index.js loaded!');

document.body.prepend( h1() );
document.body.appendChild( img(kitten) );