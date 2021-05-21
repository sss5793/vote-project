import styled from 'styled-components';

const ItemListTitle = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  border-bottom: 1px solid #E5E5E5;
  padding: 20px 0;
`;

const ItemWrapper = (props) => {
  const { title } = props;

  return (
    <ItemListTitle>
      <p>{title}</p>
      {
        props.children
      }
    </ItemListTitle>
  )
}

ItemWrapper.defaultProps = {
  title: '제목'
}

export default ItemWrapper;