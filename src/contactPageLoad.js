function contactPageLoadFunction(){


    homeButton.classList.remove('selectedTab');
    homeTabDiv.classList.remove('selectedTab');
    menuButton.classList.remove('selectedTab');
    menuTabDiv.classList.remove('selectedTab');
    contactButton.classList.add('selectedTab');
    contactTabDiv.classList.add('selectedTab');
    content.innerHTML = '';

    console.log('contact loaded');
  
    const contact = document.createElement('h2');
    contact.textContent = 'CONTACT';
    content.appendChild(contact);

    let contactDiv = document.createElement('div');
    let phone = document.createElement('h2');
    let phoneNumber = document.createElement('p');
    let email = document.createElement('h2');
    let emailAddress = document.createElement('p');
    let address = document.createElement('h2');
    let addressLocation = document.createElement('p');
    let map = document.createElement('iframe');

    

    phone.textContent = 'PHONE';
    phoneNumber.textContent = '1(822)645-8102';
    email.textContent = 'E-MAIL';
    emailAddress.textContent = 'giovannis_authentic@italian.com';
    address.textContent = 'ADDRESS';
    addressLocation.textContent = 'We are located in the heart of Little Italy in New York City, USA';
    contactDiv.setAttribute('id', 'contactDiv');
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6047.892823887917!2d-74.00186702560067!3d40.71919616732421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598845057def%3A0x9ecf1b969fbbb484!2sLittle%20Italy%2C%20New%20York%2C%20NY%2010013!5e0!3m2!1sen!2sus!4v1605668750711!5m2!1sen!2sus');
    map.setAttribute('width', '600');
    map.setAttribute('height', '300');
    map.setAttribute('frameborder', '0');
    map.setAttribute('style', 'border:0');
    map.setAttribute('allowfullscreen', '');
    map.setAttribute('aria-hidden', 'false');
    map.setAttribute('tabindex', '0');
  
    contactDiv.appendChild(phone);
    contactDiv.appendChild(phoneNumber);
    contactDiv.appendChild(email);
    contactDiv.appendChild(emailAddress);
    contactDiv.appendChild(address);
    contactDiv.appendChild(addressLocation);
    contactDiv.appendChild(map);
    content.appendChild(contactDiv);

  };
  
  export {contactPageLoadFunction};
