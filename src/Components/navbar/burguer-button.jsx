
import { BurguerContainer, BurguerImage } from "../../Components/navbar/burguer-button.styles"
import MenuBurguer from "../../assets/icons/logo.png"

function BurguerButton() {
    return (
        < BurguerContainer >
        <img src={MenuBurguer} alt="burguer menu" />

        </BurguerContainer>


    )
}

export default BurguerButton;