// Israel Escobedo, Project 0.
// Imports lightning element.
import{ LightningElement} from 'lwc';

export default class signup extends LightningElement {
     
    // Variables
    customerName = '';     // Variable for customer's name.
    email = '';            // Variable for customer's email.
    phone ='';             // Variable for customer's phone.
    addressShip = '';      // Variable for customer's shipping address.
    aptShip = '';          // Variable for customer's shipping apartment number.
    cityShip ='';          // Variable for customer's shipping city.
    stateShip='';          // Variable for customer's shipping state.
    zipShip='';            // Variable for customer's shipping zip code.
    cardName='';           // Varaible for credit/debit card name.
    cardNumber='';         // Variable for credit/debit card number.
    cvv = '';              // Variable for credit/debit card cvv/cvc number.
    cardType='';           // Variable for credit/debit card type.
    addressBilling ='';    // Variable for billing address.
    aptBilling='';         // Variable for billing apartment number.
    cityBilling='';        // Variable for billing city.
    stateBilling='';       // Variable for billing state.   
    zipBilling='';         // Variable for billing zip code.
    boxType='';            // Variable for subscription option.
    greeting='';           // Variable for part of the confirmation message.
    confirmation ='';      // Variable for part of the confirmation message.
    confirmNum;            // Variable for confirmation number.         
    message='';            // Variable for part of the confirmation message. 

    // Function for storing user input into variables.
    handleInput(event) {

        const field = event.target.name;

        if (field === 'customerName') {
            this.customerName = event.target.value;
        } else if (field === 'email') {
            this.email = event.target.value;
        }else if (field === 'phone') {
            this.phone = event.target.value;
        }else if (field === 'addressShip') {
            this.addressShip = event.target.value;
        }else if (field === 'aptShip') {
            this.aptShip = event.target.value;
        }else if (field === 'cityShip') {
            this.cityShip = event.target.value;
        }else if (field === 'stateShip') {
            this.stateShip = event.target.value;
        }else if (field === 'zipShip') {
            this.zipShip = event.target.value;
        }else if (field === 'cardName') {
            this.cardName = event.target.value;
        }else if (field === 'cardNumber') {
            this.cardNumber = event.target.value;
        }else if (field === 'cvv') {
            this.cvv = event.target.value;
        }else if (field === 'addressBilling') {
            this.addressBilling = event.target.value;
        }else if (field === 'aptBilling') {
            this.aptBilling = event.target.value;
        }else if (field === 'cityBilling') {
            this.cityBilling = event.target.value;
        }else if (field === 'stateBilling') {
            this.stateBilling = event.target.value;
        }else if (field === 'zipBilling') {
            this.zipBilling = event.target.value;
        }
    }

    // Function for storing credit/debit card type saved in a variable.
    handleCard(event){
        this.cardType = event.target.value;
    }

    // Function for storing a subscription option in a variable.
    handleBox(event){
        this.boxType = event.target.value;
    }

    // Function displays a subscription confimation message and a confirmation number.
    // Clears the textboxes.
    handlePayment(){	
    
        this.greeting = 'Success!';       
        this.confirmation = 'Confirmation Number: ';
        this.confirmNum = Math.floor(Math.random() * 1000) + 9000;
        this.message = 'Payment approved. You will receive an e-mail with all your Vintage Loot Box information. Enjoy!'; 
        
        customerName='';
        email='';
        phone='';
        addressShip='';
        aptShip='';
        cityShip='';
        stateShip='';
        zipShip='';
        cardName='';
        cardNumber='';
        cvv='';
        addressBilling='';
        aptBilling='';
        cityBilling='';
        stateBilling='';
        zipBilling='';
        cardType='';
        boxType=''; 
    }
}