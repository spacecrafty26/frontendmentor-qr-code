export default function createAttribution(element: HTMLDivElement, name: string) {
  element!.innerHTML = `
    <div class="attribution" role="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://www.github.com/spacecrafty26" target="_blank">${name}</a>.
    </div>
  `
}