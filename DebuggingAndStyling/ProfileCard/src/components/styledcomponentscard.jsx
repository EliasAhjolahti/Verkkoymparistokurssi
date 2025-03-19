import React from "react";
import styled from "styled-components"


const Card = styled.div`
  background-color: #f3f4f6;
  border: 1px solid white;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: auto;
`;

const Heading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: black;
`;

const Paragraph = styled.p`
  font-size: 14px;
  text-align: center;
  color: #666;
`;

const Button = styled.button`
  background-color: #1976d2;
  color: white;
  padding: 20px;
  border-radius: 4px;
  cursor: pointer;
  width: 200px
`;

export default function Styledcomponentscard(){
    return(
    <Card>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaG3PuUHQv9LFHhY36Jbolyv0qeS1pKXaew&s" alt="avatar" />
      <Heading>Matti Meikäläinen</Heading>
      <Paragraph>Full-stack developer, passionate about coding and coffee</Paragraph>
      <Button>Contact Me</Button>
    </Card>
    );
}