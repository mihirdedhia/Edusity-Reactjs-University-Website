import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"
import { useRef } from "react"

function Testimonials() {

    const slider = useRef();
    let translateX = 0;

    const slideForward = () => {
        if (translateX > -50) {
            translateX -= 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`;
    }

    const slideBackward = () => {
        if (translateX < 0) {
            translateX += 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`;
    }

    return (
        <div className="testimonials">
            <img src={next_icon} alt="next icon image" className="next-btn" onClick={slideForward} />
            <img src={back_icon} alt="back icon image" className="back-btn" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="user icon image" />
                                <div>
                                    <h3>William Jackson 1</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla voluptate nihil distinctio explicabo delectus nobis sit hic! Temporibus ipsum neque impedit consectetur eligendi, mollitia praesentium provident tempora quibusdam fuga.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="user icon image" />
                                <div>
                                    <h3>William Jackson 2</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla voluptate nihil distinctio explicabo delectus nobis sit hic! Temporibus ipsum neque impedit consectetur eligendi, mollitia praesentium provident tempora quibusdam fuga.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="user icon image" />
                                <div>
                                    <h3>William Jackson 3</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla voluptate nihil distinctio explicabo delectus nobis sit hic! Temporibus ipsum neque impedit consectetur eligendi, mollitia praesentium provident tempora quibusdam fuga.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="user icon image" />
                                <div>
                                    <h3>William Jackson 4</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla voluptate nihil distinctio explicabo delectus nobis sit hic! Temporibus ipsum neque impedit consectetur eligendi, mollitia praesentium provident tempora quibusdam fuga.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials