import React from 'react';

import Container from '@mui/material/Container';

function Image(props) {
    return (
        <Container>
            <img className="img-fluid" src={props.link} alt={props.title}/>
        </Container>
    )
}

export default Image