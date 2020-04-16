import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Case from './Case';

class RonaSearch extends Component {
    constructor() {
        super();
        this.state = { cases: [] };
        this.fetchCases = this.fetchCases.bind(this);
    }


    fetchCases (c) {

        const country = c
        console.log( country )
        console.log('Searching COVID for', c);

        const URL = 'https://api.covid19api.com/country/ c /status/confirmed';
        const cases = _()
    }


    render(){
        return(
            <div>
                <h1> Rona search </h1>
                <SearchForm onSubmit={ this.fetchCases }/>
                <Case cases={ this.state.cases } />
            </div>
        )
    };
}

// class Cases = (props) => {
//     render() {
//     return (
//         <div>Cases coming soon</div>
//     );
// }

export default RonaSearch