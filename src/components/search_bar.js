import React, {
    Component
} from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputData: ''
        }
        // this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return (<div className=" col-md-8 p-3">
             < input type = "text"
            className = "form-control"
            value = {
                this.state.inputData
            }
            placeholder = "Search"
            onChange = {
                event => this.onInputChange(event.target.value)
            }
            />
            </div>
        );
    }

    onInputChange = (term) => {
        this.setState({
            inputData: term
        });
        this.props.onSearchTermChange(term);
    }
}