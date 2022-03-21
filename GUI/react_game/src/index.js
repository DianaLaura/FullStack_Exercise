import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

//parameters until parsing is done

let number_castles = 5;

class Castle extends React.Component {

    render () {
        return (
            <form className="Castle" id='castle1' action="castle1.html">
                <input className="castle_img" id = "castle1_img" type="image" src="blue_castle.png" alt="castle1"></input>
            </form>
        );
    }


}
ReactDOM.render(
    <Castle />,
    document.getElementById('root')

);
