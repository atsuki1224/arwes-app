
import React from 'react';
import ReactDOM from 'react-dom';
import { Logo, ThemeProvider,Loading,  createTheme,
  SoundsProvider,Words, createLoader, createPlayer, createSounds, Link, Button, Arwes } from 'arwes';
const App = () => (
  <ThemeProvider theme={createTheme()}>
    <Arwes animate show>
    <Logo animate size={300} />
        <h3><Words animate>A cyberpunk UI project</Words></h3>
        <p><Words animate>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet
        cupiditate laboriosam sunt libero aliquam, consequatur alias ducimus adipisci
        nesciunt odit? Odio tenetur et itaque suscipit atque officiis debitis qui.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet
        cupiditate laboriosam sunt libero aliquam, consequatur alias ducimus adipisci
        nesciunt odit? Odio tenetur et itaque suscipit atque officiis debitis qui.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet
        cupiditate laboriosam sunt libero aliquam, consequatur alias ducimus adipisci
        nesciunt odit? Odio tenetur et itaque suscipit atque officiis debitis qui.
        </Words></p>
        <p><Words animate layer='success'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet
        cupiditate laboriosam sunt libero aliquam, consequatur alias ducimus adipisci
        nesciunt odit? Odio tenetur et itaque suscipit atque officiis debitis qui.
        </Words></p>
        <p><Words animate layer='alert'>With animations based on SciFi and designs from high technology</Words></p>
        <div style={{ margin: 20 }}>
            This is an <Link href='https://github.com/atsuki1224'>Intergalactic Link</Link>.
        </div>
      <div>
        <Loading animate />
        <Loading animate small />
        <div style={{ position: 'relative', width: 200, height: 200 }}>
            <Loading animate full />
        </div>
    </div>
    </Arwes>
  </ThemeProvider>
);
export default App;
ReactDOM.render(<App />, document.querySelector('#root'));
