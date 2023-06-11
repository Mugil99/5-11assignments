import logo from './logo.svg';
import './App.css';
import Tab from './Components/Tab'
function App() {
  const Arr=[[{title:"Tab1",content:"Content from Tab1"},{title:"Tab2",content:"Content from Tab2"},{title:"Tab3",content:"Content from Tab3"}]
  ,[{title:"TabA",content:"Content from TabA"},{title:"TabB",content:"Content from TabB"},{title:"TabC",content:"Content from TabC"}]]
  return (
   <div>
     {
      Arr.map((arr,index)=>{
        return(
          <Tab arr={arr} key={index}/>
        )
      })
     }
   </div>
  );
}

export default App;
