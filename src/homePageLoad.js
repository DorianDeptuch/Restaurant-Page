function homePageLoadFunction(){


  homeButton.classList.add('selectedTab');
  homeTabDiv.classList.add('selectedTab');
  menuButton.classList.remove('selectedTab');
  menuTabDiv.classList.remove('selectedTab');
  contactButton.classList.remove('selectedTab');
  contactTabDiv.classList.remove('selectedTab');
  content.innerHTML = '';

  console.log('home loaded');

  let introDiv = document.createElement('div');
  let about = document.createElement('h3');
  let intro = document.createElement('p');
  let homeImage = document.createElement('img');
  about.textContent = "ABOUT";
  intro.textContent = "Here at Giovanni's, we pride ourselves in not only creating authentic Italian food, but also in providing a rich family atmosphere that will remind you of the old country";
  introDiv.setAttribute('id', 'introDiv');
  about.setAttribute('id', 'about');
  intro.setAttribute('id', 'intro');
  homeImage.setAttribute('src', 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
  homeImage.setAttribute('id', 'homeImage');
  introDiv.appendChild(intro);
  content.appendChild(about);
  content.appendChild(introDiv);
  content.appendChild(homeImage);

};

export {homePageLoadFunction};