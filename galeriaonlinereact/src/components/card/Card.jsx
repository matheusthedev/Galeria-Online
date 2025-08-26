import "./Card.css"
// import imgCard from "../../assets/img/burro.png"
import imgPen from "../../assets/img/pen.svg"
import imgTrash from "../../assets/img/trash.svg"

export const Card = ({ tituloCard, imgCard, funcaoEditar, funcaoExcluir }) => {
    return (
        <>
            <div className="cardDaImagem">
                <p>{tituloCard}</p>
                <img className="imgDoCard" src={imgCard} alt="Imagem relacionada ao card" />
                <div className="icons">
                    <img src={imgPen} onClick={funcaoEditar} alt="icone caneta para realizar uma alteração" />
                    <img src={imgTrash} onClick={funcaoExcluir} alt="icone de uma lixeira para realizar uma alteração"  />
                </div>
            </div>
        </>
    )
}