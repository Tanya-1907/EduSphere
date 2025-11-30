import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials= () => {

    const slider = useRef();
    let tx = 0;

const sildeForward=()=>{
    if(tx>-50){
        tx -=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;

}
const sildeBackward=()=>{
    if(tx < 0){
        tx +=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;

}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={sildeForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={sildeBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt="User 1" />
                            <div>
                                <h3>William Taylor</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>"The courses offered by Edusphere have transformed my career. The hands-on approach and expert instructors made learning enjoyable and effective."</p>
                    </div>
                </li>
                <li>
                <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt="User 1" />
                            <div>
                                <h3>William Taylor</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>"The courses offered by Edusphere have transformed my career. The hands-on approach and expert instructors made learning enjoyable and effective."</p>
                    </div>
               </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt="User 1" />
                            <div>
                                <h3>Sarah Willson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>"The courses offered by Edusphere have transformed my career. The hands-on approach and expert instructors made learning enjoyable and effective."</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt="User 1" />
                            <div>
                                <h3>Nick Jones</h3>
                                <span>Edusity, UK</span>
                            </div>
                        </div>
                        <p>"The courses offered by Edusphere have transformed my career. The hands-on approach and expert instructors made learning enjoyable and effective."</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
