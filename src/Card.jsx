import './Card.css';

// eslint-disable-next-line react/prop-types
function Card({url, handleChange}) {
    return (
        <div className="card" onClick={handleChange}>
            <img src={url} alt='' />
        </div>
    );
}

export {Card};