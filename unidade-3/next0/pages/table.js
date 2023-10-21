import React from 'react';

function Mytable() {
    return (
        <table className="mytable" border="1">
                <thead>
                    <tr><th>Nome</th><th>Marca</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nome1</td>
                        <td>Marca1</td>
                    </tr>
                    <tr>
                        <td>Nome2</td>
                        <td>Marca2</td>
                    </tr>
                </tbody>
        </table>
    );
}

export default Mytable;