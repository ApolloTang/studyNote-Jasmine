describe("checking out spy:", function(){
    it("callThrough", function(){
        spyOn(myObj, 'someMethod').and.callThrough();
        myObj.someMethod();
        expect(myObj.someMethod).toHaveBeenCalled();
    });

    it("can get spy to return fake data", function(){
        spyOn(myObj, 'someMethod').and.returnValue('hello there');
        expect( myObj.someMethod() ).toBe('hello there');
    });

    it("can get replace the funcion with fake one", function(){
        spyOn(myObj, 'someMethod').and.callFake(function(){
            return 'hello there';
        });
        expect( myObj.someMethod() ).toBe('hello there');
    });

    // -- spy on jQuery ajax -- //

    it("Using spy to highjack data return in jQuery's ajax", function(){

        spyOn($, 'ajax');

        setFixtures( sandbox() );   // a container with id="sandbox" will be insert
                                    // into DOM

        $('#sandbox').asyncCall();  // call the plugin on the dom element mention above
                                    // the plugin will replace the inner html with
                                    // data return from ajax

        var ajax_context = $.ajax.calls.mostRecent();
            // [note] calls.mostRecent() is a jamsine method, don't mistakenly
            // that is is a jquery method.
            // Here it return the context for the $.ajax (i.e "this" );
        console.log(ajax_context);

        var data = '<p>hello there</p>';

        ajax_context.args[0].success(data);
                              // ^--- we are calling $.ajax.success(data) menually
                              //     and data will be pass to the callback
                              //     in $.get();

        expect( $('#sandbox').find('p').text()).toBe('hello there');

    });
});
