import data from './data.json';
import Jobs from './components/Jobs'
import Header from "./components/Header"
import {useState} from 'react';
import Search from "./components/Search"

function App() {

  const [filterKeyWords, setFilterKeyWords] = useState([])

  const [query, setQuery] = useState("")

  const handleInputChange = (event)=>{
    setQuery(event.target.value)
    // data.forEach((d)=>console.log(d.position))
  }

  const filteredItems = data.filter(
    (d) => d.position.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const addFilterKeyWords = (data) =>{
    if(!filterKeyWords.includes(data)){
      setFilterKeyWords([...filterKeyWords, data])
    }
  }

  const deleteKeyword = (data) => {
    const newKeyWords = filterKeyWords.filter(key => key!=data);
    setFilterKeyWords(newKeyWords)
  } 

  const clearAll = ()=>{
    setFilterKeyWords([]);
  }

  return (
    <div>
      <div className="header"></div>
      <Search query={query} handleInputChange={handleInputChange}/>

      {
        filterKeyWords.length>0 &&
         <Header 
        keywords={filterKeyWords}
        removeKeyWords = {deleteKeyword}
        clearAll={clearAll}/>
      }

      <Jobs
       keywords={filterKeyWords}
       filteredItems={filteredItems}
       data={data}
       setKeywords={addFilterKeyWords}/>
    </div>
  );
}

export default App;
