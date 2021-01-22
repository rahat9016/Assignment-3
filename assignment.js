// //Kilometer To Meter

function kilometerToMeter(inputKm){
    var value = inputKm * 1000;
    return value
}
var result = kilometerToMeter(45)
console.log(result)









//Budget Calculator
function budgetCalculator(clock, phone, laptop){
    var clockPrice = clock * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;

    totalAmount = clockPrice + phonePrice + laptopPrice;
    return totalAmount;
}      

var totalPrice = budgetCalculator(4,2,5);
console.log(totalAmount)






// // //Hotel Cost
function hotelCost(day){
    var amount = 0;
    if(day <= 10){
        amount = day * 100;
    }else if(day <= 20){
        firstHotelRent = 10 * 100;
        var due = day - 10;
        secondHotelRent = due * 80;
        amount = firstHotelRent + secondHotelRent;
    }else{
        firstHotelRent = 10 * 100;
        secondHotelRent = 10 * 80;
        var due = day - 20;
        thirdToEveryDayRent = due * 50;
        amount = firstHotelRent + secondHotelRent + thirdToEveryDayRent; 
    }
    return amount
}
var result = hotelCost(22)
console.log(result)



// //Mega Friend
function megaFriend(arr){
    var result = "";
    for(var i = 0; i < arr.length; i++){
       var currentGroup = arr[i] 
       if(currentGroup.length > result.length){
        result = arr[i]
    }
    }
    return result
}
var friendGroup = ['Rahat', 'Samia', 'Minhajur Rohoman', 'AshikBro', 'AnikaApu' ]
var member = megaFriend(friendGroup)
console.log(member)









