import './App.css';
import Navigation from './components/navigation';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import ProjectDetail from './pages/projectDetail';
import TeamDetail from './pages/teamDetail';
import About from './pages/about';
import projectData from './assets/projectsData';
function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path='/home' exact>
          <Home projectData={projectData} />
        </Route>
        <Route path='/team/:id'>
          <TeamDetail />
        </Route>
        <Route path='/projectinfo/:id'>
          <ProjectDetail projectData={projectData} />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='*'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </>
  );
}

export default App;
