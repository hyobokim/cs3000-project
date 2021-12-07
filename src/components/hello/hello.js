import {useEffect, useState} from "react";

const HelloWorld = () => {
  const [hello, setHello] = useState("");
  useEffect(() =>
    fetch("http://localhost:4000/hello")
  .then(response => response.text())
  .then(str => setHello(str)), []);

  return (<h1>{hello}</h1>);
}

export default HelloWorld;