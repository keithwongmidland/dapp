import React from 'react';
import styled from 'styled-components'

import Gun from 'gun/gun'
// import Sea from 'gun/sea'

const StyledApp = styled.div`
  
`

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.gun = Gun('2353252');
    this.gun.get('mark').on(function(data, key){
      console.log("update:", data);
    });

    this.forceUpdate()
  }

  render() {
    return (
      <StyledApp>
        <div>
          Hello World
        </div>
      </StyledApp>
    )
  }
}

export default App;
