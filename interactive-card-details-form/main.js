(function() {
    const cardNameSelector = document.getElementById('account-name');
    const cardNameValue = document.getElementById('account-name-value');
    cardNameSelector.addEventListener('input', updateCardNameValue);
    function updateCardNameValue(e) {
        cardNameValue.textContent = e.target.value;
    }

    const cardDateMMSelector = document.getElementById('card-date-mm');
    const cardDateMMValue = document.getElementById('card-date-mm-value');
    cardDateMMSelector.addEventListener('input', updateCardDateMMValue);
    function updateCardDateMMValue(e) {
        cardDateMMValue.textContent = e.target.value;
    }

    const cardDateYYSelector = document.getElementById('card-date-yy');
    const cardDateYYValue = document.getElementById('card-date-yy-value');
    cardDateYYSelector.addEventListener('input', updateCardDateYYValue);
    function updateCardDateYYValue(e) {
        cardDateYYValue.textContent = e.target.value;
    }

    const cardCVCSelector = document.getElementById('card-cvc');
    
    // validation
    function limit(element, size) {
        if(element.target.value.length > size) {
            element.target.value = element.target.value.substr(0, size);
        }
    }
    function onlyNumber(element) {
        const val = element.target.value;
        if(isNaN(val)) {
            element.target.value = element.target.value.substr(0, val.length - 1);
        }
    }
        
    const cardCVCValue = document.getElementById('card-cvc-value');
    cardCVCSelector.addEventListener('input', onlyNumber);
    cardCVCSelector.addEventListener('input', (e) => limit(e, 3));
    cardCVCSelector.addEventListener('input', updateCardCVCValue);
    function updateCardCVCValue(e) {
        cardCVCValue.textContent = e.target.value;
    }
    
    const cardNumberSelector = document.getElementById('card-number');
    const cardNumberValue = document.getElementById('card-number-value');
    cardNumberSelector.addEventListener('input', updateCardNumberValue);
    function updateCardNumberValue(e) {
        const val = e.target.value;
        validateCVC(val)
        cardNumberValue.textContent = e.target.value;
    }

   

})();

