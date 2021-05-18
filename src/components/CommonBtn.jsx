import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 35px;
  background: #780EFF;
  border-radius: 5px;
  color: #fff;
  border: 0;
  font-size: 16px;
  font-weight: 600;
`;

const CommonBtn = ({name}) => (
    <Button>
        {name}
    </Button>
);

export default CommonBtn;