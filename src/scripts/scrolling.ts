export const scrolling = () => {
  const links = document.querySelectorAll(`a[href^="#"]`);

  links.forEach(link => {
    link.addEventListener("click", (event: Event) => {
      event.preventDefault();

      const target = (event.currentTarget as HTMLElement);
      const href = target.getAttribute("href");

      if (!href) return;

      const targetElement = document.querySelector(href);

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let startTimestamp: any = null;

        const step = (timestamp: number) => {
          if (!startTimestamp) {
            startTimestamp = timestamp;
          }
          const progress = timestamp - startTimestamp;
          window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        };

        window.requestAnimationFrame(step);
      }
    });
  });

  const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };
};


