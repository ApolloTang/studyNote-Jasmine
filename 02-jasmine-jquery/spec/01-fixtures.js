describe("checking out fixture:", function(){

    it("offers 3 crucial functions", function(){
        expect(loadFixtures).toBeDefined();
        expect(readFixtures).toBeDefined();
        expect(setFixtures).toBeDefined();
    });

    it("can load fixtures from a file, and append it to dom", function(){
        loadFixtures('myFragment.html');
        //default location for fragment files:
        //  "spec/javascripts/fixtures/myFragment.html"
        expect($('.fragment')).toExist();
        // debugger; // <-- if you pause here you will see fragment in the dom!
        //           //     The fragment is appended as the inner html
        //           //     of <div id="jasmine-fixtures"></div>
    });

    it("can read fixtures w/o appending to DOM", function(){
        // the different between loadFixtures and readFixtures
        // is taht 'loadFixtures' append the fragment in the dom
        // while 'readFixtures' return fragment as a string without
        // inserting the fragment into DOM.
        var fixture = readFixtures('myFragment.html');
        expect( fixture ).toContain('li');
        expect( $(fixture).find('li') ).toHaveText('Add some data');
    });

    it("can also receive the fixture from a parameter instead of a file", function(){
        setFixtures('<div class="sandbox">this is a sand box</div>');
        // unlike loadFixtures, you pass in string instead of
        // filename of the fragment. The fragment is then appended
        // to the DOM like loadFixtures.
        // In addition, in stead of string you can also pass in
        // jQuery wapper set
        expect( $('.sandbox')).toExist();
        // debugger; // <-- if you pause here you will see fragment in the dom!
    });

    // -- Sandbox function --//

    it("offer a sandbox function that wrap in jQuery", function(){
        expect(sandbox).toBeDefined;
        var $sb = sandbox();
        expect($sb instanceof jQuery).toBeTruthy()
    });

    it("can specify class for the sand box", function(){
        expect(sandbox).toBeDefined;
        var $sb = sandbox({'class':'some-class'});
        expect($sb).toHaveClass('some-class');
    });

    it("can pass sandbox to setFixtures(), which will insert it in DOM", function(){
        expect(sandbox).toBeDefined;
        var $sb = sandbox({'class':'some-class'});
        setFixtures($sb);
        expect($('.some-class')).toExist();
        expect($('#sandbox')).toHaveClass('some-class');
    });

})
