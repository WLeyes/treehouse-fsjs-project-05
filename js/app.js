// UI Controller
const UICtrl = (() => {
  // private
  const UISelectors = {
    searchContainer: '.search-container',
    gallery: '#gallery',
  }

  // public
  return {

    getSelectors: () => UISelectors
  }
})();


// Data Controller
const DataCtrl = (() => {
  // Get UI selectors 
  const UISelectors = UICtrl.getSelectors();
  
  // Public
  return {

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
    }
  }
})(UICtrl, DataCtrl);


// Initialize App
App.init()