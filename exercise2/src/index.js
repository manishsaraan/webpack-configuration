import _ from 'lodash';
import './styles.css';
import Icon from './test.jpg';
import Data from './data.xml';
import printMe from './print.js';

function component(){
	var element = document.createElement('div');
	var button = document.createElement('button');
	element.innerHTML = _.join(['Hello', 'Webpack', ' ']);
	element.classList.add('hello');
	button.innerHTML = 'Click me to console';
	button.onclick = printMe;

	//adding image
	var icon = new Image();
	icon.src = Icon;
	element.appendChild(icon);
	element.appendChild(button);

	console.log(Data);

	return element;
}

document.body.appendChild(component());