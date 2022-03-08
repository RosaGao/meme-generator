import PropTypes from "prop-types";

function Output({ imageSrc, texts }) {  

    return (
        <section className="section is-medium pt-0 pb-6 has-text-centered" >
            <article className="message is-medium" >
                <div className="message-body" id="output">
                <div className="meme">
                    <img src={imageSrc}
                    id="img" alt={{width:"800rem", height:"auto"}}/>
                    <h2 id="top-text" className="top">{texts.topText}</h2>
                    <h2 id="bottom-text" className="bottom">{texts.bottomText}</h2>
                </div>
                </div>
            </article>
        </section>
    );
}

export default Output;
Output.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    texts: PropTypes.object.isRequired,
}