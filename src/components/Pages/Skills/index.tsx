import Transitions from "@/components/Transitions"
import data from "./data"
import * as S from "./styles"
import CardSkills from "@/components/CardSkills"

const Skills = () => {
    return (
        <Transitions>
            <S.Container>
                {data.map((data, index) => (
                    <CardSkills key={index} description={data.description} logo={data.logo} title={data.title} />
                ))}
            </S.Container>
        </Transitions>
    )
}

export default Skills
