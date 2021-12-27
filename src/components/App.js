 import '../App.css';
 import Bikes from './bikes';
 import Cars from './cars';
 import Current from './Current';
 import ContactCard from './contactcard';


function App() {
  return (
    <div>
      <ContactCard 
        name = "Miky mouse"
        imgUrl="./NSX_GT3_Pebble_2021.0.jpeg"
        phone = "0701042287"
        email = "kbjude@gmail.com"
      />
        <ContactCard 
          name = "Louis Hamilton"
          imgUrl="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic4.arrow.com%2F-%2Fmedia%2Farrow%2Fimages%2F1400-x-1400%2Fcritical-components_image-1%2Ff1-race-car.jpeg&imgrefurl=https%3A%2F%2Fwww.arrow.com%2Fen%2Fresearch-and-events%2Farticles%2Fcritical-electronic-components-in-a-formula-1-race-cars&tbnid=euXS9ImDvsKeUM&vet=12ahUKEwiar-jrx4T1AhVShHMKHb8WA9AQMygBegUIARDXAQ..i&docid=_RRBxPw1ZUIkpM&w=5000&h=2500&itg=1&q=race%20cars&ved=2ahUKEwiar-jrx4T1AhVShHMKHb8WA9AQMygBegUIARDXAQ"
          phone = "07010468403"
          email = "kenya@gmail.com"
      />
      <ContactCard 
        name = "Jirah Ni"
        imgUrl="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic4.arrow.com%2F-%2Fmedia%2Farrow%2Fimages%2F1400-x-1400%2Fcritical-components_image-1%2Ff1-race-car.jpeg&imgrefurl=https%3A%2F%2Fwww.arrow.com%2Fen%2Fresearch-and-events%2Farticles%2Fcritical-electronic-components-in-a-formula-1-race-cars&tbnid=euXS9ImDvsKeUM&vet=12ahUKEwiar-jrx4T1AhVShHMKHb8WA9AQMygBegUIARDXAQ..i&docid=_RRBxPw1ZUIkpM&w=5000&h=2500&itg=1&q=race%20cars&ved=2ahUKEwiar-jrx4T1AhVShHMKHb8WA9AQMygBegUIARDXAQ"
        phone = "0701042287"
        email = "kram@gmail.com"
      />
      <Current />
      <Bikes />
      <Cars />
    </div>
  );
}

export default App;