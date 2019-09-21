import 'normalize.css';
import '../css/main.scss';
import generateParticles from './generateParticles';

const app = () => {
  console.log('We are here.');
  generateParticles();
};

app();
