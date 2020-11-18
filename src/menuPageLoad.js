function menuPageLoadFunction(){


    homeButton.classList.remove('selectedTab');
    homeTabDiv.classList.remove('selectedTab');
    menuButton.classList.add('selectedTab');
    menuTabDiv.classList.add('selectedTab');
    contactButton.classList.remove('selectedTab');
    contactTabDiv.classList.remove('selectedTab');
    content.innerHTML = '';
    

    console.log('menu loaded');
    
    // create a Class for each MenuItem? onMouseEnter event to increase blur and find price and description?

    let entrees = document.createElement('h2');
    entrees.textContent = 'ENTREES';
    content.appendChild(entrees);


    let spaghettiDiv = document.createElement('div');
    let spaghetti = document.createElement('img');
    let spaghettiPrice = document.createElement('h4');
    let spaghettiDescription = document.createElement('p');
    spaghettiPrice.textContent = 'Spaghetti - $19.00';
    spaghettiDescription.textContent = 'Our finest Italian spaghetti noodles dance and mingle with the freshest of our famous Roma tomatoes';
    spaghettiDiv.classList.add('menuDiv');
    spaghetti.setAttribute('src', 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    spaghetti.setAttribute('id', 'spaghetti');
    spaghetti.classList.add('menuPhoto');
    spaghettiPrice.classList.add('menuPrice');
    spaghettiDescription.classList.add('menuDescription');
    spaghettiDiv.appendChild(spaghetti);
    spaghettiDiv.appendChild(spaghettiPrice);
    spaghettiDiv.appendChild(spaghettiDescription);
    content.appendChild(spaghettiDiv);
    

    let pastaDiv = document.createElement('div');
    let pasta = document.createElement('img');
    let pastaPrice = document.createElement('h4');
    let pastaDescription = document.createElement('p');
    pastaPrice.textContent = 'Pasta - $17.00';
    pastaDescription.textContent = 'Delicious Pasta garnished with bay leaves and a hint of Italian love';
    pastaDiv.classList.add('menuDiv');
    pasta.setAttribute('src', 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    pasta.setAttribute('id', 'pasta');
    pasta.classList.add('menuPhoto');
    pastaPrice.classList.add('menuPrice');
    pastaDescription.classList.add('menuDescription');
    pastaDiv.appendChild(pasta);
    pastaDiv.appendChild(pastaPrice);
    pastaDiv.appendChild(pastaDescription);
    content.appendChild(pastaDiv);


    let seafoodDiv = document.createElement('div');
    let seafood = document.createElement('img');
    let seafoodPrice = document.createElement('h4');
    let seafoodDescription = document.createElement('p');
    seafoodPrice.textContent = 'Seafood Dish - $23.00';
    seafoodDescription.textContent = 'Shrimp, Scallops, Mussels, and Clams freshly caught earlier today and mixed with our famous seafood sauce and a side of sourdough bread';
    seafoodDiv.classList.add('menuDiv');
    seafood.setAttribute('src', 'https://images.unsplash.com/photo-1571167366136-b57e07761625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    seafood.setAttribute('id', 'seafood');
    seafood.classList.add('menuPhoto');
    seafoodPrice.classList.add('menuPrice');
    seafoodDescription.classList.add('menuDescription');
    seafoodDiv.appendChild(seafood);
    seafoodDiv.appendChild(seafoodPrice);
    seafoodDiv.appendChild(seafoodDescription);
    content.appendChild(seafoodDiv);


    let spinachPizzaDiv = document.createElement('div');
    let spinachPizza = document.createElement('img');
    let spinachPizzaPrice = document.createElement('h4');
    let spinachPizzaDescription = document.createElement('p');
    spinachPizzaPrice.textContent = 'Spinach Pizza - $21.00';
    spinachPizzaDescription.textContent = 'Alfredo sauce base and garlic with spinach makes this scrumptious pizza a local favorite!';
    spinachPizzaDiv.classList.add('menuDiv');
    spinachPizza.setAttribute('src', 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    spinachPizza.setAttribute('id', 'spinachPizza');
    spinachPizza.classList.add('menuPhoto');
    spinachPizzaPrice.classList.add('menuPrice');
    spinachPizzaDescription.classList.add('menuDescription');
    spinachPizzaDiv.appendChild(spinachPizza);
    spinachPizzaDiv.appendChild(spinachPizzaPrice);
    spinachPizzaDiv.appendChild(spinachPizzaDescription);
    content.appendChild(spinachPizzaDiv);


    let proscuittoDiv = document.createElement('div');
    let proscuitto = document.createElement('img');
    let proscuittoPrice = document.createElement('h4');
    let proscuittoDescription = document.createElement('p');
    proscuittoPrice.textContent = 'Prosciutto Sandwich  - $15.00';
    proscuittoDescription.textContent = 'You\'ve never had a Prosciutto Sandwich until you\'ve tried Giovanni\'s farm-raised ham';
    proscuittoDiv.classList.add('menuDiv');
    proscuitto.setAttribute('src', 'https://images.unsplash.com/photo-1511357840105-748c95f0a7e7');
    proscuitto.setAttribute('id', 'proscuitto');
    proscuitto.classList.add('menuPhoto');
    proscuittoPrice.classList.add('menuPrice');
    proscuittoDescription.classList.add('menuDescription');
    proscuittoDiv.appendChild(proscuitto);
    proscuittoDiv.appendChild(proscuittoPrice);
    proscuittoDiv.appendChild(proscuittoDescription);
    content.appendChild(proscuittoDiv);


    let sides = document.createElement('h2');
    sides.textContent = 'SIDES';
    content.appendChild(sides);


    let tomatoToastDiv = document.createElement('div');
    let tomatoToast = document.createElement('img');
    let tomatoToastPrice = document.createElement('h4');
    let tomatoToastDescription = document.createElement('p');
    tomatoToastPrice.textContent = 'Tomato Toast - $12.00';
    tomatoToastDescription.textContent = 'Focaccia cheese with a healthy helping of sliced tomatoes on a toasted slice of sourdough bread sprinkled with parsley';
    tomatoToastDiv.classList.add('menuDiv');
    tomatoToast.setAttribute('src', 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    tomatoToast.setAttribute('id', 'tomatoToast');
    tomatoToast.classList.add('menuPhoto');
    tomatoToastPrice.classList.add('menuPrice');
    tomatoToastDescription.classList.add('menuDescription');
    tomatoToastDiv.appendChild(tomatoToast);
    tomatoToastDiv.appendChild(tomatoToastPrice);
    tomatoToastDiv.appendChild(tomatoToastDescription);
    content.appendChild(tomatoToastDiv);


    let veggieSaladDiv = document.createElement('div');
    let veggieSalad = document.createElement('img');
    let veggieSaladPrice = document.createElement('h4');
    let veggieSaladDescription = document.createElement('p');
    veggieSaladPrice.textContent = 'Vegetable Salad - $10.00';
    veggieSaladDescription.textContent = 'Are you a rabbit? Do you only eat stuff that grows out of the ground? No worries, we\'ve got you covered with our Veggie Salad';
    veggieSaladDiv.classList.add('menuDiv');
    veggieSalad.setAttribute('src', 'https://images.unsplash.com/photo-1594576182733-ad4ec76e674f');
    veggieSalad.setAttribute('id', 'veggieSalad');
    veggieSalad.classList.add('menuPhoto');
    veggieSaladPrice.classList.add('menuPrice');
    veggieSaladDescription.classList.add('menuDescription');
    veggieSaladDiv.appendChild(veggieSalad);
    veggieSaladDiv.appendChild(veggieSaladPrice);
    veggieSaladDiv.appendChild(veggieSaladDescription);
    content.appendChild(veggieSaladDiv);
  

    let cheeseDumplingDiv = document.createElement('div');
    let cheeseDumpling = document.createElement('img');
    let cheeseDumplingPrice = document.createElement('h4');
    let cheeseDumplingDescription = document.createElement('p');
    cheeseDumplingPrice.textContent = 'Cheese Dumplings - $11.00';
    cheeseDumplingDescription.textContent = 'The best cheeses around all combined into our tasty dumpling, garnished with parsley and more cheese!';
    cheeseDumplingDiv.classList.add('menuDiv');
    cheeseDumpling.setAttribute('src', 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    cheeseDumpling.setAttribute('id', 'cheeseDumpling');
    cheeseDumpling.classList.add('menuPhoto');
    cheeseDumplingPrice.classList.add('menuPrice');
    cheeseDumplingDescription.classList.add('menuDescription');
    cheeseDumplingDiv.appendChild(cheeseDumpling);
    cheeseDumplingDiv.appendChild(cheeseDumplingPrice);
    cheeseDumplingDiv.appendChild(cheeseDumplingDescription);
    content.appendChild(cheeseDumplingDiv);


    let desserts = document.createElement('h2');
    desserts.textContent = 'DESSERTS';
    content.appendChild(desserts);


    let iceCreamDiv = document.createElement('div');
    let iceCream = document.createElement('img');
    let iceCreamPrice = document.createElement('h4');
    let iceCreamDescription = document.createElement('p');
    iceCreamPrice.textContent = 'Pistacchio Ice Cream - $8.00';
    iceCreamDescription.textContent = 'Our Customer favorite. Complete your meal with the most delicious Pistacchio Ice Cream on this side of the Atlantic';
    iceCreamDiv.classList.add('menuDiv');
    iceCream.setAttribute('src', 'https://images.unsplash.com/photo-1571990925439-2b6072445908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    iceCream.setAttribute('id', 'iceCream');
    iceCream.classList.add('menuPhoto');
    iceCreamPrice.classList.add('menuPrice');
    iceCreamDescription.classList.add('menuDescription');
    iceCreamDiv.appendChild(iceCream);
    iceCreamDiv.appendChild(iceCreamPrice);
    iceCreamDiv.appendChild(iceCreamDescription);
    content.appendChild(iceCreamDiv);


    let tiramisuDiv = document.createElement('div');
    let tiramisu = document.createElement('img');
    let tiramisuPrice = document.createElement('h4');
    let tiramisuDescription = document.createElement('p');
    tiramisuPrice.textContent = 'Tiramisu - $9.00';
    tiramisuDescription.textContent = 'We wouldn\'t be an Italian restuarant without this delicious dessert!';
    tiramisuDiv.classList.add('menuDiv');
    tiramisu.setAttribute('src', 'https://images.unsplash.com/photo-1542326237-94b1c5a538d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    tiramisu.setAttribute('id', 'tiramisu');
    tiramisu.classList.add('menuPhoto');
    tiramisuPrice.classList.add('menuPrice');
    tiramisuDescription.classList.add('menuDescription');
    tiramisuDiv.appendChild(tiramisu);
    tiramisuDiv.appendChild(tiramisuPrice);
    tiramisuDiv.appendChild(tiramisuDescription);
    content.appendChild(tiramisuDiv);


    let croissantDiv = document.createElement('div');
    let croissant = document.createElement('img');
    let croissantPrice = document.createElement('h4');
    let croissantDescription = document.createElement('p');
    croissantPrice.textContent = 'Croissant & Cappuccino Combo - $12.00';
    croissantDescription.textContent = 'Our scrumptious Croissants combined with our equally scrumptious Cappuccino';
    croissantDiv.classList.add('menuDiv');
    croissant.setAttribute('src', 'https://images.unsplash.com/photo-1574282341541-0b3ed53adcd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    croissant.setAttribute('id', 'croissant');
    croissant.classList.add('menuPhoto');
    croissantPrice.classList.add('menuPrice');
    croissantDescription.classList.add('menuDescription');
    croissantDiv.appendChild(croissant);
    croissantDiv.appendChild(croissantPrice);
    croissantDiv.appendChild(croissantDescription);
    content.appendChild(croissantDiv);

  };
  
  export {menuPageLoadFunction};