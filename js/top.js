const setFadeinAnimation = () => {
  const option = {
    root: null,
    rootMargin: "0% 0% -20% 0%",
    threshold: 0.2,
  };
  
  const animation = (entries) => {
    
    entries.forEach( ( entry ) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        target.classList.add('js-is-animation');
      }

    });
  };

  const observeres = new IntersectionObserver(animation, option);
  
  const trigger = document.querySelectorAll('.js-animation');
  for (let i = 0; i < trigger.length; i++) {
    observeres.observe(trigger[i]);
  }
}

const mvAnimation = () => {
  const texts = document.querySelectorAll('.js-mvanimation-text');
  const images = document.querySelectorAll('.js-mvanimation-image');

  setTimeout(() => {
    texts.forEach(text => text.classList.add('js-is-animation'));
    images.forEach(image => image.classList.add('js-is-animation'));
  }, 300);
  
}

document.addEventListener("DOMContentLoaded", () => {
  setFadeinAnimation();
  mvAnimation();
})