import { createGlobalStyle } from "styled-components";
import MainSection from "./components/MainSection";

const GlobalStyles = createGlobalStyle`
* {padding:0;
margin:0;
box-sizing:border-box}
body{
 height: 100vh;
 width:100vw;
 background-color:purple;
}
#root{
  height: 100%;
  width:100%;

}`;

function App() {
  return (
    <>
      <GlobalStyles />
      <MainSection />
    </>
  );
}

export default App;
