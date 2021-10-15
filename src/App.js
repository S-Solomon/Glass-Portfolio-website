import styled from "styled-components"
import PersonalInfo from "./components/PersonalInfo"
import Tabs from "./components/Tabs"


const App = () => {
    return (
        <AppStyled>
            <div className="tabs-con">
                <PersonalInfo />
                <Tabs />
            </div>
        </AppStyled>
    )
}

export default App


const AppStyled = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 10rem 5rem;

    .tabs-con {
        display: grid;
        min-height: 10vh;
        width: 100%;
        grid-template-columns: repeat(8, 1fr);
        gap: 2rem;
    }
`