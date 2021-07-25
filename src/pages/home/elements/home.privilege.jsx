import styled from "styled-components";
import Text from '../../../components/Text';
import cube from '../../../assets/images/cube.png'
import searching from '../../../assets/images/searching.svg'
import thinking from '../../../assets/images/thinking.svg'

const BoxContainer = styled.div`
    display: flex;
    gap:2rem;
    padding:2rem;
    padding-bottom: 6rem;
    flex-wrap: wrap;
    .box{
        background:${({theme})=>theme.colors.light[4]};
        box-shadow:${({theme})=>theme.elevation[4].shadow};
        padding:2rem;
        border-radius: 1rem;
        flex:1;
        &__img{
            text-align: center;
            img{
                width:10rem;
                
            }
        }
        &__body{
            text-align: center;
        }
    }
`
const PrivilegeContainer = styled.div`
    background-color: ${({theme})=>theme.colors.light[2]};
   
`

const Box = ({data})=>{
    return <div className="box">
        <div className="box__img"><img src={data.img} alt="" /></div>
        <div className="box__body">
                <Text type="h3" bold>
                    {data.title}
                </Text>
                <Text type="p">
                    {data.body}
                </Text>
        </div>
    </div>
}
const Privilege = ()=>{
    const data=[
        {
            img:thinking,
            title:"Think it through",
            body:"One of our mission is to ensure you will be able to understand how you think on specific poblem and we will provide you in this specific problem with the best solutions and how to upgrade your skills"
        },
        {
            img:searching,
            title:"Searching",
            body:"although when you want improve some skill of you, you will be very confused because there is no one place to get your information from but we provide you will all you need to able o master this skill of you by your self"
        },
        {
            img:cube,
            title:"Make use of data",
            body:"although we provide you with enormous amount of data, but data not only the case, the case is how you test your self and be sure you have get sharp with this skill, the answer is by practsing, we provide you with all you need to test your thoughts and ideas"
        },
    ]
    return <PrivilegeContainer>
        <div className="wrapper">
            <Text type="h1" layer={0} bold>
                Our Mission
            </Text>
            <BoxContainer>
                {data.map(item=><Box key={item.title} data={item} />)}
            </BoxContainer>
        </div> 
    </PrivilegeContainer>
}
export default Privilege;

