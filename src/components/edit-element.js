import React, { Component } from 'react';
import './edit-element.css';

export class EditElement extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.handleChange = props.handleChange;
        this.handleCancel= props.handleCancel;
    }

    render() {
        let style = {
            position: 'fixed',
            top: this.props.editBlock_y + 'px',
            left: this.props.editBlock_x + 'px'
        };

        return (
            <div className="edit-form" style={style}>

                <form onSubmit={this.handleChange}>
                    <div className="edit-form__fields">
                        <div className="form-group">
                            <label>Text</label>
                            <input type="text" defaultValue={this.props.text}/>
                        </div>
                        <div className="form-group">
                            <label>Font size(px)</label>
                            <input type="number" placeholder="14" min="0" max="100" step="1"/>
                        </div>
                    </div>
                    <div className="edit-form__controls">
                        <button className="blueBtn" type='submit'>Save</button>
                        <a onClick={this.handleCancel} className="blueBtn">Cancel</a>
                    </div>

                </form>
            </div>
        )
    }
}