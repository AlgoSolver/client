import styled from 'styled-components';
import classNames from 'classnames'
const BoxContainer = styled.div`
	padding: ${({p})=>p};
	margin: ${({m})=>m};
	border-radius:${({radius})=>radius};
	box-shadow:${({shadow,theme})=>theme.elevation[shadow].shadow};
	background:${({bg,theme,layer})=>theme.colors[bg][layer]};
	width:${({width})=>width};
	height:${({height})=>height}; 
    &.center{
    	display: flex;
    	justify-content: center;
    	align-items: center;
    }
`
const Box = ({
	p="2rem",
	m="0",
	radius="0",
    shadow=1,
    height="auto",
    width="auto",
    bg="light",
    layer= (bg ==="primary" ? 3 : 4),
    children,
    center,
    className,
    ...props
})=>{
	const classes = classNames(
        center && "center",
        className
		)
	return <BoxContainer
	p={p}
	m={m}
	radius={radius}
	bg={bg}
	layer={layer}
	shadow={shadow}
	width={width}
	height={height}
	className={classes}
	{...props}
	>
		{children}
	</BoxContainer>
}
export default Box;