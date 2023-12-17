export const accordion = () => {
  const boxes: HTMLElement[] = Array.from(document.querySelectorAll(".accordion__label"));

  boxes.forEach((box) => {
    box.addEventListener("click", (e: Event) => {
      let target = e.target;

      if (!target) return;

      let currentBox = (target as HTMLElement).closest(".accordion__box");
      const content = currentBox!.querySelector<HTMLElement>(".accordion__content");

      if (!currentBox || !content) return;

      currentBox!.classList.toggle("accordion__active");

      if (currentBox.classList.contains("accordion__active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0px";
      }
    });
  });
};
