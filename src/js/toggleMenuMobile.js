const toggleMenuMobile = () => {
  const navigation = document.getElementById('navigation');

  if (navigation) {
    navigation.classList.toggle('active');
  }
};

export default toggleMenuMobile;
