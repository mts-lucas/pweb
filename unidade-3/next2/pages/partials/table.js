import React from 'react';

export function MyTable(props) {
    return (
        <table className="mytable" border="1">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Marca</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.nome}</td>
                    <td>{props.marca}</td>
                </tr>
            </tbody>
        </table>
    )
}



