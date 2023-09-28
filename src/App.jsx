import './App.css';
import List from './components/List/List';
//import Title from './components/Title/Title';


function App() {

  const users = [
    {
      id: 0,
      name:"Siri",
    },
    {
      id: 1,
      name: "Alexa",
    },
    {
      id: 2,
      name: "Cortana",
    },
    {
      id: 3,
      name: "Google",
    },
    {
      id: 4,
      name: "Amazon",
    }
  ];
  return (
    <div>
     
     <List items={users} />
  
    </div>
  );
}

export default App;
