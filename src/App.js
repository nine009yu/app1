import React from "react";
import { Header,Content,Footer } from "./func-components"
import Calendar from "./class-components";

function App() {

  return (
    // [<Header/>,<Content/>,<Footer/>]
    <>
      <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;
