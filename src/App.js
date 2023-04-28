import MainWrapper from './components/MainWrapper/MainWrapper';
import BespokeSolutions from './components/BespokeSolutions/BespokeSolutions';
import BusinessCases from './components/BusinessCases/BusinessCases';
import BlogSection from './components/BlogSection/BlogSection';
import TeamSection from './components/TeamSection/TeamSection';
import RequestSection from './components/RequestSection/RequestSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <MainWrapper />
      <BespokeSolutions />
      <BusinessCases />
      <BlogSection />
      <TeamSection />
      <RequestSection />
      <Footer />
    </div>
  );
}

export default App;
