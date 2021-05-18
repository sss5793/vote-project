import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowDown} from '../assets/images/arrow_down.svg';
import { ReactComponent as ArrowUp} from '../assets/images/arrow_up.svg';

const Wrapper = styled.div`
  width: 150px;
  height: 40px;
	position: relative;
	font-size: 15px;

	.active {
		visibility: visible;
		opacity: 1;
	}

	.inactive {
		visibility: hidden;
		opacity: 0;
	}
`;

const Button = styled.button`
	border: 0;
	background: transparent;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	cursor: pointer;
	font-size: 15px;
	border: 1px solid #e5e5e5;
`;

const Options = styled.ul`
	position: absolute;
	top: 41px;
	right: 0;
	border: 1px solid #e5e5e5;
	width:100%;
	background: #fff;
  transition: opacity 0.4s ease, visibility 0.4s;
`;

const ItemBtn = styled.button`
	width: 100%;
	border: 0;
	border-bottom: 1px solid #dddddd;
	padding: 10px;
	cursor: pointer;
	background: transparent;
	text-align: left;
	font-size: 15px;

	:hover {
		color: #780eff;
	}
`;

const Item = ({id, name, onSelect}) => (
	<li>
		<ItemBtn onClick={onSelect}>{name}</ItemBtn>
	</li>
);

const Dropdown = ({options, defaultValue, onChange}) => {
	const [value, setValue] = useState(defaultValue);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
		setIsActive(!isActive);
	};

	const onSelect = (e) => {
		onChange(e.target.innerText);
		setValue(e.target.innerText);
		setIsActive(!isActive);
	}

	return(
	<Wrapper>
		<Button onClick={onClick}>
			<span>{value}</span>
			{
				isActive ? <ArrowUp /> : <ArrowDown />
			}
		</Button>
		<Options className={isActive ? 'active' : 'inactive'}>
			{
				options.map(item => <Item key={item.id + item.name} name={item.name} onSelect={onSelect}/>)
			}
		</Options>
	</Wrapper>
)};

Dropdown.defaultProps = {
	options : ['아구몬', '피카츄', '야도란'],
	defaultValue : '기본',
	onChange: () => {},
}

export default Dropdown;