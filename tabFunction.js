function activeFirstButton() {
  if (document.getElementById('medellin').style.display == "") {
    document.getElementById('medellin').style.display = 'block';
    document.getElementsByClassName('tablinks')[0].style.color = '#eb0f70';
    document.getElementsByClassName('tablinks')[0].style.borderBottom =
      '4px solid #eb0f70';
  } else {
    document.getElementsByClassName('tablinks')[0].style.color = "";
    document.getElementsByClassName('tablinks')[0].style.borderBottom = "";
  }
}

function openCity(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
  
  activeFirstButton();

}