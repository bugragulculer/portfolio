import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Error, Podcast, Notion } from "./pages";
import { data } from "./content/data";
import { RootStateOrAny, useSelector } from "react-redux";

document.title = "Bugra Gulculer";

const Setup = () => {
  const lang = useSelector((state: RootStateOrAny) => state.lang);
  const [content, setContent] = useState(data.EN);
  useEffect(
    () => (lang === "en" ? setContent(data.EN) : setContent(data.TR)),
    [lang]
  );
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            data={content}
            recentWorks="My Recent Works"
            otherProjects="Other Projects"
          />
        </Route>
        <Route path="/podcast">
          <Podcast data={content} Podcast={undefined} />
        </Route>
        <Route path="/notion">
          <Notion
            data={content}
            recentWorks={""}
            otherProjects={""}
            Notion={{
              planner: "",
              tracker: "",
            }}
            Planner={""}
            Tracker={""}
            planner={""}
            tracker={""}
          />
        </Route>
        <Route path="*">
          <Error data={content.Error} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Setup;
