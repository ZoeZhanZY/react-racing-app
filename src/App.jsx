import "./App.scss";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import axios from "axios";
import TabBar from "./components/TabBar/TabBar";
import Header from "./components/Header/Header";

const App = () => {
  const [fullList, setFullList] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [renderedList, setRenderedList] = useState([]);

  useEffect(() => {
    console.log({ isStarted });
    if (isStarted) {
      setIsStarted(false);
    } else {
      axios
        .get(
          "https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10"
        )
        .then(({ data }) => {
          const rawListData = _.values(data.data.race_summaries);

          const trimmedRawList = rawListData.map((el) => {
            return {
              meeting_name: el.meeting_name,
              race_number: el.race_number,
              race_id: el.race_id,
              category_id: el.category_id,
              advertised_start: el.advertised_start.seconds,
            };
          });

          const orderedListData = trimmedRawList.sort((a, b) => {
            return a.advertised_start - b.advertised_start;
          });

          setFullList(orderedListData);
          console.log("get new data", { fullList });
        });
    }
  }, [isStarted]);

  useEffect(() => {

    switch (activeTab) {
      case "All":
        const allListData = [...fullList]?.slice(0, 5);
        setRenderedList(allListData);
        break;
      case "RHRacing":
        const GHListData = fullList?.filter(
          (el) => el.category_id === "9daef0d7-bf3c-4f50-921d-8e818c60fe61"
        );
        setRenderedList(GHListData);
        break;
      case "HNRacing":
        const HNListData = fullList?.filter(
          (el) => el.category_id === "161d9be2-e909-4326-8c2c-35ed71fb460b"
        );
        setRenderedList(HNListData);
        break;

      case "HRacing":
        const HListData = fullList?.filter(
          (el) => el.category_id === "4a2788f8-e825-4d36-9894-efd4baf1cfae"
        );
        setRenderedList(HListData);
        break;
      default:
    }
    console.log("useEffect setRenderedList", { renderedList });
  }, [activeTab, fullList]);
  return (
    <div className="App">
      <Header />
      <TabBar
        activeTab={activeTab}
        renderedList={renderedList}
        setActiveTab={setActiveTab}
        setIsStarted={setIsStarted}
      />
    </div>
  );
};

export default App;
