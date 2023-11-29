import data from './data.json';
import Jobs from './components/Jobs'
import Header from "./components/Header"
import {useState} from 'react';
import Search from "./components/Search"

function App() {

  const [filterKeyWords, setFilterKeyWords] = useState([])

  // const setSearchKeyword = (data) =>{
  //   setFilterKeyWords(data);
  // }


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
      {/* <Search setSearchKeyword={setSearchKeyword}/> */}

      {
        filterKeyWords.length>0 &&
         <Header 
        keywords={filterKeyWords}
        removeKeyWords = {deleteKeyword}
        clearAll={clearAll}/>
      }

      <Jobs
       keywords={filterKeyWords}
       data={data}
       setKeywords={addFilterKeyWords}/>
    </div>
  );
}

export default App;
