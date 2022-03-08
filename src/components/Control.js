import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topText: "",
            bottomText: ""
        };
    }
    
    fetchMemes = async (event) => {
        event.preventDefault();
        const memeAPI = "https://api.imgflip.com/get_memes";
        try {
            const response = await axios.get(memeAPI);
            const data = response.data;
            this.props.generateMeme(data.data.memes);
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = (event) => {
        let target = event.target;
        let name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    render() {
        return (
            <section className="section">
                <div className="field has-addons">
                    <div className="control is-expanded">
                    <input
                        className="input is-large is-fullwidth is-family-monospace"
                        id="top-input"
                        placeholder="Top text"
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    </div>
                </div>
                <div className="field has-addons">
                    <div className="control is-expanded">
                    <input
                        className="input is-large is-fullwidth is-family-monospace"
                        id="bottom-input"
                        placeholder="Bottom text"
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    </div>
                </div>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <button 
                            className="button is-link is-large is-fullwidth" 
                            id="go-btn"
                            onClick={(event)=>{
                                this.fetchMemes(event);
                                this.props.updateText(this.state);
                            }}>
                            Go!
                        </button>
                    </div>
                </div>
            </section>
        );
    }

}

export default Control;

Control.propTypes = {
    generateMeme: PropTypes.func.isRequired,
    texts: PropTypes.object.isRequired,
    updateText: PropTypes.func.isRequired
}