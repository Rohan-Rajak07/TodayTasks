import Background from "./Components/Background";
import Front from "./Components/Front";
import "./App.css";
import {useState} from "react";
function App() {
  var indata = [
    {
      title: "rohan ",
      desc: "Hey Welcome to the Today-Task .Here you can add you daily Task ..",
    },
  ];
  const[data,setData]=useState(indata);
  

  var onDelete=(cardTitle)=>{
    console.log(`${cardTitle}Deleted..`);
    var temp=data.filter((f)=> f.title!==cardTitle)
    setData(temp);
  }
  return (
    <div className="back fixed w-screen h-screen bg-zinc-700">
      <Background />
      <Front data={data} onDelete={onDelete}/>
    </div>
  );
}

export default App;
