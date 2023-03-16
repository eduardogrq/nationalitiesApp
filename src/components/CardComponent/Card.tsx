
import { 
    CardContainer, 
    CardObject, 
    HeaderCard,
    ImageWrapper
}     
from "./style";

const Card = () => {
    return(
        <CardContainer>
            <CardObject>
                <HeaderCard>
                    <ImageWrapper>
                        <img src="https://picsum.photos/145/145" alt="" style={{borderRadius: '50%', width: '125px', height: '125px'}}/>
                    </ImageWrapper>
                </HeaderCard>
                <div style={{height: '70%', paddingTop: '75px'}}>
                    <h4 style={{margin: '0px'}}>Hi, My name is</h4>
                    <h1>Eduardo Quiñonez</h1>
                    <div>

                    </div>
                </div>
            </CardObject>
        </CardContainer>
    )
}

export default Card;