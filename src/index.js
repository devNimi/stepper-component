import React, { Component } from "react";
import { Flex, Image, Box } from "rebass";
import styled, { keyframes } from "styled-components";

import ic_done from "./ic_done.svg";
import Colors from "./Colors";

const StepperContainer = styled(Flex)`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 10px 2px #ddd;
  padding: ${({ px, py }) => `${py}px ${px}px `};
  border-radius: 30px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const RoundImage = styled(Image)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${Colors.GREEN};
  border: 2px solid ${Colors.GREEN};
  border-radius: ${({ size }) => size}px;
`;

const borderfill = keyframes`
    0%   { opacity:0; }
    100% { opacity:1; }
`;

const RoundIcon = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 25px;

  ${({ active }) =>
    active
      ? `
        animation-delay: 1s;
        box-shadow: 0px 0px 0px 6px ${Colors.GREEN} inset;
        border: 2px solid ${Colors.GREEN};
        transition: box-shadow 1s;
        transition: border 1s;
        `
      : `
        border: 2px solid #ccc;
        background-color:#fff;
      `}
`;

const lineFillAnim = keyframes`

`;
//  0%   { width:0px; }
// 100% { width:30px; }

const Line = styled.div`
  background-color: #ccc;
  width: 30px;
  height: 2px;
`;

const GreyLine = styled(Line)`
  background-color: #ccc;
  width: ${({ width }) => width}px;
`;

const GreenLine = styled(Line)`
  background-color: ${Colors.GREEN};
  animation: ${lineFillAnim} 1s linear;
  width: ${({ width }) => width}px;
`;

const StepRound = ({ active, done, size }) =>
  done ? (
    <RoundImage src={ic_done} size={size} />
  ) : (
    <RoundIcon active={active} size={size} />
  );

const StepLine = ({ active, width }) => (
  <GreyLine width={width}>{active && <GreenLine width={width} />}</GreyLine>
);

class Stepper extends Component {
  render() {
    let {
      steps = 3,
      currentStep = 1,
      px = 16,
      py = 12,
      size = 20,
      lineWidth = 30
    } = this.props;

    currentStep = currentStep - 1;

    const width = steps * (size + 4) + lineWidth * (steps - 1) + 2 * px;
    const height = size + 2 * py;
    const setpsArray = Array(steps).fill();

    return (
      <StepperContainer width={width} height={height} py={py} px={px}>
        {setpsArray.map((i, index) => {
          const props = {
            done: index <= currentStep - 1,
            active: index === currentStep,
            size
          };
          const lineProps = {
            active: index <= currentStep - 1,
            width: lineWidth
          };
          return (
            <Flex alignItems={"center"}>
              <StepRound {...props} />
              {index !== steps - 1 && <StepLine {...lineProps} />}
            </Flex>
          );
        })}
      </StepperContainer>
    );
  }
}

export default Stepper;
