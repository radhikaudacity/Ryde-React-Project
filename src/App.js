import React, { Suspense, lazy, Fragment } from 'react';
import './App.css';
import Navigation from './components/navigation';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import ProjectDetail from './pages/projectDetail';
import TeamDetail from './pages/teamDetail';
import About from './pages/about';
import Contact from './pages/contact';
import projectData from './assets/projectsData';
import Footer from './components/footer';

//const ProjectDetail = lazy(() => import('./pages/projectDetail'));
// const Home = lazy(() => import('./pages/home'));

function App() {
  const Loading = () => {
    return (
      <div>
        <h2>Loading ...</h2>
      </div>
    );
  };
  return (
    <div classname='wrapper'>
      <Navigation />

      <Switch>
        <Route path='/' exact>
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
        <Route path='/home'>
          <Redirect to='/' />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
