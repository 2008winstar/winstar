import React from 'react';
import ReactDOM from 'react-dom';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

export class ColorApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        };
        this.addColor = this.addColor.bind(this);
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: Math.random().toString(),
                title,
                color,
                rating: 0
            }
        ]
        this.setState({colors});
    }

    render() {
        const {colors} = this.state;
        return (
            <div className="app">
                <AddColorForm onNewColor={this.addColor}/>
                <ColorList colors={colors}/>
            </div>
        )
    }
}

ReactDOM.render(<ColorApp/>, document.getElementById('container'));
