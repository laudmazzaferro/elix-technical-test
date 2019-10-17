import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import ContextMenu from 'react-context-menu';


const Entities = props => {
  const { routerProps, entities, menuCollapsible, idCollap, printCode } = props;
  const assetId = parseInt(routerProps.match.params.assetId);
  const entitiesDos = entities.filter(item => item.id_asset === assetId);

  if (entitiesDos[0]) {

    return (
      <React.Fragment>
        <div className="entities-container">
          <ul className="entities-list">
            {entitiesDos.map(item => {
              return (
                <li className="entities-item_list">
                  <div className="container-ent-item_list">
                    <div className="box-ent-item_list" onClick={menuCollapsible} id={item.id}>
                      <h2 className="title-ent-item_list" >Entry code:  {item.t_entry_code}  <i className={`fas fa-chevron-down ${(parseInt(item.id) === parseInt(idCollap)) ? 'hidden' : ''}`}></i>
                      </h2>
                      <p className="ent-area">Interior area: {item.n_entry_area_gross_interior} m2</p>
                      <p className="ent-tenant-name">Tenant name: {item.t_entry_tenant_name} </p>
                    </div>
                    {/*<ContextMenu contextId={item.id}  items={[{label:item.t_entry_code , onClick:printCode}]} />*/}
                    <div className={`collapsible ${(parseInt(item.id) === parseInt(idCollap)) ? '' : 'hidden'}`}>
                      <button className="btn-print" onClick={printCode} id={item.t_entry_code}>
                        Print on Console
                </button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <Link to={`/`} className="charapter-link">
          <button>Return</button>
        </Link>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <p>Entidades no existentes</p>
        <Link to="/" >Return </Link>
      </React.Fragment>
    )
  }

}

export default Entities;