
// BUDGET CONTROLLER
var budgetController = (function () {
    
    // Some code
    
})();



// UI CONTROLLER
var UIController = (function () {
    
    // Some code
    
})();



// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
    
    var ctrlAddItem = function () {
        // 1. Get field inout
        
        // 2. Add item to budget controller
        
        // 3. Add iem to UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget on UI
        
        console.log('It\'s alive!');
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    // this event happens globaly
    // so we cannot add it to buttom
    document.addEventListener('keypress', function (event) {
        
        // event.which -- for old browsers
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        
    });
    
})(budgetController, UIController);

