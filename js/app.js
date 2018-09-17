// UI Controller
const UICtrl = (() => {
  // private
  // centralize selectors 
  const UISelectors = {
    searchContainer:   '.search-container',
    gallery:           '#gallery',
    cardInfoContianer: '.card-info-container',
    card:              '.card',
    cardName:          '.card-name',
    name:              '#id',
    modalContainer:    '.modal-container',
    modal:             '.modal',
    modalNext:         '#modal-next',
    modalPrev:         '#modal-prev',
    modalClose:        '#modal-close-btn'
  }

  // public
  return {
    
    card: (data) => {
      // define vars and map to each data result
      for(let user of data.results){
        let firstName = user.name.first;
        let lastName = user.name.last;
        let image = user.picture.large;
        let email = user.email;
        let city = user.location.city;
        let state = user.location.state;
        // define the output for each card
        let employee = `
          <div class="card-img-container">
            <img class="card-img" src="${image}" alt="${firstName} ${lastName}'s profile picture">
          </div>
          <div class="card-info-container">
            <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
            <p class="card-text">${email}</p>
            <p class="card-text cap">${city}, ${state}</p>
          </div>
        `;
        // create outer div of the cards 
        let output = document.createElement('div');
        output.className = 'card';
        // Set inner html to the outer div
        output.innerHTML = employee;
        // append to page
        document.querySelector(UISelectors.gallery).appendChild(output);
      }
      // Add eventListener to each card
      let details = document.querySelectorAll(UISelectors.card);
      details.forEach( (card, index) => {
        card.addEventListener('click', event => {
          event.preventDefault();
          UICtrl.modal(data, index);
        });
      });
    },

    modal: (data, index) => {
      let user = data.results[index];
      let firstName = user.name.first;
      let lastName = user.name.last;
      let image = user.picture.large;
      let email = user.email;
      let birthday = new Date(user.dob.date);
      let formattedBirthday = moment(birthday).format("MM/DD/YYYY");
      let city = user.location.city;
      let street = user.location.street;
      let state = user.location.state;
      let zip = user.location.postcode;
      let phone = user.phone;

      const container = document.createElement('div');
      const contents = document.createElement('div');
      container.className = UISelectors.modalContainer;
      contents.className = UISelectors.modal;
      container.innerHTML = `
        <div class="modal-container">
        <div class="modal">
          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container">
            <img class="modal-img" src="${image}" alt="${firstName} ${lastName}'s profile picture">
            <h3 id="name" class="modal-name cap">${firstName} ${lastName}</h3>
            <p class="modal-text">${email}</p>
            <p class="modal-text cap">${city}</p>
            <hr>
            <p class="modal-text">${phone}</p>
            <p class="modal-text">${street}., ${city}, ${state} ${zip}</p>
            <p class="modal-text">Birthday: ${formattedBirthday}</p>
          </div>
          <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
          </div>
        </div>
      `;
      // if overlay is active remove
      if(document.querySelector(UISelectors.modalContainer)){
        document.querySelector(UISelectors.modalContainer).remove();
      }
      // append overlay
      document.querySelector('body').appendChild(container);

      // Modal next button
      document.querySelector(UISelectors.modalNext).addEventListener('click', event => {
        event.preventDefault();
        UICtrl.modalNext(data, index);
      });
      
      // Modal previous button
      document.querySelector(UISelectors.modalPrev).addEventListener('click', event => {
        event.preventDefault();
        UICtrl.modalPrev(data, index);
      });

      // Modal close button
      document.querySelector(UISelectors.modalClose).addEventListener('click', event => {
        event.preventDefault();
        document.querySelector(UISelectors.modalContainer).remove();
      });
    },

    modalNext: (data, index) =>{
      index++;
      if(index > document.querySelectorAll(UISelectors.card).length - 1){
        index = 0;
      }
      UICtrl.modal(data, index);
    },

    modalPrev: (data, index) =>{
      index--;
      if(index < 0){
        index = document.querySelectorAll(UISelectors.card).length -1;
      }
      UICtrl.modal(data, index);
    },

    autocomplete: (data) => {

    },

    getSelectors: () => UISelectors
  }
})();



// Data Controller
const DataCtrl = (() => {
  // Data Fetch API
  function fetchUserJSON(url, numberOfUsers) {
    fetch(`${url}?seed=b73e4d2e35f01cdc&nat=us&results=${parseInt(numberOfUsers)}`)
      .then( response => response.json() )
      .then( data => UICtrl.card(data) )
      .catch( error => console.log(error) );
  }
  
  // Public
  return {
    getRandomUser: () => fetchUserJSON('https://randomuser.me/api/', 12)
  }
})();



// App Controller
const App = ((UICtrl, DataCtrl) => {
  // Get UI selectors 
  const UISelectors = UICtrl.getSelectors();

  // Public
  return {
    init: () => {
      console.log('Initializing App ...');
      DataCtrl.getRandomUser();
    }
  }
})(UICtrl, DataCtrl);



// Initialize App
App.init()