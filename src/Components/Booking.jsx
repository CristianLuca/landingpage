import logo from '/src/logo.png';
import '/src/ComponentsCss/Fonts.css'
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function Booking() {
const dateInputRef = useRef();


const handleClick = () => {
    setShowPopup(true);
}

    useEffect(() => {
        const dateInput = dateInputRef.current;
        dateInput.addEventListener('change', function() {
            const chosenDate = new Date(this.value);
            const day = chosenDate.getUTCDay();

            // If the chosen date is a Monday (1) or Tuesday (2), reset the input
            if (day === 1 || day === 2) {
                this.value = '';
                alert('Bookings are not available on Mondays and Tuesdays. Please choose another date.');
            }
        });
    }, []);
    const timeInputRef = useRef();

    useEffect(() => {
        const timeInput = timeInputRef.current;
        timeInput.addEventListener('change', function() {
            const chosenTime = this.value;
            const [hours, minutes] = chosenTime.split(':').map(Number);

            // If the chosen time is outside of the allowed range, reset the input
            if (hours < 16 || hours > 21 || (hours === 21 && minutes > 0)) {
                this.value = '';
                alert('Bookings are only available from 16:00 to 21:00. Please choose another time.');
            }
        });
    }, []);
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        no_guests: '',
        date: '',
        time: '',
        message: '',
    });

    
    const handleInput = (event) => {
      setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const handleSubmit = async event => {
        event.preventDefault();
        try {
        await axios.post('http://localhost:8801/booking', values);
        console.log(values);
        setSubmissionStatus('Form submitted successfully');
        } catch (err) {
          console.error(err);
        }
    }
    const [submissionStatus, setSubmissionStatus] = useState('');

    const [showPopup, setShowPopup] = useState(false);
    const bookingFormRef = React.createRef();
    const handlePopupClick = () => {
      setShowPopup(false);
    }

    const handleBookTableClick = () => {
      bookingFormRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  
return (
<div id='bookTable'>
<div className='absolute transform -translate-x-1/2 space-x-5' style={{left: '50vw', top: '37.7vw'}}> 
          <button onClick={handleClick} role="button" className="bg-white hover:bg-gray-300 text-black text-sm px-4 py-2  border rounded-full frank-font " 
          style={{fontSize: '1vw', padding: '0.8vw 2vw'}}>
            View Menu</button>
            
            <button onClick={handleBookTableClick} role="button" className="bg-white hover:bg-gray-300 text-black text-sm px-4 py-2  border rounded-full frank-font" 
            style={{fontSize: '1vw', padding: '0.8vw 2vw'}}>
            Book a Table</button>
          </div>
          {showPopup && 
        <div className="absolute popup" style={{left: '25vw', top: '4.5vw', width: '50vw', height: '45vw'}}>
            <button onClick={handlePopupClick} style={{position: 'absolute', right: '0.4vw', top: '0vw', fontSize:'1.5vw'}}>X</button>
            <img src="/src/menu.jpg" alt="Menu" />
        </div>
    }
<h1 className="frank-font" style={{position: 'absolute', left: '15vw', top: '160vw', textAlign:'center', width: '70vw', fontSize:'4vw'}}>Book your 'Il Capitano's Experience'</h1>
<div style={{position: 'absolute', left: '50vw', top: '168vw', height: '15vw', borderLeft: '2px solid black'}}></div>
<div style={{position: 'absolute', left: '50vw', top: '185vw', height: '15vw', borderLeft: '2px solid black'}}></div>
<h2 className='poppins-font' style = {{position: 'absolute', fontSize:'2vw', left: '15vw', top: '170vw', textAlign:'center', width: '15vw'}} >Call us <br/> 
0151 928 9562 <br/> </h2>
<img src= {logo} className='' style={{position: 'absolute', left: '15vw', top: '179vw', width: '15vw', height: '15vw'}} />
<h2 className='oleo-font' style = {{position: 'absolute', fontSize:'2vw', left: '42.5vw', top: '182.5vw', textAlign:'center', width: '15vw'}} >Or  </h2>
<form className='mx-auto' >
<div ref={bookingFormRef} style={{position: 'absolute', top:'165vw', left:'55vw', width:'30vw'}}>


          <div className="mt-11 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm leading-6 text-gray-900 poppins-font">
                First name
              </label>
              <div className="mt-2">
                <input
                  onChange={handleInput}
                  type="text"
                  name="first_name"
                  id="first-name"
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                   ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="poppins-font block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  onChange={handleInput}
                  type="text"
                  name="last_name"
                  id="last-name"
                  required
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900" >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={handleInput}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2">
                <input
                  onChange={handleInput}
                  type='tel'
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                   ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  
                </input>
              </div>
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="guests" className="block text-sm font-medium leading-6 text-gray-900">
                No. of Guests
              </label>
              <div className="mt-2">
                <input
                  onChange={handleInput}
                  type="number"
                  name="no_guests"
                  id="guests"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                Date
              </label>
              <div className="mt-2">
                <input
                  onChange={handleInput}
                  ref={dateInputRef}
                  type="date"
                  name="date"
                  id="date"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="time" className="block text-sm font-medium leading-6 text-gray-900">
                Time
              </label>
              <div className="mt-2">
                <input
                  onChange={handleInput}
                  ref={timeInputRef}
                  type="time"
                  name="time"
                  id="time"
                  required
                  min="16:00"
                  max="21:00"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor='message' className="block text-sm font-medium leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2">
                <input
                  onChange={handleInput}
                  type="text"
                  name="message"
                  id="message"
                  
                  className="block w-full rounded-md border-0 py-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
          </div>
          <div className="mt-6 ml-60 sm:col-span-6">
        <button onClick={handleSubmit} type="submit" className="inline-flex justify-center py-2 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
        </button>
        <p className='text-green-600'>{submissionStatus}</p>
    </div>
        </div>
    
</form>
</div>
)

}