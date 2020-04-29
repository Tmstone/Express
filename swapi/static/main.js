$(document).ready(function(){
    $('#peopleBtn').click(function(){
        $.get('/people', function(data) {
            console.log('Got response: ', data); 
            postData(data)
       });
    });
    $('#planetBtn').click(function(){
        $.get('/planets', function(data) {
            console.log('Got response: ', data);
            postData(data)
        });
    });
    function postData(data) {
        names = data.results;

        for (x = 0; x < names.length; x++) {
            $('#data').html(names[x].name);  
        }
        //$('#data').html('<a href="data.next">Next</a>');

    }
});