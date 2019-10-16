import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const Entities = props => {
  const { routerProps, entities } = props;
  const assetId = parseInt(routerProps.match.params.assetId); 
  const entitiesDos = entities.filter(item => item.id_asset === assetId );
    
  if (entitiesDos[0]) {
  return (
    <div>
      {entitiesDos.map(item => {
        return(
        <p>{item.id_asset}</p>
        )
      })}
      <Link to={`/`} className="charapter-link">
        <button>click</button>
      </Link>
      <p>entities</p>
    </div>
  )
  }else{

  }

}

export default Entities;