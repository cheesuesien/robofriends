import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBar from '../components/SearchBar.js';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}))
		
	}
	
	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		
		return this.state.robots.length === 0 ? 
			<h1>Loading</h1>
			:
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBar searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} /> 
				</Scroll>
			</div>
	}
}

export default App;
