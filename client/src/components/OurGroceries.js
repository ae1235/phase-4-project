import React, {useState,useEffect} from 'react'
import './OurGroceries.css'
// import img1 from '../assets/marisol-benitez-QvkAQTNj4zk-unsplash.jpg'
// import img2 from '../assets/no-revisions-ixS7UCRJTdM-unsplash.jpg'
// import img3 from  '../assets/scott-warman-NpNvI4ilT4A-unsplash.jpg'
// import img4 from  '../assets/tara-clark-Gk8LG7dsHWA-unsplash.jpg'
// import img5 from  '../assets/woman-6289052_1280.png'

const Groceries = () => {
  
  const [grocery, setGrocery] = useState([])

  useEffect(() => {
    fetch("/groceries")
      .then((r) => r.json())
      .then(data => setGrocery(data))
  }, []);

 
  return (
    <div className='groceries'>
        <h1>Our Groceries</h1>
         {grocery.map((item) => (
          <div className='container'>
             key={item.id} 
             name={item.name}
             image_url{item.image_url}
             price={item.price}
             rating={item.rating}
          </div>
             )
         )}


        {/* <div className='container'>
          <img src={img1} alt=''/>
          <img src={img2} alt=''/>
          <img src={img3} alt=''/>
          <img src={img4} alt=''/>
          <img src={img5} alt=''/>
        </div> */}

    </div>
  )
}

export default Groceries