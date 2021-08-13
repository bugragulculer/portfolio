import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';
import Podcast from './pages/Podcast';
import Notion from './pages/Notion';
import { data } from './content/data';

document.title = 'Bugra Gulculer';

const Setup = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home data={data.EN} recentWorks="My Recent Works" otherProjects="Other Projects" />
      </Route>
      <Route path="/podcast">
        <Podcast data={data.EN} />
      </Route>
      <Route path="/notion">
        <Notion data={data.EN} />
      </Route>
      <Route exact path="/tr">
        <Home data={data.TR} recentWorks="Mevcut İşlerim" otherProjects="Diğer Projelerim" />
      </Route>
      <Route path="/tr/podcast">
        <Podcast data={data.TR} />
      </Route>
      <Route path="/tr/notion">
        <Notion data={data.TR} />
      </Route>
      <Route path="/tr/*">
        <Error data={data.TR} />
      </Route>
      <Route path="*">
        <Error data={data.EN} />
      </Route>
    </Switch>
  </Router>
);

export default Setup;
