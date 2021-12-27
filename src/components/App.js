 import '../App.css';
 import Bikes from './bikes';
 import Cars from './cars';
 import Current from './Current';
 import ContactCard from './contactcard';


function App() {
  return (
    <div>
      <ContactCard
      contact = {
        {name:"Miky mouse",
        imgUrl:"./NSX_GT3_Pebble_2021.0.jpeg",
        phone : "0701042287",
        email : "kbjude@gmail.com"}
      }
      />

      <Current />
      <Bikes />
      <Cars />
    </div>
  );
}

export default App;