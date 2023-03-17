
import { 
    CardContainer, 
    CardObject, 
    HeaderCard,
    IconsWrapper,
    Image,
    ImageWrapper,
    InfoContainer
}     
from "./style";

import { 
    AiOutlineCalendar,
    AiOutlineHeatMap, 
    AiOutlineMail, 
    AiOutlineUser, 
    AiOutlineAim, 
    AiOutlinePhone,
    AiOutlineLock
} from "react-icons/ai";


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
                    <InfoContainer>
                        <h4 className="margin-0">Hi, My name is</h4>
                        <h1>{fullname}</h1>
                        <IconsWrapper>
                        <AiOutlineUser className="icon-style" />
                            <AiOutlineMail className="icon-style" />
                            <AiOutlineCalendar className="icon-style" />
                            <AiOutlineAim className="icon-style" />
                            <AiOutlinePhone className="icon-style" />
                            <AiOutlineLock className="icon-style" />
                        </IconsWrapper>
                    </InfoContainer>
            </CardObject>
        </CardContainer>
    )
}

export default Card;