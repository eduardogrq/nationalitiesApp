
import { 
    CardContainer, 
    CardObject, 
    HeaderCard,
    Image,
    ImageWrapper
}     
from "./style";

const Card = ({user}:any) => {

    const {picture, name} = user;
    const fullname  = `${name.first} ${name.last}`

    return(
        <CardContainer>
            <CardObject>
                <HeaderCard>
                    <ImageWrapper>
                        <Image src={picture.large} alt="Profile image"/>
                    </ImageWrapper>
                </HeaderCard>
                <div style={{height: '70%', paddingTop: '75px'}}>
                    <h4 style={{margin: '0px'}}>Hi, My name is</h4>
                    <h1>{fullname}</h1>
                    <div>

                    </div>
                </div>
            </CardObject>
        </CardContainer>
    )
}

export default Card;