import "./carousel.css"

function Carousel({ pictures }){
    return (
        <div className="banner-container">
            <img src={pictures} alt='logo kasa' />
        </div>
    )
}


export default Carousel