describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 200;
      tipAmtInput.value = 50;
      submitPaymentInfo();
    });

it('should sum the total for each payment type', function(){
    expect(sumPaymentTotal('tipAmt')).toEqual(50);
    expect(sumPaymentTotal('billAmt')).toEqual(200);

    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(70);

});

it('should calculate the tip percentage from the billAmt', function(){
    expect(calculateTipPercent(100, 20)).toEqual(20);
    expect(calculateTipPercent(124, 12)).toEqual(10);
});

it('should create a new tr with an appended td based off of the value entered', function(){
    const newTr = document.createElement('tr');

    appendTd(newTr, 'Testing');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerText).toEqual('Testing');


})


afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });

});
