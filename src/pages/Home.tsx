import React from "react";
import Header from "../components/Header";
import ContentView from "../components/ContentView";

const Home = () => {

  const [selectedView, setSelectedView] = React.useState("");

  return (
      <React.Fragment>
          <Header selectedView={selectedView} setSelectedView={setSelectedView}/>
          <ContentView selectedView={selectedView} />
      </React.Fragment>
  );
}

export default Home;