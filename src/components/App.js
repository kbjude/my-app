 import '../App.css';
 import Bikes from './bikes';
 import Cars from './cars';
 import Current from './Current';
 import ContactCard from './contactcard';


function App() {
  return (
    <div>
      <ContactCard />
      <Current />
      <Bikes />
      <Cars />
    </div>
  );
}

export default App;