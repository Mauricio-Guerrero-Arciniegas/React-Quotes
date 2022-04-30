import QuoteBox from "./components/QuoteBox";
import AuthorBox from "./components/AuthorBox"
import "./styles.css";

function App() {
  return (
    <>
    <div className="App">
      <QuoteBox>
        <AuthorBox/>
        </QuoteBox>
    </div>
    </>
  );
}

export default App;
