import React, { Component } from 'react';
import {DataService} from "../services/data-service";
import { Link } from 'react-router-dom';
import './template-list.css';
import TemplateThumbnail from '../assets/template.png';

export class TemplatesList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: null
		};

	}

	componentWillMount() {
		this.dataService = this.props.services.dataService;
		let data = this.dataService.getList();
		this.setState({items: data});
	}

	render() {
		let listItems = this.state.items.map((item) =>
			<li key={item.id} className="templatesList-item">
					<div className="templatesList-item__name">
						<h2>Name: {item.name}</h2>
						<h4>Type: template</h4>
						<p>Last Edited: {new Date(item.modified).toLocaleString()}</p>
					</div>
					<div className="templatesList-item__image">
						<img src={TemplateThumbnail} alt="template image"/>
					</div>
				<div className="templatesList-item__description">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				<div className="templatesList-item__footer">
					<Link to={`/templates/${item.id}`}>Edit</Link>
				</div>
			</li>
		);

		return (
			<ul className='templatesList'>
				{listItems}
			</ul>
		)

	}
}