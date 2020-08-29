import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { ThemeProvider, createTheme, Arwes, Button, Header, Footer, Logo, Project, Words, Link } from 'arwes';

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <Arwes animate show>
      {anim => (
        <div style={{ padding: 20 }} class="content">
          <Header animate>
            <h1 style={{ margin: 0 }} class="header"> <Logo animate size={30} />　Atsuki Komuro</h1>
          </Header>
            <h1 class="title">WELL COME!</h1>
            <div class="list">
             <Link href='https://github.com/atsuki1224'> <Button animate show={anim.entered} >GitHub</Button></Link>
             <Link href='https://twitter.com/akeve1224'> <Button animate show={anim.entered} >Twitter</Button></Link>
             <Link href='https://medium.com/nextbeat-engineering'> <Button animate show={anim.entered} >Mediam</Button></Link>
             <Link href='https://www.wantedly.com/users/129944770'> <Button animate show={anim.entered} >Wantedly</Button></Link>
          </div>
          <Project animate header='PROFILE' style={{padding: 130}}>
            <p><Words animate show={anim.entered}>
              今年の4月にネクストビートのエンジニアとして入社した小室と申します。
            </Words>
            <Words animate show={anim.entered}>
              今回はARWESというフームワークを使用してReactで静的なページを作成してみました。
            </Words></p>
          </Project>
            <Footer animate>
              <Link href='https://github.com/arwes/arwes'><small class="footer">ARWES</small></Link>
            </Footer>
      </div>
      )}
    </Arwes>
  </ThemeProvider>
);

export default App;
ReactDOM.render(<App />, document.querySelector('#root'));
