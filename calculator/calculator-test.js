
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('130.44')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 100,
    years: 4,
    rate: 3.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('2.24');
});

/// etc
