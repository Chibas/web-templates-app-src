import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TemplatesList } from './components/template-list';
import { TemplateItem } from './components/template-item';
import NotFound from "./components/not-found";
import {DataService} from "./services/data-service";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.dataService = new DataService();
  }
	render() {
		return (
			<Router>
				<Switch>
					<Route exact={true}  path="/" render={
						(props) => <TemplatesList {...props} services={{dataService: this.dataService}} />
					} />
					<Route path="/templates/:templateId" render={
						(props) => <TemplateItem {...props} services={{dataService: this.dataService}} />
					}
					/>
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
}



export default App;

