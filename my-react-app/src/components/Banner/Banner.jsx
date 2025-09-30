import "./banner.css"

function Banner({ image, text }) {

    return (
        <div className="banner-container">
            <img src={image} alt='logo kasa' />
            <p>{text}</p>
        </div>
    )
}


export default Banner