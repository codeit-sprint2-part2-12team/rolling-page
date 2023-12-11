import GlobalStyle from './GlobalStyle';
import SecondaryButton from './components/SecondaryButton';

function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <SecondaryButton>Button</SecondaryButton>
      <SecondaryButton disabled>Disabled</SecondaryButton>
    </div>
  );
}

export default App;
