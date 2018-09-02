import React, { Component } from 'react';
import './tbl.css';

class PrincipalTb extends Component {
    render(){
        return(
            <table class="table table-hover">
            <thead>
              <tr>
                <th  className = "rowprinc" scope="col">Data</th>
                <th  className = "rowprinc" scope="col">Hora</th>
                <th  className = "rowprinc" scope="col">Esporte</th>
                <th  className = "rowprinc" scope="col">Local</th>
                <th  className = "rowprinc" scope="col">Jogadores</th>
                <th  className = "rowprinc" scope="col">Entrar</th>
              </tr>
            </thead>
           </table>
        );
    }
}

export default PrincipalTb;