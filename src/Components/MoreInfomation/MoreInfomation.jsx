import { Container6 } from "./styledMoreInformation"


const MoreInformation = ({parrafo, imgUrl}) =>{
    return(
        <>
            <Container6>
            <img src={imgUrl}></img>
                <div>
                    <h3>9 Sept 2020  21Comment</h3>
                    <p>{parrafo}</p>
                </div>
                <button>Continue</button>  
            </Container6>
        </>
    )
}

export default MoreInformation;