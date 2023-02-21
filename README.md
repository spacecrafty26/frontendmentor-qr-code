# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

- [Mobile](./screenshots/mobile.png)
- [Desktop](./screenshots/desktop.png)

### Links

- Solution URL: [Click me](https://github.com/spacecrafty26/frontendmentor-qr-code)
- Live Site URL: [Click me](https://frontendmentor-qr-code-delta.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- Web Components
- CSS custom properties
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
export default function createAttribution(element: HTMLDivElement, name: string) {
  element!.innerHTML = `
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://www.github.com/spacecrafty26" target="_blank">${name}</a>.
    </div>
  `
}
```
```css
@media screen and (min-width: 1024px) {
  #app:hover .attribution {
    display: inline-block;
    animation: bouncing 2s linear infinite alternate;
  }

  .attribution {
    position: absolute;
    bottom: 5%;
    left: 50%;
    padding-block: 1rem;
    padding-inline: 1.25rem;
    border-radius: 1rem;
    background-color: var(--bg-card);
    color: var(--color-paragraph);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .attribution>a {
    font-weight: 700;
    color: var(--color-title);
  }
}
```

### Continued development

Make the better accessability and styling method.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US) - Great docs and all you need is here.
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation) - Tailwind is amazing resources for design pattern, and I often use this docs.

## Author

- Frontend Mentor - [@spacecrafty26](https://www.frontendmentor.io/profile/spacecrafty26)
- Linkedin - [Rizky Ardiansyah](https://www.linkedin.com/in/ky-ardiansyah)

## Acknowledgments

Big Thanks to MDN, Tailwind CSS, and Frontend Mentor.