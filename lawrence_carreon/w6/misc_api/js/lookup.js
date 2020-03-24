const updateStats = function(){
    const url = $(this).attr("url");
    const natureSet = $(this).attr("id");
    if( pokemon.nature == natureSet){ return };
    pokemon.nature = natureSet;
    $("#nature_indicator h3 span").html(natureSet); 
    $.ajax(url).done(function (data){
        Object.keys(pokemon.statLine).forEach( stat => {
            $(`#${stat}`).css({"width":`${pokemon.statLine[stat] * 2}%`});
        });
        if( data.decreased_stat === null || data.increased_stat === null){return};
        const newDecreaseWidth = pokemon.statLine[data.decreased_stat.name] * 1.6;
        const newIncreaseWidth = pokemon.statLine[data.increased_stat.name] * 2.4;
        $(`#${data.decreased_stat.name}`).css({"width":`${newDecreaseWidth}%`});
        $(`#${data.increased_stat.name}`).css({"width":`${newIncreaseWidth}%`});
    }).fail(function () {
        alert('Could not retrieve data!');
    });
};

const showMoveDetails = function() {
    const url = $(this).attr('url');
    $('#move_descript').empty();
    $.ajax(url).done(function (data){
        let description = data.effect_entries[0].effect;
        if (description.includes("$effect_chance")){description = description.replace("$effect_chance", `${data.effect_chance}`)};
        $('#move_descript').append(
            `<h2>Move details for: ${data.name}</h2>
            <p><strong>Power: </strong>${data.power}</p>
            <p><strong>Accuracy: </strong>${data.accuracy}</p>
            <p><strong>PP (Number of Uses): </strong>${data.pp}</p>
            <p><strong>Priority: </strong>${data.priority}</p>
            <p><strong>Move Typing: </strong>${data.type.name}</p>
            <p><strong>Attack stat used: </strong>${data.damage_class.name}</p>
            <p><strong>Description: </strong>${description}</p>`
        );
    }).fail(function () {
        alert('Could not retrieve data!');
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
                `<h1>${data.name}</h1>
                <img src="${data.sprites.front_default}">
                <img src="${data.sprites.front_shiny}">
                <p><strong>Pokedex Entry: </strong> #${data.id}</p>
                <p><strong>Typing: </strong> ${data.types.map( element => { return element.type.name }).sort().join(" / ")}</p>
                <p><strong>Possible Abilities: </strong> ${data.abilities.map( element => { return element.is_hidden ? `${element.ability.name} (hidden)` : `${element.ability.name}` }).sort().join(" / ")}</p>
                <div id="move_descript"></div>`
            );
            // move pool
            const $moveTable = $('<table id="moves" class="list"><thead><tr><th>Move Name:</th><th>Show?</th></tr></thead><tbody></tbody></table>');
            data.moves.forEach( el => { $moveTable.find("tbody").append(`<tr><td>${el.move.name}</td><td><button url="${el.move.url}">Get Details</button></td></tr>`) });
            $('.poke_moves').append(
                `<h2>${data.moves.length} move(s) in movepool:</h2>
                <div class="poke_list"></div>`
            );
            $('.poke_moves .poke_list').append($moveTable);
            $moveTable.DataTable();
            // natures
            $.ajax("https://pokeapi.co/api/v2/nature?limit=30").done(function(data){
                $('.poke_nature').append(
                    `<div id="nature_indicator">
                        <h3>Current Nature: <span></span></h3>
                    </div>
                    <div class="nature_buttons"></div>`
                );
                data.results.forEach( nature => {
                    $('.nature_buttons').append(
                        `<button class="natures" id='${nature.name}' url='${nature.url}'>${nature.name}</button>`
                    );
                });
            }).fail(function () {
                alert('Could not retrieve data!');
            });
            // stats
            data.stats.forEach( el => {
                $('.poke_stats').append(
                    `<p><strong>${el.stat.name}: (${el.base_stat})</strong></p>
                    <div id="${el.stat.name}" class="stats_bar"></div>`
                );
                const divisor = el.stat.name === "hp" ? pokemon.maxHP : pokemon.maxStat;
                let barLength;
                if (data.name === "shedinja" && el.stat.name === "hp"){
                    barLength = 1;
                }else{
                    barLength = (parseFloat(el.base_stat.toString()) / divisor) * 100.00;
                };
                pokemon.statLine[el.stat.name] = barLength;
                let color = "";
                if ( barLength <= 20.00 ){
                    color = "red";
                }else if( barLength <= 35.00){
                    color = "orange";
                }else if( barLength <= 50.00){
                    color = "yellow";
                }else{
                    color = "green";
                };
                $(`#${el.stat.name}.stats_bar`).css({"width":`${barLength * 2}%`, "background-color":`${color}`}); //barLength is doubled for better user visibility of stat disparity
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
        $('#pokemon tbody').append(`<tr><td>${count}</td><td>${name}</td><td><button id="${count}">Generate</button></td></tr>`);
        count++;
    });
    $('.poke_nature').on('click', 'button', updateStats );
    $('.poke_moves').on('click', 'button', showMoveDetails);
    $('#pokemon').on("click", "button", generatePokemon);
    $('#pokemon').DataTable();
});
