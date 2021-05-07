import React from 'react';

const Gender = (props) => {
    const { match } = props

    return (
        <div className = 'gender'>
            <h3>{ match.params.gender }</h3>
        </div>
    );
};

export default Gender;