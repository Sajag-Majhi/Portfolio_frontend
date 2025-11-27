import './App.css'
import Aside_intro from './Components/Aside_intro/Aside_intro.jsx';
import Header from './Components/Header/Header.jsx'
import Section_intro from './Components/Section_intro/Section_intro.jsx';
import Section_about from './Components/Section_about/Section_about.jsx';
import Section_projects from './Components/Section_projects/Section_projects.jsx';
import Section_paper from './Components/Section_paper/Section_paper.jsx';
import Section_blogs from './Components/Section_blogs/Section_blogs.jsx';
import Section_work_together from './Components/Section_work_together/Section_work_together.jsx';
import Section_services from './Components/Section_services/Section_services.jsx';
import Section_form from './Components/Section_form/Section_form.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="app_container">
      <Header/>
      <Section_intro/>
      <Aside_intro/>
      <Section_about/>
      <Section_projects/>
      <Section_work_together/>
      <Section_paper/>
      <Section_blogs/>
      <Section_services/>
      <Section_form/>
      <Footer />
    </div>
  );
}

export default App
