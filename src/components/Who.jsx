import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 70px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Description = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
`;
const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov: 25, position:[5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube scale={.5}/>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/separator.png" />
            <Subtitle>Who we are</Subtitle>
          </WhatWeDo>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod
            magnam esse debitis voluptas?
          </Description>
          <Button>See our words</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
