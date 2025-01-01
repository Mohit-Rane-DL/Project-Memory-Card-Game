import './Card.css';

// eslint-disable-next-line react/prop-types
function Card({name, url, handleChange}) {
    return (
        <div className="card" onClick={handleChange}>
            <img src={url} alt={name} />
            <h2>{name}</h2>
        </div>
    );
}

export {Card};