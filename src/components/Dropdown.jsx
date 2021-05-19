import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowDown} from '../assets/images/arrow_down.svg';
import { ReactComponent as ArrowUp} from '../assets/images/arrow_up.svg';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
	position: relative;
	font-size: ${props => props.fontSize};

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
  height: ${props => props.height};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	font-size: ${props => props.fontSize};
	border: 1px solid #e5e5e5;
`;

const Options = styled.ul`
	position: absolute;
	top: calc(${props => props.height} - 1px);
	right: 0;
	border: 1px solid #e5e5e5;
	width:100%;
	background: #fff;
  transition: opacity 0.4s ease, visibility 0.4s;
`;

const ItemBtn = styled.button`
	width: 100%;
  height: ${props => props.height};
	border: 0;
	border-bottom: 1px solid #dddddd;
	padding: 10px;
	background: transparent;
	text-align: left;
	font-size: ${props => props.fontSize};

	:hover {
		color: #780eff;
	}
`;

const Item = ({id, name, onSelect, fontSize, height}) => (
	<li>
		<ItemBtn fontSize={fontSize} height={height} onClick={onSelect}>{name}</ItemBtn>
	</li>
);

const Dropdown = ({options, defaultValue, onChange, width, height, fontSize}) => {
	const [value, setValue] = useState(defaultValue);
  const [isActive, setIsActive] = useState(false);
  const onClick = (e) => {
		e.stopPropagation();
		setIsActive(!isActive);
	};

	const onSelect = (e) => {
		e.stopPropagation();
		onChange(e.target.innerText);
		setValue(e.target.innerText);
		setIsActive(!isActive);
	}

	return(
	<Wrapper width={width} height={height} fontSize={fontSize}>
		<Button onClick={onClick} height={height} fontSize={fontSize}>
			<span>{value}</span>
			{
				isActive ? <ArrowUp /> : <ArrowDown />
			}
		</Button>
		<Options className={isActive ? 'active' : 'inactive'} height={height}>
			{
				options.map(item => <Item key={item.id + item.name} height={height} fontSize={fontSize} name={item.name} onSelect={onSelect}/>)
			}
		</Options>
	</Wrapper>
)};

Dropdown.defaultProps = {
	options : [{id: 0, name: '항목 1'}],
	defaultValue : '기본',
	onChange: () => {},
	width: '150px',
	height: '40px',
	fontSize: '15px',
}

export default Dropdown;