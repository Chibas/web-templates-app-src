import React, { Component } from 'react';
import { EditElement } from "./edit-element";
import { Link } from 'react-router-dom';
import './template-item.css';

export class TemplateItem extends Component {
	constructor(props){
		super(props);

		this.state = {
			template: null,
			editableItem: null,
			editableText: '',
			showEditBlock: false,
			editBlock_x: null,
			editBlock_y: null
		}
	}

	componentWillMount() {
		console.log(this.props);
		this.dataService = this.props.services.dataService;
		this.getData();
	}

	getData() {
		let id = parseInt(this.props.match.params.templateId, 10);
		let template = this.dataService.getItem(id)[0];
		this.setState({template: template});
	}

	createMarkup(string) {
		return {__html: string};
	}

	selectEditable(e) {
		console.log(e);
		if (e.target.classList.contains('editable') && this.state.showEditBlock !== true) {
			this.setState({editableItem: e.target});
            this.setState({editableText: e.target.innerText});
			this.setState({showEditBlock: true, editBlock_x: e.clientX, editBlock_y: e.clientY + 20});
		} else {
			// TODO
		}
	}

	handleChange(e) {
		e.preventDefault();
		let form = e.target;
		let newText = form[0].value; // GETTING TEXT FIELD VALUE
		let editable = this.state.editableItem;
		editable.innerText = newText;
		let template = document.querySelector('.templates__item');

		let editedMarkup = this.html2text(template); // CONVERTING MARKUP TO STRING
		let editedTemplate = {
			template: editedMarkup,
			id: this.state.template.id,
			name: this.state.template.name + ' edited',
			modified: +new Date()
		};
		this.sendChanges(editedTemplate, this.state.template.id);
        this.setState({showEditBlock: false});
		console.log(this.dataService.getList());
	}

	handleCancel() {
		this.setState({showEditBlock: false});
	}

	sendChanges(templateObject, id) {
		this.dataService.editItem(templateObject, id);
		this.getData();
	}

	html2text(html) {
		let newHtml = html.outerHTML;
		// let b = { html: newHtml };
		// let result = JSON.stringify(html.outerHTML);
		return newHtml;
	}

	render() {
		return (
			<div className="page-wrap">
				<Link className="blueBtn" to="/">Back to list</Link>
				<div className="templates__item-wrap" onClick={this.selectEditable.bind(this)}>
					<div className="templates__item__name">
						<h2>Template name: {this.state.template.name}</h2>
					</div>
					<div className="templates__item" dangerouslySetInnerHTML={this.createMarkup(this.state.template.template)}></div>
					{
						this.state.showEditBlock &&
						<EditElement
							editBlock_x={this.state.editBlock_x}
							editBlock_y={this.state.editBlock_y}
							handleChange={this.handleChange.bind(this)}
							handleCancel={this.handleCancel.bind(this)}
							text={this.state.editableText}
						/>
					}
						</div>
			</div>

		)
	}
}