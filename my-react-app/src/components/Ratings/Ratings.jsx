import starEmpty from "./../../assets/star-empty.svg"
import starFill from "./../../assets/star-fill.svg"

function Ratings({ rating }) {

    const ratingMax = 5;

    return (
        <div className="ratings-container">
            {Array.from({ length: ratingMax }, (value, key) => {
                return (<img key={key} src={key < rating ? starFill : starEmpty} />)
            })}
        </div>
    )
}


export default Ratings