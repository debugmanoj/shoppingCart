import React,{useState} from 'react'
import Card from './components/Card'
import TopBar from './components/TopBar'
// import Header from './components/Header'

function App() {
  let datas=[{
    title:"Ktm duke 300",
    priceStrike:"$100.00",
    orgPrice:"$50.00",
    id:"1",

  },
  {
    title:"Honda Hness CB350",
    priceStrike:"$800.00",
    orgPrice:"$40.00",
    id:"2"
    
  },
  {
    title:"Classic 350",
    priceStrike:"$600.00",
    orgPrice:"$200.00",
    id:"3"
    
  },
  {
    title:"Tvs Xl",
    priceStrike:"$500.00",
    orgPrice:"$250.00",
    id:"4"
    
  }]
  let [cart,setCart] = useState(0)
  return <>
    <TopBar cart={cart} setCart={setCart}/>
    {/* <Header/> */}
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {datas.map((e,index)=> <Card cart={cart} setCart={setCart} data={e} key={index}/>)}
            
          </div>
      </div>
    </section>
  </>
}

export default App