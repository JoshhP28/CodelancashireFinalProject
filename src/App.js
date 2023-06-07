import { useEffect, useState } from 'react';
import './App.css';
import FrontPage from "./components/frontpage"
import axios from "axios"

function App() {
  const [classes, setClasses] = useState([]);
  const [classesBody, setClassesBody] = useState();
  const [mainWindow, setMainWindow] = useState("home");

  function getClasses() {
    axios.get("http://127.0.0.1:8080/classes")
      .then((res) => {
        setClasses(res.data);
      })
      .catch(() => { })
  }

  useEffect(() => {
    getClasses();
  }, []);

  useEffect(() => {
    let opacityState;
    if (mainWindow === "home")
      opacityState = 0;
    else
      opacityState = 1;

    setClassesBody(<div style={{ opacity: opacityState }} className="Classes">{classes.map((element) => <p>{element.Name}</p>)}</div>)
  }, [classes, mainWindow])

  return (
    <div className="App">
      <header className="App-header">
        <FrontPage MW={mainWindow} setMW={setMainWindow}></FrontPage>
        {classesBody}
      </header>
    </div>
  );
}

export default App;
