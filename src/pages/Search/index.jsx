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

    renderItem(item) {
        return (
                <li key={`item_${item.id}`}>
                    { item.title }
                </li>
        );
    }

    render() {
        return (
            <div>
                <input type="text" onChange={ this.onSearch } />

                <ul>
                    { this.state.results.map(this.renderItem) }
                </ul>
            </div>
        );
    }
}

export default Search;