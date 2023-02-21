export default function createAttribution(element: HTMLDivElement, name: string) {
  const attributionElement = document.createElement('div');
  attributionElement.className = 'attribution';
  attributionElement.setAttribute('role', 'attribution');
  attributionElement.innerHTML = `
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.github.com/spacecrafty26" target="_blank">${name}</a>.
  `

  element.appendChild(attributionElement);
}