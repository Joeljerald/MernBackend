//Task 1 
const bankAccount=()=>{
    let initialBalance=5000;
    return{
        depositAmount:(amount)=>{
            initialBalance+=amount;
            console.log("Deposited: ",amount)
        },
        withdrawAmount:(amount)=>{
            if(amount>initialBalance){
                console.log("Insufficient Balance");
                return;
            }
            initialBalance-=amount;
            console.log("Withdrawn: ",amount);
        },
        checkBalance:()=>{
            console.log("Current Balance: ",initialBalance);
        }
    }
}
const totalsalary=bankAccount();
totalsalary.depositAmount(1000);
totalsalary.checkBalance();
totalsalary.withdrawAmount(500);
totalsalary.checkBalance();

//Task 2
const studentAttendence=()=>{
    let count=0;
    return ()=>{
        count++;
        console.log("Attendance Count: ",count);
    }
}
const updateCount=studentAttendence();
updateCount();
updateCount();
updateCount();
updateCount();

//Task3
const vistorCount=()=>{
    let count=0;
    return ()=>{
        count++;  
        console.log("Total Visitors: ",count);  
    }
   
}
const totalCount=vistorCount();
totalCount();
totalCount();
totalCount();
totalCount();

//Task4
const shoppingCart = () => {
    let itemCount = 0;

    return {
        addProduct: () => {
            itemCount++;
            console.log("Product added");
        },
        removeProduct: () => {
            if (itemCount > 0) {
                itemCount--;
                console.log("Product removed");
            } else {
                console.log("Cart empty");
            }
        },
        displayTotalItems: () => {
            console.log("Total Items:", itemCount);
        }
    }
}
const cart = shoppingCart();
cart.addProduct();
cart.addProduct();
cart.displayTotalItems();
cart.removeProduct();
cart.displayTotalItems();

//Task 5
const bankAtm=()=>{
    let initialBalance=5000;
    return{
        depositAmount:(amount)=>{
            initialBalance+=amount;
            console.log("Deposited: ",amount)
        },
        withdrawAmount:(amount)=>{
            if(amount>initialBalance){
                console.log("Insufficient Balance");
                return;
            }
            initialBalance-=amount;
            console.log("Withdrawn: ",amount);
        },
        checkBalance:()=>{
            console.log("Current Balance: ",initialBalance);
        }
    }
}
const salary=bankAtm();
salary.depositAmount(1000);
salary.checkBalance();
salary.withdrawAmount(500);
salary.checkBalance();

//Task 6
const attemptTracker=()=>{
    let currentCount=0;
    return ()=>{
        currentCount++;
        console.log("Attempt number: ",currentCount);

    }
}
const loginAttempt=attemptTracker();
loginAttempt();
loginAttempt();
loginAttempt();
loginAttempt();
loginAttempt();
loginAttempt();
loginAttempt();

//Task 7

const processPayment = (callback) => {
    console.log("Processing Payment");
    callback();
}
const gPay = () => {
    console.log("Payment done using GPay");
}
const phonePe = () => {
    console.log("Payment done using PhonePe");
}
const paytm = () => {
    console.log("Payment done using Paytm");
}
processPayment(gPay);
processPayment(phonePe);
processPayment(paytm);

//Task8
const executeAction=(callback1)=>{
    console.log("Loading");
    callback1();
}
const logIn=()=>{
    console.log("The User is Logged In ");
}
const logOut=()=>{
    console.log("The User is Logged Out");
}
const register=()=>{
    console.log("The  User is Successfully  Registered");
}
executeAction(logIn);
executeAction(logOut);
executeAction(register);

//Task9
const notificationSystem=(message)=>{
    console.log("Sending Notification...")
    setTimeout(()=>{
        console.log(message)
    },3000)
}
notificationSystem("Notification Sent ");

//Task10

const orderProcessor=()=>{
    let orderCount = 0; 
    return (callback) => {
        orderCount++;
        console.log("Order Number: ",orderCount);
        console.log("Processing");
        setTimeout(() => {
            callback();
            console.log("Order Completed");
        }, 3000);
    };
}
const mobileOrder = () => {
    console.log("Mobile Order");
}
const laptopOrder = () => {
    console.log("Laptop Order");
}
const tvOrder = () => {
    console.log("TV Order");
}
const processOrder = orderProcessor();
processOrder(mobileOrder);
processOrder(laptopOrder);
processOrder(tvOrder);




