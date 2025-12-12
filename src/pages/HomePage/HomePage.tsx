import ConstructionCompontent from "../../components/ConstructionComponent/ConstructionComponent"
import ExperienceComponent from "../../components/ExperienceComponent/ExperienceComponent";
import SummaryComponent from "../../components/SummaryComponent/SummaryComponent";

function HomePage(){
    return(
        <main>
            <h1>Ingvild Sandven</h1>
            <SummaryComponent/>
            <ConstructionCompontent/>
            <ExperienceComponent/>
        </main>
        
    );
}

export default HomePage;