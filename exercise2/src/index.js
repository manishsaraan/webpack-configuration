import _ from 'lodash';
import './styles.css';
import Icon from './test.jpg';
import Data from './data.xml';

function component(){
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'Webpack', ' ']);
	element.classList.add('hello');

	//adding image
	var icon = new Image();
	icon.src = Icon;
	element.appendChild(icon);

	console.log(Data);

	return element;
}

document.body.appendChild(component());