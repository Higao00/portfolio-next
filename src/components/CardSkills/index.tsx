import * as S from "./styles"

interface ICardSkills {
    logo: string
    title: string
    description: string
}

const CardSkills = ({ logo, description, title }: ICardSkills) => {
    return (
        <S.Container>
            <S.Header>
                <S.Images width={282} height={80} src={logo} alt={description} priority/>
            </S.Header>

            <S.Body>
                <h2>{title}</h2>
                <p>{description}</p>
            </S.Body>
        </S.Container>
    )
}

export default CardSkills
