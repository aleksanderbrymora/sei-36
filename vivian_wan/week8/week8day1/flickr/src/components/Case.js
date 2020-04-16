import React from 'react';


const Case = (props) => {
    console.log( '<Case />', props );
    return (
        <div>
            { props.cases }
        </div>
    )
}

export default Case;