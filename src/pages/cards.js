import React, { Component } from 'react';

const linguagem = localStorage.getItem('idioma');
const URL = "https://ddragon.leagueoflegends.com/cdn/9.22.1/data/" + linguagem + "/champion.json";

class cards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(URL)
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error ('Algo errado');
      }
    })
    .then(result => this.setState({ items: result.data, isLoading: false}))
  }

  render() {
    const { items, isLoading, error } = this.state;
    if (isLoading) { return <p>Loading...</p>; }
    if (error) { return <p>{error.message}</p>; }
    return (
      <div>
        {Object.keys(items).map((key, item) => (
          <div key={item}>
            {items[key].name} - {items[key].title} - {items[key].blurb}
            <img src={" http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + items[key].id + "_0.jpg" }/>
          </div>
        ))}
      </div>
    );
  }
}

export default cards;