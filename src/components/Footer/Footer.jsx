import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import Linkedin from "../../assets/ln.png"
import Insta from "../../assets/in.png"
import Whts from "../../assets/wh.png"

function Footer() {
    return (
        <div className="footer">
            <div className="footUp">
                <h1>Reach out today to get involved in TAAKRA 2024. We’re excited to see your talents shine at this incredible event!</h1>
                <div>
                    <Link to="/contact" className="btn text-white bg-[#d00000] px-6 py-2 rounded-lg hover:bg-[#9d0208] transition duration-300">
                        Register <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>

            <div className="footDown">
                <div className="footLeft">
                    <p className='font-bold'>Connect</p>
                    <Link to={"mailto:daniyalsohail47@gmail.com"} className='block text-gray-300'>Shumail Khan: 0321 622 2897</Link>
                    <Link to={"mailto:daniyalsohail47@gmail.com"} className='block text-gray-300'>Shumail Khan: 0321 622 2897</Link>
                    <Link to={"mailto:daniyalsohail47@gmail.com"} className='text-gray-300'>Muhammad Talha: 0304 703 1962</Link>
                    <Link to={"mailto:daniyalsohail47@gmail.com"} className='text-gray-300'>Contact Email: taakra@ucp.edu.pk</Link>
                </div>

                <div className="footMid">
                    <p>© 2024.All rights reserved.</p>
                    <p className='text-gray-300'>Developed by  <Link to={"www.linkedin.com/in/mdaniyal-sohail"}>Daniyal Sohail</Link></p>
                </div>
                <div className="footRight">
                    <Link to={"https://www.linkedin.com/in/daniyalsohail169/"}>
                        <img src={Linkedin} alt="" />
                    </Link>

                    <Link to={"https://www.instagram.com/daniyal__169/"}>
                        <img src={Insta} alt="" />
                    </Link>
                    <Link to={"https://wa.me/923254881328"}>
                        <img src={Whts} alt="" />
                    </Link>
                    <Link to={"https://www.linkedin.com/in/daniyalsohail169/"}>
                        <img src={Linkedin} alt="" />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Footer