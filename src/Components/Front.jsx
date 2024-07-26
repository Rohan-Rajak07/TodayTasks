import { useRef, useState } from "react";
import Card from "./Card";
import { MdAddCircleOutline } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";



const Front = () => {
  const ref = useRef(null);
  var indata = [
    {
      title: "Welcome!!",
      desc: "Hey Welcome to the Today-Task .Here you can add you daily Task ....",
    }
  ];
  const[data,setData]=useState(indata);
  
  var onDelete=(cardTitle)=>{
    console.log(`${cardTitle}Deleted..`);
    var temp=data.filter((f)=> f.title!==cardTitle)
    setData(temp);
  }

  var view="none";
  const [display, setDisplay] = useState(view);

  var viewDisplay = () => {
    if(view ==="none")
    {
      view="block"
      setDisplay("block")
    }
    else
    {
      view="none"
      setEnterText("")
      setEnterTitle("")
      setDisplay("none")
    }
  }

  //Form related method and function

  const[enterTitle,setEnterTitle]=useState("");
  const[enterText,setEnterText]=useState("");
  
  var itemAdd=()=>{
    if(enterTitle!="" && enterText!="")
    {
      var newitem=[...data,{title:enterTitle,desc:enterText}]
      setData(newitem);
      setEnterTitle("");
      setEnterText("");
      setDisplay("none")
    }
    else{
      alert("Please Enter the Value")
    }
  }

  return (
    <div ref={ref} className="front w-full h-full fixed z-2 flex gap-5 p-2 ">
      {data.map((d) => (
        <Card
          key={d.title}
          title={d.title}
          description={d.desc}
          refrence={ref}
          onDelete={() => onDelete(d.title)}
        />
      ))}
      <div
        style={{ display: `${display}` }}
        className="container sm:h-[65%] sm:w-[300px] h-[70%] w-[70%] bg-white rounded-3xl -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-3 overflow-hidden ">
          <div className="w-full h-[10%] bg-red-500 px-5 flex items-center justify-end  ">
            <span onClick={viewDisplay} className="text-xl text-white"><RxCross1/></span>
          </div>
          <div className="innerbox bg-black w-full h-[90%] py-5 flex items-center flex-col justify-between">
            <input onChange={(e)=>{setEnterTitle(e.target.value)}} value={enterTitle} className="bg-zinc-700  w-[85%]  rounded-2xl text-white px-3 py-1.5 border-2 border-white" type="text" placeholder="Enter Title" />
            <textarea onChange={(e)=>{setEnterText(e.target.value)}} value={enterText}  className="bg-zinc-700 mt-5 w-[85%] h-[70%] text-white px-3 py-1.5 border-2 border-white " placeholder="Enter Text"/>
            <button onClick={itemAdd} className="bg-white px-5 py-2 rounded-2xl self-end mr-5">Add</button>

          </div>
        </div>
      <h5
        onClick={viewDisplay}
        className="text-white text-5xl absolute bottom-8 right-8 z-3"
      >
        <MdAddCircleOutline />
      </h5>
    </div>
  );
};

export default Front;
