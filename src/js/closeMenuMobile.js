const closeMenuMobile = (e) => {
  const isHamburgerButton = e.target.classList.contains('hamburger-button');

  if (!isHamburgerButton) {
    const navigation = document.getElementById('navigation');
    navigation.classList.remove('active');
  }
};

export default closeMenuMobile;
