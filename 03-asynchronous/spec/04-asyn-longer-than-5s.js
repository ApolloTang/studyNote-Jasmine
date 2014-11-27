describe("long asynchronous specs", function() {
    console.log('04-asyn-longer-than-5s.js')
    var value;

    var originalTimeout;

    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;

    beforeEach(function(done) {
        value = 0
        setTimeout(function() {
          done();
        }, 5000);
    });

    it("takes a long time", function(done) {
        value++;
        expect(value).toBeGreaterThan(0);
        done(); // this it block (spec) will
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});

