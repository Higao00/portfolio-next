import * as S from "./styles"
import data from "../../Pages/SocialNetworks/data"
import Transitions from "@/components/Transitions"
import CardSocialNetwork from "@/components/CardSocialNetwork"

const SocialNetworks = () => {
    return (
        <Transitions>
            <S.Container>
                {data.map((data, index) => (
                    <CardSocialNetwork
                        key={index}
                        link={data.link}
                        logo={data.logo}
                        name={data.name}
                        type={data.type}
                        color={data.color}
                        qrcode={data.qrcode}
                    />
                ))}
            </S.Container>
        </Transitions>
    )
}

export default SocialNetworks
