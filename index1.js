//1.select and text chang

    //  $('.first-div h1').text("Changed heading")
    $('.first-div h1').html("<h6>hi</h6>")

    //2. append & prepend
    // $('#second-div h1').append('hhhh') 
    $('#second-div h1').prepend('hhhh') 

    //3 before & after

    const newDiv = $('<p></p>').text('Creating new peragrap')
    $('.third-div h1').before(newDiv) 
