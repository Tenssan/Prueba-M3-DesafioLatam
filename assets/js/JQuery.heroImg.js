jQuery.fn.heroImg = function(id){
    var element = this;
    const accessToken = '4905856019427443';
    $.ajax({
        type: 'GET',
        url: "https://superheroapi.com/api.php/" + accessToken + "/" + id,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            var content = `<img src="${data.image.url}" alt="${data.name}">`;
            element.html(content);
        },
    })
    return this;
};