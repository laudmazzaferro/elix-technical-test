import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const Entities = props => {
  const { routerProps ,entities ,menuCollapsible ,idCollap ,printCode} = props;
  const assetId = parseInt(routerProps.match.params.assetId); 
  const entitiesDos = entities.filter(item => item.id_asset === assetId );
  
  if (entitiesDos[0]) {
   
  return (
    <div>
      {entitiesDos.map(item => {
        return(
          <div>
            <p onClick={menuCollapsible} id={item.id}>{item.id_asset}</p>
            <div className={`collapsible ${(parseInt(item.id) === parseInt(idCollap)) ? '' : 'hidden'}`}>
              <button onClick={printCode} id={item.t_entry_code}>
                Imprimir en consola
              </button>
            </div>
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