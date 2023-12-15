export const burger = () => {
  const burgerButton = document.querySelector<HTMLElement>(".header__burger");
  const menu = document.querySelector<HTMLElement>(".mobile-menu");
  const nav = document.querySelector<HTMLElement>(".header__nav");
  const logo = document.querySelector<HTMLElement>(".logo");
  const logoMenu = document.querySelector<HTMLElement>(".header__menu");
  const social = document.querySelector<HTMLElement>(".social__items");

  if (!burgerButton || !menu || !nav || !social || !logo || !logoMenu) return;

  const menuContent = nav.cloneNode(true) as HTMLElement;
  const socialContent = social.cloneNode(true) as HTMLElement;

  const renderMenu = () => {
    menuContent.classList.add("mobile-menu__nav");
    menu.append(menuContent);

    const menuApp = menu.firstChild as HTMLElement;
    menuApp!.append(socialContent);
  };

  const toggleScrolling = () => {
    const scrollLength = window.innerWidth - document.documentElement.clientWidth;

    if (menu.classList.contains("mobile-menu__open")) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      burgerButton.style.marginRight = scrollLength + "px";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "visible";
      burgerButton.style.marginRight = "0";
    }
  };

  renderMenu();

  burgerButton.addEventListener("click", () => {
    menu.classList.toggle("mobile-menu__open");
    logo.classList.toggle("logo__open");
    logoMenu.classList.toggle("header__menu_visible");
    burgerButton.classList.toggle("header__burger_open");
    toggleScrolling();
  });

  menuContent.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target && target.tagName === "BUTTON" || target.tagName === "A") {
      menu.classList.toggle("mobile-menu__open");

      toggleScrolling();
    }
  });
};
