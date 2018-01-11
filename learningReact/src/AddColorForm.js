import React from 'react';

class AddColorForm extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title" type="text" placeholder="color title..." required/>
                <input ref="_color" type="color" required/>
                <button>ADD</button>
            </form>
        )
    }

    submit(e) {
        const {_title, _color} = this.refs;
        e.preventDefault();
        this.props.onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }
}

export default AddColorForm;
