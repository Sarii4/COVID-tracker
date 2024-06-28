import { ContainerDownload } from "./styledSection-Download"



const SectionDownload3 = ({titulo, parrafo,button}) =>{


    return (
        <>
            <ContainerDownload>
                <h1>{titulo}</h1>
                <p>{parrafo}</p>
                <button>{button}</button>
            </ContainerDownload>
        </>
    );
}

export default SectionDownload3;