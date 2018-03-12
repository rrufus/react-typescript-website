import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    text: string;
    link?: string;
}
interface ButtonsProps {
}

const ButtonStyle = styled.a`
  color: gray;
  text-decoration: none;
  &:hover {
      color: white;
  }
`;

const Button: React.SFC<ButtonProps> = (b: ButtonProps) => {
    return <ButtonStyle href={b.link}>{b.text}</ButtonStyle>;
};

const ButtonListStyle = styled.div`
display: flex;
justify-content: space-between;`;

const Buttons: React.SFC<ButtonsProps> = () => {
    return (
        <ButtonListStyle>
            <Button text="Github" link="https://github.com/rrufus" />
            <Button text="Instagram" link="https://www.instagram.com/rufusrussell/" />
            <Button text="Medium" link="https://medium.com/@rufusrussell" />
            <Button text="Resume" link="./res_general.pdf" />
            <Button text="Twitter" link="https://twitter.com/rufusr_official" />
        </ButtonListStyle>
    );
};

export default Buttons;
