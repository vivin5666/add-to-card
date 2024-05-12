import React,{useState} from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  let [cart,setCart]=useState(0)
  let data=[ {
    sale: false,
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',    
    reviews: false,  
    price: '$40.00 - $80.00',  
    OldPrice: "",
    Offer: false,
   
  },
  {
    sale: true,
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: true,
    price: ' $18.00',
    OldPrice: '$20.00',
    Offer: true,
    
  },
  {
    sale: true,
    name: 'Sale Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: false,
    price: '$25.00',
    OldPrice: '$50.00',
    Offer: true,

  },

  {
    sale:false,
    name: 'Popular Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: true,
    price: '$40.00',   
    OldPrice: "",
    Offer: false,    
  },

  {
    sale: true,
    name: 'Sale Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: false,
    price: ' $25.00',    
    OldPrice: '$50.00',
    Offer: true,
   
  },
  {
    sale: false,
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: false,
    price: ' $120.00 - $280.00',   
    OldPrice: '',
    Offer: true,
   
  },
  {
    sale: true,
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: true,
    price: ' $18.00',    
    OldPrice: '$20.00',
    Offer: true,    
  },
  {
    sale: false,
    name: 'Popular Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: true,
    price: ' $40.00',   
    OldPrice: '',
    Offer: false,   
  }]
  
  return <>
<TopBar cart={cart} setCart={setCart} />
<Header/>
<section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {
                    data.map((e,i)=>{
                      return <Card e={e} key={i} cart={cart} setCart={setCart}/>
                    
                    })
                   }

                    </div>
              </div>
</section>
<Footer cart={cart} setCart={setCart}/>              
  </>
}

export default App