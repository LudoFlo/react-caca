import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            seriesList: [],
            seriesEpisodesList: [],
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    componentDidMount() {

        fetch('seriesList.json',{})
            .then(response => response.json())
            .then(seriesListDepuisFichier => {
                this.setState({seriesList: seriesListDepuisFichier});

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                alert("j'ai fait ce que j'ai pu");
            });

        fetch('seriesEpisodesList.json',{})
            .then(response => response.json())
            .then(seriesListDepuisFichier => {
                this.setState({seriesEpisodesList: seriesListDepuisFichier});

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                alert("j'ai fait ce que j'ai pu");
            });
    }

    render() {
        console.log(this.state.seriesList.id);
        console.log(this.state.seriesList[0]);
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <ul>
                    {this.state.value !== "" ?
                        this.state.seriesList.filter(
                            sn => sn.seriesName.toLowerCase().trim().indexOf(this.state.value) > -1
                        ).map(item => <li key={item.id}>{item.seriesName}
                            <ul>
                                {/*this.state.seriesEpisodesList.length ?*/
                                    this.state.seriesEpisodesList.filter(
                                        si => si.serie_id == item.id
                                    ).map(episode => episode.episodes_list.filter(
                                        en => en.episodeName
                                        ).map(name => <li>{name.episodeName}</li>)
                                    )
                                }
                            </ul>
                        </li>)
                        : <li>Loading...</li>
                    }
                </ul>
            </div>
        )
    }
}

export default App;



/*
        };
    }

    componentDidMount() {

        fetch('seriesList.json',{})
            .then(response => response.json())
            .then(seriesListDepuisFichier => {
                this.setState({seriesList: seriesListDepuisFichier});

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                alert("j'ai fait ce que j'ai pu");
            });

    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.seriesList.length ?
                        this.state.seriesList.map(item => <li key={item.id}>{item.seriesName}</li>)
                        : <li>Loading...</li>
                    }
                </ul>
            </div>
        )
    }
}


export default App;*/
