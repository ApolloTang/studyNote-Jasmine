// $(document).ajaxComplete(function(ev, jqXHR, settings) {
//     $.ajax.mostRecentCall = jqXHR;
// });

myObj = {
    someMethod: function () {
        console.log('someMethod called');
        // $.get('someFile.html', function(data){
        //     return data;
        // })
        return 'hello there'
    }
}


$.fn.asyncCall = function() {
    return this.each(function(){
        var el = $(this);

        $.get('someFile.html', function(data){
            console.log('data: ', data)
            el.html(data);
        })
    })
}
