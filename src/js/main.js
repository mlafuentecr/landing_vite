/*-----------------------------------------------------------------------------------*/
/*  START
/*-----------------------------------------------------------------------------------*/
import '../sass/main.scss';
document.readyState !== 'loading' ? startJs() : document.addEventListener('DOMContentLoaded', () => setTimeout(startJs(), 3000));
function startJs() {
	console.log('STARTING');
}
