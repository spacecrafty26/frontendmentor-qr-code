interface Options {
  title: string;
  paragraph: string;
  imgUrl: string;
}

export default function createCard(
  element: HTMLDivElement,
  options: Options,
) {
  element!.innerHTML = `
    <div class="card">
      <img class="card__image" src=${options.imgUrl} alt="QR Code">
      <h1 class="card__title">${options.title}</h1>
      <p class="card__paragraph">${options.paragraph}</p>
    </div>
  `;
}
