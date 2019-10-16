const API = 'https://cors-anywhere.herokuapp.com/https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos/entities'

const fetchEntities= ()=>{
  return fetch(API).then(response => response.json())
}

export {fetchEntities}