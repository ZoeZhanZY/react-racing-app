import "./App.scss";
import React from "react";
import TabBar from './components/TabBar/TabBar';
import Header from './components/Header/Header'


const App = () => {
  return (
    <div className="App">
     
			<Header/>
      <TabBar />
      
   
    </div>
  );
};

export default App;
