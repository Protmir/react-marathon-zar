import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import bgImage from "./Image/bg3.jpg"

function App() {
  return (
      <>
        <Header title="This new title!"  discr="This new Description!"/>
        <Layout title="This new Layout1 title!"  discr="This new Layout1 Description!" id={1} urlBg={bgImage}/>
        <Layout title="This new Layout2 title!"  discr="This new Layout2 Description!" id={2}/>
        <Layout title="This new Layout3 title!"  discr="This new Layout3 Description!" id={3} colorBg="red"/>
        <Footer />
      </>
  )
}

export default App;
