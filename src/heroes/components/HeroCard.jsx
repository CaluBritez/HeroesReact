import { Link } from "react-router-dom";

export const HeroCard = (hero) => {

    const imgHero = `/assets/heroes/${hero.id}.jpg`;
    return (
        <div className="col">
            <div className="card">    
                <div className="card-body">
                    <img src={imgHero} className="card-img" alt={hero.superhero} />
                    <h5 className="card-title">{hero.superhero}</h5>
                    <p className="card-text">{hero.alter_ego}</p>
                    <Link to={`/hero/${hero.id}`}>Mas...</Link>
                </div>
            </div>
        </div>
    )
}
