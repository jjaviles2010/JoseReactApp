import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            results: [],
        };
    }

    onSearch = (event) => {
        const { value } = event.currentTarget;

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({ data }) => {
                // handle success
                this.setState({
                    results: data.results,
                });
                //console.log(this.state.results);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })

    }

    render() {
        return (
            <div>
                <input type="text" onChange={ this.onSearch } />
            </div>
        );
    }
}

export default Search;