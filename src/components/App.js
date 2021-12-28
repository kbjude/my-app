 import '../App.css';
 import Bikes from './bikes';
 import Cars from './cars';
 import Current from './Current';
 import ContactCard from './contactcard';
 import cardsData from './cardsData';
 import Students from './students';

function App() {
  const result = cardsData.map(card => <ContactCard
    key={card.id}
    name={card.name}
    phone={card.phone}
    email={card.email}
    />)

    const study = Students.map(student => <ContactCard 
      key={student.id}
      name={student.name}
      grade={student.grade}
      address={student.address}
      notes={student.notes}
      status={student.status}
    />)
    console.log(study)
  return (
    <div>
      <div className="topMenu">
        {/* <div>
          {result}
        </div> */}
        <div>
          {study}
        </div>
      </div>
      <Current />
      <Bikes />
      <Cars />
    </div>
  );
}

export default App;