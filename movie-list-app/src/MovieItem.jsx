import React from 'react';

function MovieItem(props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td className={`color-${props.rating * 10}`}>{Number.parseFloat(props.rating).toFixed(1)}</td>
        </tr>
    )
}

export default MovieItem;