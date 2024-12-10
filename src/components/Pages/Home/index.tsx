import Transitions from "@/components/Transitions"
import * as S from "./styles"

const Home = () => {
    return (
        <Transitions>
            <S.VideoDesktop autoPlay loop muted>
                <source src="https://zurke-innovation.s3.us-east-1.amazonaws.com/portfolio/images/videos/fundo-desktop.mp4" type="video/mp4" />
            </S.VideoDesktop>

            <S.VideoMobile autoPlay loop muted>
                <source src="https://zurke-innovation.s3.us-east-1.amazonaws.com/portfolio/images/videos/fundo-mobile.mp4" type="video/mp4" />
            </S.VideoMobile>

            <S.Container>
                <S.Image src="https://github-readme-stats.vercel.app/api?username=higao00&show_icons=true&theme=dark&include_all_commits=true&count_private=true" alt="Totalização de trabalhos" />
                <S.Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=higao00&layout=compact&langs_count=7&theme=dark" alt="Top linguagem usadas" />
            </S.Container>
        </Transitions>
    )
}

export default Home
