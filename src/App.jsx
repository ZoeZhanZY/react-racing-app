import "./App.scss";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import axios from "axios";
import TabBar from "./components/TabBar/TabBar";
import Header from "./components/Header/Header";

const App = () => {
  const [fullList, setFullList] = useState([]);
  const [allList, setAllList] = useState([]);
  const [grList, setGrList] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [renderedList, setRenderedList] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10")
      .then(({ data }) => {
        console.log({ data });
        const rawListData = _.values(data.data.race_summaries);
        console.log({ rawListData });
        const trimmedRawList = rawListData.map((el) => {
          return {
            meeting_name: el.meeting_name,
            race_number: el.race_number,
            race_id: el.race_id,
            category_id: el.category_id,
            advertised_start: el.advertised_start.seconds,
          };
        });
        console.log({ trimmedRawList });

        const orderedListData = trimmedRawList.sort((a, b) => {
          return a.advertised_start - b.advertised_start;
        });
        console.log({ orderedListData });
        setFullList(orderedListData);
      });
  }, []);

  useEffect(() => {
    const allListData = [...fullList]?.slice(0, 5);
    console.log({ allListData });
    setAllList(allList);
  }, [fullList]);

  useEffect(() => {
    switch (activeTab) {
      case "all":
        setRenderedList(allList);
        break;
      case "GreyhoundRacing":
        const category_id = "9daef0d7-bf3c-4f50-921d-8e818c60fe61";
        const grListData = fullList?.filter(
          (el) => el.category_id === category_id
        );
        setRenderedList(grListData);
        console.log({ renderedList });
        break;
      default:
    }
  }, [activeTab, fullList]);
  return (
    <div className="App">
      <Header />
      <TabBar
        activeTab={activeTab}
        renderedList={renderedList}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default App;
