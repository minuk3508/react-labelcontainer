import React, { ReactNode } from "react";
import styled from "styled-components";
import { BiCheck, BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import { useRef } from "react";

interface Iprops {
  children: ReactNode;
  giveMeFn?: () => {};
  height?: string;
  giveMeValue?: boolean;
}
interface IStyle {
  checkedValue?: string;
  height?: string | undefined;
}
interface IComponent {
  Wrapper: JSX.Element;
  Title: JSX.Element;
  Description: JSX.Element;
  Button: JSX.Element;
  Checking: JSX.Element;
  Hover: JSX.Element;
}
const Container = styled.div<IStyle>`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 300px;
  height: ${(props) => props.height};
  margin: 10px 20px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.3s;
`;
const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  background-color: white;
  :hover {
    cursor: pointer;
    background-color: rgba(100, 100, 111, 0.2);
    color: white;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  height: 70px;
  border-radius: 20px;
`;
const Description = styled.div`
  display: flex;
  padding: 5%;
  font-size: 0.8rem;
  color: gray;
  width: 100%;
  height: auto;
  border-radius: 20px;
`;
const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: none;
  background-color: white;
`;
const MarkingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
`;
const Marking = styled.div<IStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38%;
  height: 64%;
  color: white;
  background-color: ${(props) => props.checkedValue};
  border-radius: 50%;
  transition: all 0.3s;
  :hover {
    cursor: pointer;
  }
`;
const CheckValue = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
`;
const HoverWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0% 10%;
  width: 100%;
  height: 50px;
  background-color: white;
  border: 1px, solid, black;
  :hover {
    cursor: pointer;
    background-color: rgba(100, 100, 111, 0.2);
    color: white;
  }
`;
class LabelContainer implements IComponent {
  Wrapper: JSX.Element;
  Title: JSX.Element;
  Description: JSX.Element;
  Button: JSX.Element;
  Checking: JSX.Element;
  Hover: JSX.Element;

  static Wrapper = ({ children, height }: Iprops) => {
    return <Container height={height}>{children}</Container>;
  };
  static Title = ({ children }: Iprops) => {
    return <Title>{children}</Title>;
  };
  static Description = ({ children }: Iprops) => {
    return <Description>{children}</Description>;
  };
  static Button = ({ children, giveMeFn }: Iprops) => {
    return <Button onClick={giveMeFn}>{children}</Button>;
  };
  static Checking = ({ children, giveMeFn }: Iprops) => {
    const [value, setValue] = useState(false);
    const ref = useRef(null);
    const onClick = () => {
      if (giveMeFn) {
        giveMeFn();
      }
      setValue((prev) => !prev);
    };
    return (
      <CheckBox>
        <MarkingBox>
          <Marking onClick={onClick} checkedValue={value ? "black" : "#f1f1f1"}>
            <BiCheck size="24" />
          </Marking>
        </MarkingBox>
        <CheckValue ref={ref}>{children}</CheckValue>
      </CheckBox>
    );
  };
  static Hover = ({ children, giveMeFn }: Iprops) => {
    const onMouseEnter = () => {
      if (giveMeFn) giveMeFn();
    };
    const onMouseLeave = () => {
      if (giveMeFn) giveMeFn();
    };
    return (
      <HoverWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
        <BiChevronRight />
      </HoverWrapper>
    );
  };
}

export default LabelContainer;
