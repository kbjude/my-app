 import '../App.css';
 import Bikes from './bikes';
 import Cars from './cars';
 import Current from './Current';
 import ContactCard from './contactcard';
 import cardsData from './cardsData';

function App() {
  const result = cardsData.map(card => <ContactCard
    key={card.id}
    name={card.name}
    phone={card.phone}
    email={card.email}
    />)
    console.log(result);

  return (
    <div>
      {result}
      <Current />
      <Bikes />
      <Cars />
    </div>
  );
}

export default App;