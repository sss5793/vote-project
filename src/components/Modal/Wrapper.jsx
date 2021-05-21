import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content :center;
`;

const Container = styled.div`
  width: 683px;
  height: ${props => props.height};
  background: #fff;
  display: flex;
  flex-direction: column;
`;

const WrapperComp = (props) => {
  return (
    <Wrapper>
      <Container height={props.height}>
        {props.children}
      </Container>
    </Wrapper>
  )
}

WrapperComp.defaultProps = {
  height: '602px'
}

export default WrapperComp;