import logo from "./logo.svg";
import "./App.css";
import ImageGrallery from "./ImageGrallery";
import { useRef, useState } from "react";

function App() {
  const [fetchDate, setFetchDate] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //APIURL
    const endpointURL = `https://pixabay.com/api/?key=33180023-285dd615c5c665e0b0b2172a2&q=${ref.current.value}&image_type=photo`;
    //APIを叩く(データフェッチング)
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((date) => {
        console.log(date.hits);
        setFetchDate(date.hits);
      });
  };

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGrallery fetchDate={fetchDate} />
    </div>
  );
}

export default App;
