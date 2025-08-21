import "./Card.css"
import imgCard from "../../assets/img/burro.png"
import imgPen from "../../assets/img/pen.svg"
import imgTrash from "../../assets/img/trash.svg"

export const Card = ({tituloCard}) => {
    return(
        <>
        <div className="cardDaImagem">
            <p>{tituloCard}</p>
            <img className="imgDoCard" src={imgCard} alt="Imagem relacionada ao card" />
            <div className="icons">
                <img src={imgPen} alt="icone caneta para realizar uma alteração" />
                <img src={imgTrash} alt="icone de uma lixeira para realizar uma alteração" />
            </div>
        </div>
        </>
    )
}