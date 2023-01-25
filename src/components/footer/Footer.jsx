import React from 'react'
import "./footer.scss";

export default function Footer() {
  return (
    <div className='main'>
        <div className="Container">
            <div className="item">
                  <h1>Want to Connect ?</h1>
                    <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe itaque tempora,
                      temporibus officia enim eum exercitationem voluptates? 
                     Vel perspiciatis quaerat neque temporibus! Eveniet sint ad molestias omnis ullam repellendus!
                    </p>
                    <div className="social">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                    </div>
            </div>
        </div>
    </div>
  )
}
