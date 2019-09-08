/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED) */

function checkCashRegister(price, cash, cid) {

    var reversedCID = [...cid];
    var change = [];
    var counter = 0;
    var totalInRegister = 0;
    var changeDue = cash - price;
    var totalUnits = 0;
    var register = {
        status: "OPEN",
        change: change
    };

    //Reverse the copied array; this starts the computation from the largest unit ("ONE HUNDRED")
    reversedCID = reversedCID.reverse();

    //Tally the total from the copied array
    reversedCID.forEach(unit => {
        totalInRegister += unit[1];
    })

    //Start from the biggest available unit that is less than changeDue
    if (changeDue < totalInRegister) {

        /*The cid array has units (ONE, FIVE, TEN, etc.). Each unit has a total amount (1.01, 5, 10, 60, etc.) that can be divided into var totalUnits*/
        reversedCID.forEach(unit => {
            switch (unit[0]) {
                case "ONE HUNDRED":
                    //console.log("HUNDRED");
                    //Set the counter to 0 for each unit
                    counter = 0;

                    //Set totalUnits for this unit to 0
                    totalUnits = 0;

                    //Set totalUnits for this unit to totalUnits/100 
                    totalUnits = unit[1] / 100;
                    //console.log(totalUnits);
                    while (counter < totalUnits && changeDue >= 100) {
                        /*Keep track of the changeDue by subtracting 100 from changeDue each time through the while loop*/
                        changeDue -= 100;

                        /*In some cases the changeDue comes back as a long decimal (74.78234 for example). The changeDue.toPrecision(4) inside the Number() method converts 74.78234 to a number (not a string representation) equal to 74.78 */
                        changeDue = Number(changeDue.toPrecision(4));

                        /*Keep track of the total amount of cash in register by subtracting 100 from totalInRegister each time through the while loop*/
                        totalInRegister -= 100;

                        //Increment the counter each time through the while loop
                        counter++;
                        //console.log(changeDue);
                    }
                    /*The only time values should be pushed to the change array is when counter has a value of at least 1*/
                    if (counter != 0) {
                        change.push([unit[0], (counter * 100)]);
                    }
                    break;
                    /*Repeat the process through the rest of the units until changeDue becomes 0*/
                case "FIFTY":
                    //console.log("FIFTY");
                    counter = 0;
                    totalUnits = 0;
                    totalUnits = unit[1] / 50;
                    //console.log(totalUnits);
                    while (counter < totalUnits && changeDue >= 50) {
                        changeDue -= 50;
                        changeDue = Number(changeDue.toPrecision(4));
                        totalInRegister -= 50;
                        counter++;
                        //console.log(changeDue);
                    }
                    if (counter != 0) {
                        change.push([unit[0], (counter * 50)]);
                    }
                    break;
                case "TWENTY":
                    //console.log("TWENTY");
                    counter = 0;
                    totalUnits = 0;
                    totalUnits = unit[1] / 20;
                    //console.log(totalUnits);
                    while (counter < totalUnits && changeDue >= 20) {
                        changeDue -= 20;
                        changeDue = Number(changeDue.toPrecision(4));
                        totalInRegister -= 20;
                        counter++;
                        //console.log(changeDue);
                    }
                    if (counter != 0) {
                        change.push([unit[0], (counter * 20)]);
                    }
                    break;
                case "TEN":
                    //console.log("TEN");
                    counter = 0;
                    totalUnits = 0;
                    totalUnits = unit[1] / 10;
                    //console.log(totalUnits);
                    while (counter < totalUnits && changeDue >= 10) {
                        changeDue -= 10;
                        changeDue = Number(changeDue.toPrecision(4));
                        totalInRegister -= 10;
                        counter++;
                        //console.log(changeDue);
                    }
                    if (counter != 0) {
                        change.push([unit[0], (counter * 10)]);
                    }
                    break;
                case "FIVE":
                    //console.log("FIVE");
                    counter = 0;
                    totalUnits = 0;
                    totalUnits = unit[1] / 5;
                    //console.log(totalUnits);
                    while (counter < totalUnits && changeDue >= 5) {
                        changeDue -= 5;
                        changeDue = Number(changeDue.toPrecision(4));
                        totalInRegister -= 5;
                        counter++;
                        //console.log(changeDue);
                    }
                    if (counter != 0) {
                        change.push([unit[0], (counter * 5)]);
                    }
                    break;
                case "ONE":
                    //console.log("ONE");
                    counter = 0;
                    totalUnits = 0;
                    totalUnits = unit[1] / 1;
                    //console.log(totalUnits);
                    while (counter < totalUnits && changeDue >= 1) {
                        changeDue -= 1;
                        changeDue = Number(changeDue.toPrecision(4));
                        totalInRegister -= 1;
                        counter++;
                        //console.log(changeDue);
                    }
                    if (counter != 0) {
                        change.push([unit[0], (counter * 1)]);
                    }
                    break;
                case "QUARTER":
                    counter = 0;
                    //console.log("QUARTER");
                    totalUnits = 0;
                    totalUnits = unit[1] / 0.25;
                    //console.log(totalUnits);
                    while (counter < totalUnits && changeDue >= 0.25) {
                        changeDue -= 0.25;
                        changeDue = Number(changeDue.toPrecision(2));
                        totalInRegister -= 0.25;
                        counter++;
                        //console.log(changeDue);
                    }
                    if (counter != 0) {
                        change.push([unit[0], counter * 0.25]);
                    }
                    break;
                case "DIME":
                    //console.log("DIME");
                    counter = 0;
                    totalUnits = 0;
                    totalUnits = unit[1] / 0.10;
                    //console.log(totalUnits);
                    while (counter < totalUnits && changeDue >= 0.10) {
                        changeDue -= 0.10;
                        changeDue = Number(changeDue.toPrecision(2));
                        totalInRegister -= 0.10;
                        counter++;
                        //console.log(changeDue);
                    }
                    if (counter != 0) {
                        change.push([unit[0], counter * 0.10]);
                    }
                    break;
                case "NICKEL":
                    //console.log("NICKEL");
                    counter = 0;
                    totalUnits = 0;
                    totalUnits = unit[1] / 0.05;
                    //console.log(totalUnits);
                    while (counter < totalUnits && changeDue >= 0.05) {
                        changeDue -= 0.05;
                        changeDue = Number(changeDue.toPrecision(2));
                        totalInRegister -= 0.05;
                        counter++;
                        //console.log(changeDue);
                    }
                    if (counter != 0) {
                        change.push([unit[0], counter * 0.05]);
                    }
                    break;
                case "PENNY":
                    //console.log("PENNY");
                    counter = 0;
                    totalUnits = 0;
                    totalUnits = unit[1] / 0.01;
                    //console.log(totalUnits);
                    while (counter < totalUnits && changeDue >= 0.01 && totalUnits / changeDue >= 0) {
                        changeDue -= 0.01;
                        changeDue = Number(changeDue.toPrecision(2));
                        totalInRegister -= 0.01;
                        counter++;
                        //console.log(changeDue);
                    }
                    if (counter != 0) {
                        change.push([unit[0], counter * 0.01]);
                    }
                    break;
            }
            if (changeDue == 0) {
                register.status = "OPEN";
                register.change = change;
            } else {
                register.status = "INSUFFICIENT_FUNDS";
                register.change = [];
            }
        });
    } else if (changeDue == totalInRegister) {
        for (let i = 0; i < reversedCID.length; i++) {
            //console.log(reversedCID[i]);
            change.push(cid[i]);
            register.status = "CLOSED";
            register.change = change;
        }
    } else {
        register.status = "INSUFFICIENT_FUNDS";
        register.change = change;
    }

    console.log(register);
}




checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]); //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.