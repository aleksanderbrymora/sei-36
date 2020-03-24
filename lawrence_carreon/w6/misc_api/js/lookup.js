const maxHP = 216.00;
const maxStat = 190.00;

const updateStats = function(){
    const url = $(this).val();
    debugger;
    $.ajax(url).done(function (data){
        console.log(data);
        console.log("updated stats!");
    });
};

const generatePokemon = function() {
    const pokemonNo = $(this).attr("id");
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNo}`;
    $('.generated_pokemon').fadeOut(500, function(){
        $('.poke_profile, .poke_moves, .poke_nature, .poke_stats').empty(); // clears the current pokeprofile if any
        $.ajax(url).done(function (data) {
            // main profile
            $('.poke_profile').append(
                `<h2>${data.name}</h2>
                <img src="${data.sprites.front_default}">
                <img src="${data.sprites.front_shiny}">
                <p><strong>Pokedex Entry: </strong> #${data.id}</p>
                <p><strong>Typing: </strong> ${data.types.map( element => { return element.type.name }).sort().join(" / ")}</p>
                <p><strong>Possible Abilities: </strong> ${data.abilities.map( element => { return element.is_hidden ? `${element.ability.name} (hidden)` : `${element.ability.name}` }).sort().join(" / ")}</p>`
            );
            // move pool
            const $moveTable = $('<table id="moves" class="list"><thead><tr><th>Move Name:</th></tr></thead><tbody></tbody></table>');
            data.moves.forEach( el => { $moveTable.find("tbody").append(`<tr><td>${el.move.name}</td></tr>`) });
            $('.poke_moves').append(
                `<h2>${data.moves.length} move(s) in movepool:</h2>
                <div class="poke_list"></div>`
            );
            $('.poke_moves .poke_list').append($moveTable);
            $moveTable.DataTable();
            // natures
            $.ajax("https://pokeapi.co/api/v2/nature?limit=30").done(function(data){
                $('.poke_nature').append("<form class='natures'></form>");
                const $natureForm = $('.natures');
                data.results.forEach( nature => {
                    $natureForm.append(
                        `<input type='checkbox' id='${nature.name}' name='${nature.name}' value='${nature.url}'>
                        <label for='${nature.name}'> ${nature.name} </label><br>`
                    );
                });
            });
            // stats
            data.stats.forEach( el => {
                $('.poke_stats').append(
                    `<p><strong>${el.stat.name}: (${el.base_stat})</strong></p>
                    <div id="${el.stat.name}" class="stats_bar"></div>`
                );
                const divisor = el.stat.name === "hp" ? maxHP : maxStat;
                const barLength = (parseFloat(el.base_stat.toString()) / divisor) * 100.00;
                let color = "";
                if ( barLength <= 5.00 ){
                    color = "red";
                }else if( barLength <= 25.00){
                    color = "orange";
                }else if( barLength <= 50.00){
                    color = "yellow";
                }else{
                    color = "green";
                };
                $(`#${el.stat.name}.stats_bar`).css({"width":`${barLength}%`, "background-color":`${color}`});
            });
            // post poke-setup
            $('.generated_pokemon').fadeIn(500);
        }).fail(function () {
            alert('Could not retrieve data!');
        })
    });
};


$(document).ready(function () {
    let count = 1;
    pokemon.names.forEach( name => {
        $('#pokemon tbody').append(`<tr><td>${count}</td><td>${name}</td><td><button class="pokemon_select" id="${count}">Generate</button></td></tr>`);
        count++;
    });
    $('.natures').on('click', 'input[type=checkbox]', updateStats);
    $('#pokemon').on("click", "button", generatePokemon);
    $('#pokemon').DataTable();
});
