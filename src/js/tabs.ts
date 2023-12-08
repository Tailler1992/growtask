export const tabs = () => {
  const navList = document.querySelector<HTMLElement>(".presentation__list");
  const tabSelector = ".presentation__item";
  const tab: NodeListOf<HTMLDivElement> = document.querySelectorAll(tabSelector);
  const content: NodeListOf<HTMLDivElement> = document.querySelectorAll(".presentation__content-item");

  if (!navList) return;

  const hideTabContent = () => {
    content.forEach(item => {
      item.classList.remove("presentation__content-item_visible");
    });

    tab.forEach(item => {
      item.classList.remove("presentation__item_active");
    });
  };

  const showTabContent = (i = 0) => {
    content[i].classList.add("presentation__content-item_visible");
    tab[i].classList.add("presentation__item_active");
  };

  hideTabContent();
  showTabContent();

  navList.addEventListener("click", (e) => {
    const target = e.target;

    if (!target) {
      return;
    }

    if (target && (target as HTMLElement).classList.contains("presentation__item")) {
      tab.forEach((item, i) => {
        if (target === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};
