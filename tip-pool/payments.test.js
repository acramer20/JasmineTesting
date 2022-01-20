describe("payments tests (with set up and tear down)", function() {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    });

it('should add the payment information to the allPayments object', function(){
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('200');
    expect(allPayments['payment1'].tipAmt).toEqual('40');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
// would love to go over this in mentor meeting (the above) I am not sure how this object is formed... is the payment1 the key and the rest are sub keys? Is it an object within an object?

  });

it('should create a current payment', function(){
   
    billAmtInput.value = '';

    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
});
it('should append new tds to the payment table', function(){
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('$200');
    expect(curTdList[1].innerText).toEqual('$40');
    expect(curTdList[2].innerText).toEqual('%20');


});

it('should not update payment info if there is an empty input', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(Object.keys(allPayments).length).toEqual(0);
    
});

afterEach(( ) => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
  });
});
 
