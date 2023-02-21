import createCard from './components/card'
import qrCode from './assets/image-qr-code.png';
import './style.css'
import createAttribution from './components/attribution';

const appELement = document.querySelector<HTMLDivElement>('#app')!;
const cardELement = document.createElement('div');
const attributionELement = document.createElement('div');

const mainContent = {
  title: 'Improve your front-end skills by building projects',
  paragraph: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
  imgUrl: qrCode,
}

createCard(cardELement, mainContent);
createAttribution(attributionELement, 'Rizky Ardiansyah');

appELement
  .appendChild(cardELement)
  .appendChild(attributionELement);