import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import Accessories from "./assets/Accesorios.jpg"
import Model3 from "./assets/Desktop-Model3.jpeg"
import Roaster from "./assets/roadster.gif"
import ModelS from "./assets/Desktop-ModelS.jpeg"
import ModelX from "./assets/Desktop-ModelX.jpeg"
import ModelY from "./assets/Desktop-ModelY.jpeg"
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg"
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg"
import Expe from "./components/showmore/Roadster"
import Expe2 from "./components/showmore/Model S"
import Expe3 from "./components/showmore/Model 3"
import Expe4 from "./components/showmore/Model x"
import Expe5 from "./components/showmore/Model Y"

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Header end */}

      {/* Items */}
      <div className="app__itemsContainer">
      <section id="1">
      <Item
        title = "Tesla Roadster"
        desc = "$192.500"
        descLink = ""
        backgroundImg = {Roaster}
        leftBtnTxt = "Custom Order"
        leftBtnLink = ""
        rightBtnTxt = {<Expe/>}
        twoButtons = 'true'
        first
      />
      </section>

      <section id="2">
      <Item
        title = "Model S"
        desc = "$70,000"
        descLink = ""
        backgroundImg = {ModelS}
        leftBtnTxt = "Custom Order"
        leftBtnLink = ""
        rightBtnTxt = {<Expe2/>}
        twoButtons = 'true'
      />
      </section>
      <section id="3">
      <Item
        title = "Model 3"
        desc = "$80,000"
        descLink = ""
        backgroundImg = {Model3}
        leftBtnTxt = "Custom Order"
        leftBtnLink = ""
        rightBtnTxt = {<Expe3/>}
        twoButtons = 'true'
      />
      </section>
      <section id="4">
      <Item
        title = "Model X"
        desc = "$90,000"
        descLink = ""
        backgroundImg = {ModelX}
        leftBtnTxt = "Custom Order"
        leftBtnLink = ""
        rightBtnTxt = {<Expe4/>}
        twoButtons = 'true'
      />
      </section>
      <section id="5">
      <Item
        title = "Model Y"
        desc = "$75,000"
        descLink = ""
        backgroundImg = {ModelY}
        leftBtnTxt = "Custom Order"
        leftBtnLink = ""
        rightBtnTxt = {<Expe5/>}
        twoButtons = 'true'
      />
      </section>
      <section id="6">
      <Item
        title = "Lowest Cost Solar Panels in America"
        desc = "Money-back guarantee"
        descLink = ""
        backgroundImg = {SolarPanels}
        leftBtnTxt = "Order Now"
        leftBtnLink = ""
        rightBtnTxt = {<Expe/>}
        rightBtnLink = ""
        twoButtons = 'true'
      />
      </section>
      <section id="7">
      <Item
        title = "Solar for New Roofs"
        desc = "Money-back guarantee"
        descLink = ""
        backgroundImg = {SolarRoof}
        leftBtnTxt = "Order Now"
        leftBtnLink = ""
        rightBtnTxt = {<Expe/>}
        twoButtons = 'true'
      />
      </section>
      <section id="8">
      <Item
        title = "Accessories"
        desc = "Money-back guarantee"
        descLink = ""
        backgroundImg = {Accessories}
        leftBtnTxt = "Shop Now"
        leftBtnLink = ""
        rightBtnTxt = {<Expe/>}
        twoButtons = 'true'
      />
      </section>
      </div>
      {/* Items end */}
    </div>
  );
}

export default App;
