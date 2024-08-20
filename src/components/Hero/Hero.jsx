import './Hero.css'
import dark_arrow from "../../assets/dark-arrow.png"

function Hero() {

    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We ensure better education for a better world</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus, exercitationem quos officia nihil neque iste consequatur corrupti alias, tempora nemo recusandae asperiores similique rerum temporibus cumque esse quae ducimus.</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="arrow" /></button>
            </div>
        </div>
    )
}

export default Hero