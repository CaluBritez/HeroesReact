import { useForm } from "../../hooks/useForm.js";
import {HeroCard} from "../components/HeroCard.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName.js";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  

  const {q = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);
  


  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);
  }


  return (
    <>

      <h1 className="mt-3">Search Page</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {(q === '')
            ? <div className="alert alert-primary">Search a hero</div>
            : (heroes.length === 0) && <div className="alert alert-danger">No Hero Found {q}</div>
          }

          {heroes.map(heroes => (
            <HeroCard key={heroes.id} {...heroes}/>
          ))}

        </div>
      </div>



    </>
    )
}