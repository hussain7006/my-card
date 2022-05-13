import { useState } from 'react';
import './App.css';
import MyCard from './components/card';
import { Button } from 'react-bootstrap';


function App() {
  function click(items) {

    let {title, price, category, desc, img, click } = items;
    alert(`Title: ${title} \nPrice:${price} \nCategory:${category} \n\nDescription: ${desc}`)
  }
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Xiaomi 12",
      price: "Rs. 179,999",
      category: "Mobile",
      desc: "Xiaomi 12- A Most Powerful Machine In The Planet Smart tech Xiaomi will unveil 12 series of smartphones to the market soon this year. According to reports, the company is readying itself to produce its next-level flagship smartphone.",
      url: "https://www.whatmobile.com.pk/admin/images/Xiaomi/Xiaomi12-b.jpg",
    },
    {
      id: 2,
      title: "Realme 9 pro Plus",
      price: "Rs. 69,999",
      category: "Mobile",
      desc: "Realme is gearing up with a 9 Pro which has got a moniker Plus at the end. The Chinese company Realme is launching its 9-series next year. The coming smartphone has been spotted on the IMEI database.",
      url: "https://www.whatmobile.com.pk/admin/images/Realme/Realme9proPlus-b.jpg",
    },
    {
      id: 3,
      title: "Oppo F21 Pro",
      price: "Rs. 52,999",
      category: "Mobile",
      desc: "Oppo is launching its new smartphone F21 Pro very soon. The handset will be packing powerful specs to provide the users with what they want. The handset will be powered Qualcomm SM6225 Snapdragon 680 4G (6 nm).",
      url: "https://www.whatmobile.com.pk/admin/images/Oppo/OppoF20Pro-b.jpg",
    },
    {
      id: 4,
      title: "Xiaomi Poco M4 Pro",
      price: "Rs. 44,999",
      category: "Mobile",
      desc: "Xiaomi is launching all-new Poco M4 which has got a moniker Pro at the end. Xiaomi's sub-brand POCO is reportedly working on its new handset, which is speculated to be a successor to the POCO M3 Pro that was launched in June.",
      url: "https://www.whatmobile.com.pk/admin/images/Xiaomi/XiaomiPocoM4Pro-b.jpg",
    }
  ])


  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>My card</h1> */}
        {items.map((item) =>
          <div key={item.id} style={{ width: "200px", height: "2px !important" }}>
            <MyCard
              title={item.title}
              price={item.price}
              category={item.category}
              desc={item.desc}
              img={item.url}
              click={click}
            />
          </div>)}
      </header>
    </div>
  );
}

export default App;
