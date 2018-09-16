// UI Controller
const UICtrl = (() => {
  // private
  const UISelectors = {
    searchContainer: '.search-container',
    gallery: '#gallery',
  }

  // public
  return {
    card: (data) => {
      console.log(data);
      for(let user of data.results){
        let firstName = user.name.first;
        let lastName = user.name.last;
        let image = user.picture.large;
        let email = user.email;
        let city = user.location.city;
        let state = user.location.state;
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
        let output = document.createElement('div');
        output.className = 'card';
        output.innerHTML = employee;
        document.querySelector(UISelectors.gallery).appendChild(output);
      }
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
      .then( data => UICtrl.autocomplete(data) )
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