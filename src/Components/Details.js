import React, { createRef, useState } from 'react';
import girl from '../Images/girl.png'
import "../Mobile.css";
import "../App.css";
export default function Details() {
    const [elRefs, setElRefs] = useState([]);
    React.useEffect(() => {
		setElRefs((elRefs) =>
			Array(3)
				.fill()
				.map((_, i) => elRefs[i] || createRef()),
		);
	}, []);

    window.addEventListener("scroll",function(){
        for(let i=0;i<3;i++){
            if(elRefs[i] !== undefined){
                let distanceFromTop =  elRefs[i].current.getBoundingClientRect().top

                var opacity = 0;
                if ((distanceFromTop / window.innerHeight >= 0)  && (distanceFromTop / window.innerHeight <= 1)) {
                    opacity = (distanceFromTop / window.innerHeight) * 6;
                }
                if (opacity >= 0) {
                    elRefs[i].current.style.opacity = opacity;
                }
            }
        }
    })

  return <div className='detail'>
      <h1>Details</h1>
      <div className='details-container'>
          <div className='details' ref={elRefs[0]}>
              <img src={girl} alt='girl'/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </div>
          <div className='details' ref={elRefs[1]}>
              <img src={girl} alt='girl'/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </div>
          <div className='details' ref={elRefs[2]}>
              <img src={girl} alt='girl'/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </div>
      </div>
  </div>;
}
