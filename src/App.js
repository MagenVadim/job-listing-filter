import data from './data.json';
import Jobs from './components/Jobs'
import Header from "./components/Header"
import {useState} from 'react';

function App() {

  const [filterKeyWords, setFilterKeyWords] = useState([])

  const addFilterKeyWords = (data) =>{
    if(!filterKeyWords.includes(data)){
      setFilterKeyWords([...filterKeyWords, data])
    }
  }

  return (
    <div>
      <div className="header"></div>
      {
        filterKeyWords.length>0 && <Header keywords={filterKeyWords}/>
      }
      <Jobs data={data} setKeywords={addFilterKeyWords}/>
    </div>
  );
}

export default App;
