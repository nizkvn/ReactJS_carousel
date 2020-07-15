import React from 'react';
import "./slider.scss";


function Slider() {
    // create arr data for Slider
    let sliderArr = [
        {   
            "name":"tiger",
            "url": "https://tienghancoban.edu.vn/images/2016/04/01/muong-thanh-02_rafu.jpg"
        },
        {   
            "name":"fox",
            "url": "https://bloximages.newyork1.vip.townnews.com/nny360.com/content/tncms/assets/v3/editorial/0/aa/0aa1d7e7-c573-50f0-9853-a9cbc00aea08/5e98ab46316e9.image.jpg?resize=1200%2C800"
        },
        {   
            "name":"cat",
            "url": "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg"
        },
        {   
            "name":"dog",
            "url": "https://i.insider.com/5df126b679d7570ad2044f3e?width=1100&format=jpeg&auto=webp"
        },
        {   
            "name":"rabbit",
            "url": "https://www.islandsweekly.com/wp-content/uploads/2018/04/11434993_web1_180418-ISJ-Rabbits_1.jpg"
        }
    ]
  return (
    <div className="slider">
        {
            sliderArr.map((item,index)=>{
                return(
                <div className = "slide" key = {index}>
                    <img src={item.url}/>
                    <h1>{item.name}</h1>
                </div>
                
                )
            })
        }
    </div>
  );
}

export default Slider;
