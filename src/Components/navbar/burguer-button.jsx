import React from 'react'
import  {BurguerContainer,BurguerImage }  from './burguer-button.styles'

import MenuBurguer from "../../assets/images/MenuBurguer.png"

function BurguerButton() {
    return (
        <BurguerContainer>

            <img src={MenuBurguer} alt="burguer menu" />
        </BurguerContainer>


    )
}

export default BurguerButton
