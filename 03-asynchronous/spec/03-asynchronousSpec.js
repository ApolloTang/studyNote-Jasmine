describe("Asynchronous specs", function() {
  var value;

  beforeEach(function(done) {
    setTimeout(function() {
      value = 0;
      done(); // when done() is called, the specs (it block) will start running
    }, 4000);
    // }, 5000); // <--- if it takes longer than 5000ms it is consider a time out failure
  });

  it("should support async execution of test preparation and expectations", function(done) {
    value++;
    expect(value).toBeGreaterThan(0);
    done(); // this it block (spec) will not exsit until this done is called()
  });

  // describe("long asynchronous specs", function() {
  //   var originalTimeout;
  //   beforeEach(function() {
  //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  //   });
  //
  //   it("takes a long time", function(done) {
  //     setTimeout(function() {
  //       done();
  //     }, 9000);
  //   });
  //
  //   afterEach(function() {
  //     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  //   });
  // });
});
