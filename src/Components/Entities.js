import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const Entities = props => {
  const { routerProps, entities } = props;
  const assetId = parseInt(routerProps.match.params.assetId); 
  const entitiesDos = entities.filter(item => item.id_asset === assetId );
    
  if (entitiesDos[0]) {
   const {menuCollapsible}=this.props
  return (
    <div>
      {entitiesDos.map(item => {
        return(
          <div>
            <p onClick={menuCollapsible}>{item.id_asset}</p>
          </div>
        )
      })}
      <Link to={`/`} className="charapter-link">
        <button>Volver</button>
      </Link>
      <p>entities</p>
    </div>
  )
  }else{
    return (
      <React.Fragment>
        <p>Entidades no existentes</p>
        <Link to="/" >Volver </Link>
      </React.Fragment>
    )
  }

}

export default Entities;