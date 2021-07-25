import styled from "styled-components";
import Text from '../../../components/Text';
import graph from '../../../assets/images/graph.png';
import playground from '../../../assets/images/playground.png'
import ideas from '../../../assets/images/idea.svg'
import splashes from '../../../assets/images/splashes.png'

import Button from "../../../components/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../../assets/icons/";

const data=[
    {
        title:"Tutorials",
        body:`Practicing different tracks is a very powerful feature that will make the beginners feel comfortable with the coding, comfortable with the data-structure, comfortable with problem solving techniques. \nTutorials are supposed to help computer science students, competitive programmers to
        learn, apply and be more comfortable reading and writing algorithms and data structures
        solutions to the problems they face in their daily work in software development.`,
        img:graph,
        button:"Go to Tutorials",
        to:"/practise"
    },
    {
        title:"Playground",
        body:`The playground is a feature to speed up the student’s learning process by providing a
        place to compile/run their code right in the browser so they don’t need to switch to and
        from their IDE to apply the concepts they’ve learned. In the playground we allow the
        user to run their custom code and return status about the run time of their code as long
        as the memory used. Currently the main supported programming languages are C, C++
        but we aim to support much more in the future as the development continues.`,
        img:playground,
        button:"Go to Playground",
        to:"/playground/new/empty"
    },
    {
        title:"Problems",
        body:`The problems section is supposed to provide users a place to test the knowledge they’ve
        gained in the tutorials section by providing algorithmic problems to apply the algorithms
        and data structures they’ve studied and to tell them some statistics about their code
        such as the time and space complexity of their code as long as the running time in ms
        and memory used and also whether their code is accepted or provides wrong solutions or
        is too slow to pass the problem.`,
        img:ideas,
        button:"Go to Problems",
        to:"/problems"
    },
    {
        title:"Blog",
        body:`Blog is very Helpful to the users and can be used in many areas for example
        asking for help if you got stuck
        adding problems solution and how to solve them
        announcement of important events
        generally it is  a great tool to share Experience
        .`,
        img:splashes,
        button:"Go to Blog",
        to:"/blog"
    },
]

const FeaturesContainer = styled.div`
        background: ${({theme})=>theme.colors.light[4]};


`
const FeatureSectionContainer = styled.div`
        > .right{
            background: ${({theme})=>theme.colors.light[2]};
        }
        > .left{
            background: ${({theme})=>theme.colors.light[4]};
        }
    .feature{
        padding:7rem 0;
        display: flex;
        flex-wrap: wrap;
        gap:4rem;
        &__text{
            flex:1;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
           
        }
        &__img{
            display: flex;
            justify-content: center;
            img{
                height:400px;
                width:100%;
            }
            flex:1
        }
        &.right{
            flex-direction:row-reverse;
        }
    }

`
const FeatureSection = ({data,dir="left"})=>{
    return <div className={dir}>
    <div className="wrapper">
        <div className={"feature " + dir}>
        <div className="feature__text">
            <div>
            <Text type="h1" bold>
                {data.title}
            </Text>
            <Text type="h4">
                {data.body}
            </Text>
            </div>
            <div className="feature__text--foot">
                { data.button && <Link to={data.to}>
                    <Button  withIcon={ArrowRight} circle>
                    {data.button}
                </Button>
                </Link>}
            </div>
        </div>
        <div className="feature__img">
            <img src={data.img}  alt="" />
        </div>
    </div>
    </div>
    </div>
}
const Features = ()=>{
    return <FeaturesContainer>
        <div className="wrapper">
            <Text type="h1" bold>
                Our Features
            </Text>
        </div>
            <FeatureSectionContainer>
                {data.map((item,idx)=><FeatureSection data={item} key={idx} dir={ idx % 2 === 1 ? "right" : "left"} />)}
            </FeatureSectionContainer>
    </FeaturesContainer>
}

export default Features;