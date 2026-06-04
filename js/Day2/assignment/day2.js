//Task 1
const arrowFunction=(firstName,lastName)=>{
    return firstName+lastName;
}
console.log(arrowFunction("Joel"," Arulsamy"))

//Task2
const Product=(price,quantity)=>{
    return price*quantity;
}
console.log(Product(500,2))

//Task3
const ageEligible=(age)=>{
    const validAge=age>=18?"Eligible for voting":"Not Eligible for voting";
    return validAge
}
console.log(ageEligible(20));

//Task4
const largestNumber=(a,b,c)=>{
    const arr=[a,b,c]
    let large=arr[0];
    for(let i=0;i<largestNumber.length;i++){
        if(arr[i]>large){
            large=arr[i];
        }
    }
    return large;
}
console.log(largestNumber(190,200,2))

//Task 5
const defaultUserName=(username="Guest")=>{
    return username;
}
console.log(defaultUserName())
console.log(defaultUserName("Joel"))

//Task 6
const ArthiMetic=(num1,num2)=>{
    console.log("Sum:", num1 + num2);
    console.log("Diff:", num1 - num2);
    console.log("Multiply:", num1 * num2);
    console.log("Divid:", num1 / num2);
}
ArthiMetic(100, 300);

//Task7
const subjectAverage=(...marks)=>{
    let sum=0;
    for(let i=0;i<marks.length;i++){
        sum+=marks[i];
    }
    const avg=sum/2
    return{
        sum,avg
    };
}
console.log(subjectAverage(88,76,67,98,93))

//Task8
const salaryAmount=(salary)=>{
    const hra=salary *0.2;
    const da=salary *0.10;
    const total=salary * hra* da;
    return{
        hra,da,total
    };
}
console.log(salaryAmount(30000));


//Task 9
const convertDegree=(celsius)=>{
    return(celsius*9/5)+32;
}
console.log(convertDegree(38))

//Task 10
const checkOddOrEven=(number)=>{
    if(number%2==0){
        console.log("The given number is Even: ",number)
    }
    else{
        console.log("The given number is Odd: ",number)
    }
}
checkOddOrEven(28)
checkOddOrEven(27)

//Task11
const stringLength=(str)=>{
    return str.length;
}
console.log(stringLength("Joel"))

//Task12
const PrintMultiple=(name,count)=>{
    for(let i=1;i<=count;i++){
        console.log(name);
    }
}
PrintMultiple("Joel",3)

//Task13

const restParameter=(...marks)=>{
    let totalMarks=0;
    for(let i=0;i<marks.length;i++){
        totalMarks+=marks[i];
    }
    return totalMarks
}
console.log(restParameter(79,98,86,49,58))

//Task 14
const restLargeParameter=(...marks)=>{
    let largest=marks[0];
    for(let i=0;i<marks.length;i++){
        if(marks[i]>largest){
            largest=marks[i];
        }
    }
    return largest;
    
}
console.log(restLargeParameter(20,344,598,44,44987,44333,344,55))

//Task 15
const restSmallParameter=(...marks)=>{
    let smallest=marks[0];
    for(let i=0;i<marks.length;i++){
        if(marks[i]<smallest){
            smallest=marks[i];
        }
    }
    return smallest;
    
}
console.log(restSmallParameter(20,344,598,44,44987,15,44333,344,55))

//Task16
const totalBillAmount=(...prices)=>{
    let totalbillamount=0;
    for(let i=0;i<prices.length;i++){
        totalbillamount+=prices[i];
    }
    return totalbillamount
}
console.log(totalBillAmount(867,687,877,87,432,333,777));