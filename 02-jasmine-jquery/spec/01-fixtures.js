describe("checking out fixture:", function(){
    // xxx
        // var ajaxData = 'some ajax data'
        // var fixtureUrl = 'some_url'
        // var anotherFixtureUrl = 'another_url'
        // var fixturesContainer = function () {
        //     return $('#' + jasmine.getFixtures().containerId)
        // }
        // var appendFixturesContainerToDom = function () {
        //     $('body').append('<div id="' + jasmine.getFixtures().containerId + '">old content</div>')
        // }
        //
        // beforeEach(function () {
        //     jasmine.getFixtures().clearCache()
        //     spyOn(jasmine.Fixtures.prototype, 'loadFixtureIntoCache_').and.callFake(function (relativeUrl){
        //         this.fixturesCache_[relativeUrl] = ajaxData
        //     })
        // })
        //
        // describe("default initial config values", function () {
        //     it("should set 'jasmine-fixtures' as the default container id", function () {
        //         expect(jasmine.getFixtures().containerId).toEqual('jasmine-fixtures');
        //         console.log(jasmine.getFixtures())
        //     })
        //
        //     it("should set 'spec/javascripts/fixtures' as the default fixtures path", function () {
        //         expect(jasmine.getFixtures().fixturesPath).toEqual('spec/javascripts/fixtures')
        //     })
        // })

    it("offers 3 crucial functions", function(){
        expect(readFixtures).toBeDefined();
        expect(setFixtures).toBeDefined();
        expect(loadFixtures).toBeDefined();
    });

    it("can load fixtures from a file, and append it to dom", function(){
        loadFixtures('myFragment.html');
        //default location: spec/javascripts/fixtures/myFragment.html
        expect($('.fragment')).toExist();
        // debugger;  <-- if you pause here you will see it in the dom!
    });

    it("can read fixtures w/o appending to DOM", function(){
        var fixture = readFixtures('myFragment.html');
        expect( fixture ).toContain('li');
        expect( $(fixture).find('li') ).toHaveText('Add some data');
    });
})
