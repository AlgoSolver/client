import ReactTooltip from 'react-tooltip';

const Tooltip =({
  type="dark",
  effect="solid",
  place="top",
  name,
  message,
  children
})=>{
  return <>
    <div data-tip data-for={name} style={{display:'inline-block'}}> {children} </div>
   <ReactTooltip id={name} place={place} type={type} effect={effect}>
    <span>{message}</span>
   </ReactTooltip>
  </>
}

export default Tooltip;
