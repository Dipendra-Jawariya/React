import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      {/* <Navbar /> Default Props */}
      {/* Props are properties with the help of which we can change name the variable according to the use  */}
      {/* With the help of prop we can name the variable which is are giving to the component */}
      {/* We can pass anything by props wheather it is a string ,object,link */}
      {/* in her we passed string for the about page we can also pass the link of the page */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"/>
      </div>
    </>
  );
}

export default App;
