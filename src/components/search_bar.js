import React, {
    Component
} from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputData: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return ( < input type = "text"
            className = "form-control"
            value = {
                this.state.inputData
            }
            placeholder = "Search"
            onChange = {
                this.onInputChange
            }
            />
        );
    }

    onInputChange(event) {
        this.setState({
            inputData: event.target.value
        });
    }
}