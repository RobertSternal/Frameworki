import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';


//import { SomeSpan } from './Components';

const Wrapper = styled.div`
border: 10px solid;
`;

const SecondSpan = styled.span`
border: 3px solid yellow
`;

const ExampleDiv = styled.div<{isActive: boolean}>`
backgroud:yellow;
${props=>props.isActive && css`
background:blue;
`}
`;


export const TopMenu: FC = () => {
    return (
        <Wrapper>
        <SecondSpan>Cos tam</SecondSpan>
        <ExampleDiv isActive> cos tam</ExampleDiv>
        <ExampleDiv isActive={false}>cos tam</ExampleDiv>
        <Link to="posts"> Posts</Link>
        </Wrapper>
    );
};