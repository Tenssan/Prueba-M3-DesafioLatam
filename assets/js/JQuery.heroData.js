jQuery.fn.heroData = function(id){
    var element = this;
    const accessToken = '4905856019427443';
    $.ajax({
        type: 'GET',
        url: "https://superheroapi.com/api.php/" + accessToken + "/" + id,
        dataType: 'json',
        success: function (data) {
            var content = `
                <h3> Nombre: ${data.name}</h3>
                <h5> Conexiones: ${data.connections['group-affiliation']}</h5>
                <h5> Publicado por: ${data.biography.publisher}</h5>
                <h5> Ocupación: ${data.work.occupation}</h5>
                <h5> Primera aparición: ${data.biography['first-appearance']}</h5>
                <h5> Altura: ${data.appearance.height}</h5>
                <h5> Peso: ${data.appearance.weight}</h5>
                <h5> Alianzas: ${data.biography.aliases}</h5>
            `;
            element.html(content);
        },
    })
    return this;
};