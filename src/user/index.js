import React from 'react';
import styled from 'styled-components'

export const User = () => {
  
  return (
    <Grid>
      <section>
        <h1>User</h1>
        user block
      </section>
      <section></section>
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

