import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

function About({ setPlayState }) {

    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="about image" className="about-img" />
                <img src={play_icon} alt="play icon image" className="play-icon" onClick={() => { setPlayState(true) }} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nuturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores adipisci ratione, voluptatibus iure natus doloremque. Voluptatibus iure aut quasi impedit expedita. Iure itaque, similique, repudiandae, tempora provident minima placeat blanditiis dolores at voluptates nesciunt? Eum ullam mollitia sint. Eligendi, magni vel praesentium dicta odio quos illo quae tempore itaque ullam numquam,  magni repellendus impedit numquam est, repudiandae similique laborum labore iure aliquid rem, saepe, molestias provident libero, laudantium repellendus esse illo in impedit nemo ex excepturi. Ratione at delectus dolor obcaecati, consequatur, nisi laudantium illo eos esse architecto cumque dolorem natus facere! At, culpa cumque. Facere, quos assumenda. Ipsa, earum!</p>
                <p>sint temporibus, aperiam atque hic. Consequuntur, culpa est ducimus sint voluptate sed quis atque doloremque maxime architecto. Odit esse deleniti eos aspernatur, nisi, incidunt repudiandae laborum quis cum aut eius dolorem minima, error suscipit. Vitae commodi, id repudiandae sequi sit  similique tempora neque alias, officia ducimus fuga. Fugiat voluptatibus inventore</p>
                <p>consequatur dolorem, voluptatem veritatis nesciunt beatae corporis distinctio commodi assumenda nihil eveniet, animi magnam mollitia! Accusantium molestias illo distinctio obcaecati tenetur optio ut molestiae voluptatem. Modi voluptatem ipsam repudiandae non a doloribus eos neque porro rerum ipsum. Dolorum voluptate autem, dolore nam omnis adipisci labore deleniti qui voluptatum odio velit </p>
            </div>
        </div>
    )
}

export default About