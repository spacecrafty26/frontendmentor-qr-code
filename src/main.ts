import createCard from './components/card'
import qrCode from './assets/image-qr-code.png';
import './style.css'
import createAttribution from './components/attribution';

const appELement = document.querySelector<HTMLDivElement>('#app')!;


const mainContent = {
  title: 'Improve your front-end skills by building projects',
  paragraph: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
  imgUrl: qrCode,
}

createCard(appELement, mainContent);
createAttribution(appELement, 'Rizky Ardiansyah');