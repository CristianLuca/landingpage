import insta from '../insta.png'
import fb from '../fb.png'

export default function Footer() {
    return (
        <div style={{position: 'absolute', top: '210vw', width: '100%', height:'10vw', backgroundColor: '#3C3B3B'}}>
            <h2 className = 'poppins-font text-white' style={{position: 'absolute', left: '4vw', top:'1vw', fontSize:'1vw'}}> Follow US </h2>
            <h2 className = 'poppins-font text-white' style={{position: 'absolute', left: '45vw', top:'1vw', fontSize:'0.7vw', textAlign:'center'}}>
                 <span style={{fontSize:'1vw'}}>Policies <br/> </span> Privacy policy<br/> Terms and Conditions<br/> </h2> 
            <h2 className = 'poppins-font text-white' style={{position: 'absolute', left: '43vw', top:'8vw', fontSize:'0.5vw', textAlign:'center'}}>
                 © Copyright 2022 Il Capitano's | All rights reserved <br/> @Powered by <span style={{}}>Cristian Luca </span><br/></h2>
            <h2 className = 'poppins-font text-white' style={{position: 'absolute', left: '88vw', top:'1vw', fontSize:'0.7vw', textAlign:'center'}}> 
            <span style={{fontSize:'1vw'}}>Hours <br/> </span> Monday-Tuesday Closed <br/>
Wednesday4-11:30 pm <br/>
Thursday4-11:30 pm <br/>
Friday4-11:30 pm <br/>
Saturday4-11:30 pm <br/>
Sunday4-11:30 pm  <br/></h2>  
<img src= {insta} style={{position: 'absolute', top:'4vw', left: '4vw', width: '2vw', height: '2vw'}} />
<img src= {fb} style={{position: 'absolute',top:'4vw', left: '7vw', width: '2vw', height: '2vw'}} />   
        </div>
    )
}