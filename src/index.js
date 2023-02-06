import './style/style.css';
import $ from 'jquery';
import moment from 'moment';

$('#search-button').on('click', () => {
    $('#movie-list').html('');
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data:{
            'apikey' : '62f7b169',
            'i' : 'tt3896198',
            's': $('#search-input').val()   
        },
        success : result => {
            if (result.Response == 'True'){
                let movies = result.Search;

                $.each(movies, (i, data) => {
                    $('#movie-list').append(`
                    <div class="container">
                    <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h1 class="card-title">`+ data.Title +`</h1>
                        <h2 class="card-title">Year Release : `+ data.Year +`</h2>
                        <h3 class="card-title">imdbID : `+ data.imdbID +`</h3>
                        <h4 class="card-title">Type : `+ data.Type +`</h4>
                    </div>
                    </div>
                    `)
                });
            }else{
                $('#movie-list').html('<h1>movie not found</h1>');
            }
        }
    });
});

class TextCenter extends HTMLElement {
    connectedCallback (){
        this.innerHTML = `
        <h2 style="text-align:center;">Let's Get The Information That You Wanted!`;
    }
}

customElements.define('text-center', TextCenter);