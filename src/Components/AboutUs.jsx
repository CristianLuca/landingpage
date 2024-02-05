import '/src/ComponentsCss/Fonts.css' 
import award from '/src/aw.png';
import pzza from '/src/pzza.png';
import pzza2 from '/src/pzza2.png';
import terrace from '/src/terrace.png';
import waterloo from '/src/waterloo.png';
import logo from '/src/logo.png';
import knotty from '/src/knotty.png'
import review1 from '/src/review1.png'
import review2 from '/src/review2.png'
import review3 from '/src/review3.png'


export default function AboutUs() {
    return (
        <div style={{ position: 'relative' }}>
             <h1 style={{ position: 'absolute', left: '60vw', top: '0vw', fontSize: '4vw' }} className="frank-font black"> About Us</h1>
            <p1 style={{ position: 'absolute', left: '40vw', top: '7vw', fontSize: '1vw', textAlign: 'center' }} className="poppins-font black"> At Il Capitano's, our story is one of culinary excellence and unwavering passion for the art of Neapolitan pizza. Nestled in the vibrant heart of Liverpool, our pizzeria has earned the prestigious title of Eccellenze Italiane's number one pizzeria in the city.
Our journey began with a deep reverence for the time-honored traditions of Naples, the birthplace of pizza. We've carefully preserved the essence of authentic Neapolitan pizza-making, from our 24-hour proven dough to the perfectly balanced combination of premium ingredients.
What truly sets us apart is our unyielding commitment to quality. We meticulously source the finest ingredients, ensuring that each pizza that emerges from our wood-fired oven is a culinary masterpiece. Our dough, tender and infused with a hint of smokiness, is a testament to the art of slow fermentation.
Being recognized as Liverpool's top pizzeria by Eccellenze Italiane is a source of immense pride for us. It's a testament to the dedication and craftsmanship that goes into each and every pizza we create.
Whether you're savoring a classic Margherita or indulging in one of our creative, signature creations, a visit to Il Capitano's is a journey through the streets of Naples, where every bite is a burst of flavor and a celebration of tradition.
Join us as we continue to redefine the pizza experience in Liverpool, offering a slice of Italy right here in the heart of the city. Come and be a part of our story, where passion, excellence, and a love for pizza come together to create a truly unforgettable dining experience.  
Buon appetito!</p1>
<div style={{position: 'relative'}}>

 <img src={award} style={{ position: 'absolute', left: '3.8vw', top: '0.6vw', width: '16.2vw', height: '16.2vw' }} />
 <img src={pzza} style={{ position: 'absolute', left: '22vw', top: '0.6vw', width: '16.2vw', height: '16.2vw' }} />
 <img src={pzza2} style={{ position: 'absolute', left: '3.8vw', top: '18vw', width: '16.2vw', height: '16.2vw' }} />
 <img src={terrace} style={{ position: 'absolute', left: '22vw', top: '18vw', width: '16.2vw', height: '16.2vw' }} />
 <h2 style={{ position: 'absolute', left: '30vw', top: '33vw', width: '50vw', height: '2vw', fontSize:'4vw' }} className='frank-font' > Where can you find us?</h2>
 <img src={waterloo} style={{ position: 'absolute', left: '38vw', top: '39vw', width: '26vw', height: '23.5vw' }} />
 
 
 <h2 style={{ position: 'absolute', left: '44vw', top: '63vw', width: '15vw', height: '5vw', textAlign:'center', fontSize:'1.2vw' }} className='poppins-font' > <span style = {{fontSize: '1.6vw'}} className='frank-font'>Waterloo<br/></span> 143 St John's Rd.<br/> Liverpool<br/> L22 9QE</h2>

 <h2 style={{ position: 'absolute', left: '30vw', top: '72vw', width: '50vw', height: '2vw', fontSize:'4vw' }} className='frank-font' > Listen to our customers</h2>
 <p style={{ position: 'absolute', left: '33vw', top: '77vw', fontSize: '1.3vw', textAlign: 'center', width:'37vw' }} className="poppins-font black">Pizza, an edible work of art, captivates with its delicate crust, savory sauce, and an array of creative toppings, making it a beloved culinary masterpiece.</p>
 <img src={review1} style={{ position: 'absolute', left: '10vw', top: '85vw', width: '24vw', height: '24vw' }} />
 <img src={review2} style={{ position: 'absolute', left: '37vw', top: '83vw', width: '27vw', height: '27vw' }} />
 <img src={review3} style={{ position: 'absolute', left: '65vw', top: '85vw', width: '24vw', height: '24vw' }} />
 </div>
        </div>
        
    )
}