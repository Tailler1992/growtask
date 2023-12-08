export const slider = () => {
  const container = document.querySelector<HTMLElement>(".slider");
  const btnPrev = container!.querySelector<HTMLButtonElement>(".prev");
  const btnNext = container!.querySelector<HTMLButtonElement>(".next");
  const track = container!.querySelector<HTMLElement>(".slider__track");
  const items: NodeListOf<HTMLDivElement> = container!.querySelectorAll(".slider__item");

  if (!container || !btnPrev || !btnNext || !track) return;

  const slidesToScroll = 1;
  let position = 0;

  const itemsCount = items.length;
  const columnGap = getComputedStyle(track).columnGap;
  const gapWidth = +columnGap.match(/\d/g)!.join("");
  const itemWidth = items[0].getBoundingClientRect().width + gapWidth;
  const movePosition = slidesToScroll * itemWidth;


  const setPosition = () => {
    track.style.transform = `translateX(${position}px`;
  };

  const checkBtns = () => {
    btnPrev.disabled = position === 0;

    btnNext.disabled = position === itemsCount - 1;
  };

  checkBtns();


  btnPrev.addEventListener("click", () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });


  btnNext.addEventListener("click", () => {
    const itemsRight = itemsCount - (Math.abs(position) + 4 * itemWidth) / itemWidth;
    position -= itemsRight >= slidesToScroll ? movePosition : itemsRight * itemWidth;

    setPosition();
    checkBtns();
  });
};
