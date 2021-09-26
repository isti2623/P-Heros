import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
const Team = (props) => {

    const { img, name, profession, salary, hero } = props.hero;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="col-md-4 g-4">
            <div className="item-product container-fluid mt-3">
                <div className="card h-100 shadow mb-5">
                    <img src={img} className="card-img-top img-fluid w100 img-thumbnail custom" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bold">{name}</h5>
                        <p className="text-center text-danger">{profession}</p>
                        <p className="text-center">{hero}</p>
                        <p className="card-text text-center">{salary}$</p>
                    </div>

                    <button onClick={() => props.handleAddToBag(props.hero)} type="button" className="btn btn-danger">Buy Now{element}</button>


                </div>
            </div>

        </div>
    );
};

export default Team;