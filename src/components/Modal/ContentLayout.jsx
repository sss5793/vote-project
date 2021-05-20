import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ContentLayout = (props) => {
  return (
    <Form>
      {props.children}
    </Form>
  )
}

export default ContentLayout;