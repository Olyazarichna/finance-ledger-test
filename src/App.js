import MainWrapper from './components/MainWrapper/MainWrapper';
import BespokeSolutions from './sections/BespokeSolutions/BespokeSolutions';
import BusinessCases from './sections/BusinessCases/BusinessCases';
import BlogSection from './sections/BlogSection/BlogSection';
import TeamSection from './sections/TeamSection/TeamSection';
import RequestSection from './sections/RequestSection/RequestSection';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <div className={'container'}>
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
