import styled from 'styled-components';
import Input from './Input';
import { ReactComponent as Delete} from '../../assets/images/delete.svg';
import { ReactComponent as Add} from '../../assets/images/add_circle_outline.svg';
import CommonBtn from '../CommonBtn';
import DatePicker from './DatePicker';

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
  height: 582px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #E5E5E5;
  padding: 30px 20px;
  font-size: 20px;
`;

const Form = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ItemList = styled.section`
  margin-top: 10px;
`;

const ItemListTitle = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  border-bottom: 1px solid #E5E5E5;
  padding-bottom: 20px;
`;

const ScrollView = styled.div`
  border-bottom: 1px solid #E5E5E5;
  overflow-y: auto;
  height: 146px;
`;

const Item = styled.div`
  display: flex;
  height: 35px;
  align-items:center;
  justify-content: space-between;
  margin: 10px;
`;

const ItemInput = styled.input`
  width: 100%;
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #E5E5E5;
  font-size: 14px;
`;

const BtnWrapper = styled.section`
  width: 100%;
  padding: 0 20px 20px 0;
  text-align: right;

  button {
    margin: 0 10px;
  }

  button:last-child {
    margin-right : 0;
  }
`;

const CreateCard = () => {
  return (
    <Wrapper>
      <Container>
        <Title>투표 생성</Title>
        <Form>
          <Input label={'제목'}/>
          <Input label={'생성자'}/>
          <DatePicker />
          <ItemList>
            <ItemListTitle>
              <p>항목</p>
              <button>
                <Add />
              </button>
            </ItemListTitle>
            <ScrollView>
              <Item>
                <ItemInput />
                <button>
                  <Delete />
                </button>
              </Item>
              <Item>
                <ItemInput />
                <button>
                  <Delete />
                </button>
              </Item>
              <Item>
                <ItemInput />
                <button>
                  <Delete />
                </button>
              </Item>
            </ScrollView>
          </ItemList>
        </Form>
        <BtnWrapper>
          <CommonBtn name={'생성'}/>
          <CommonBtn name={'닫기'}/>
        </BtnWrapper>
      </Container>
    </Wrapper>
  )
}

export default CreateCard;