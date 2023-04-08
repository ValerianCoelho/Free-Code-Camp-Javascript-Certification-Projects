const currencyObj = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid){
    let bill = cash - price;
    let currency = Object.keys(currencyObj);
    let change = [];
    let noOfNotesForBill = 0;
    let noOfNotesForCid = 0;
    let sumOfCid = 0;

    for(let i = currency.length - 1; i >= 0 && bill != 0; i--){
        sumOfCid += cid[i][1];

        noOfNotesForBill = parseInt(bill / currencyObj[currency[i]]);
        noOfNotesForCid = parseInt(cid[i][1] / currencyObj[currency[i]]);

        if(noOfNotesForBill == 0){
            continue;
        } 
        else if(noOfNotesForBill >= noOfNotesForCid){
            change.push([currency[i], noOfNotesForCid * currencyObj[currency[i]]]);
            bill = bill - noOfNotesForCid * currencyObj[currency[i]];
        } 
        else if(noOfNotesForBill < noOfNotesForCid){
            change.push([currency[i], noOfNotesForBill * currencyObj[currency[i]]]);
            bill = bill - noOfNotesForBill * currencyObj[currency[i]];
        }
        bill = bill.toFixed(2);
    }
    if(sumOfCid == cash - price){
        return { status: "CLOSED", change: cid };
    } 
    else if(bill != 0){
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } 
    else{
        return { status: "OPEN", change: change };
    }
}

let output = checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
    ]);

console.log(output);
