import { Card } from './Styled-Carousel';


const Carousel = ({url,title,text}) => {
    
    return (
        <>
            <Card>
                <img src={url} alt="" />
                <h1>{title}</h1>
                <p>{text}</p>
            </Card>
        </>
    )
}
export default Carousel;