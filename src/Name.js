import React from 'react';

function Name( props ){
    let fullGreeting = `Hey there ${ props.firstName }`;

    return(
        <h2 className="Name">
            { fullGreeting }
        </h2>
    );
}

export default Name;