import styled, { keyframes } from "styled-components";

const FullBouncing = keyframes`
    to {
        opacity: 0.1;
        transform: translate3d(0, -16px, 0);
    }
`;
const Bouncing = keyframes`
    to {
        opacity: 0.1;
        transform: translate3d(0,-3px, 0);
    }
`;
const LoadingPage = styled.div`
  &.full{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: transparent;
}
  .modal__container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  }
  .bouncingLoader > div,
  .bouncingLoader:before,
  .bouncingLoader:after {
    display: inline-block;
    width: ${({full})=> full ? "3rem" : '1rem'};
    height: ${({full})=> full ? "3rem" : '1rem'};
    background: ${({theme,type,layer}) => theme.colors[type][layer]};
    border-radius: 50%;
    animation:${({full})=> full ? FullBouncing :Bouncing} 0.6s infinite alternate;
  }
  .bouncingLoader > div,
  .bouncingLoader:before,
  .bouncingLoader:after {
    content: " ";
  }
  .bouncingLoader > div {
    margin: 0 ${({full})=> full ? '1rem' :'.3rem'};
  }
  .bouncingLoader > div {
    animation-delay: 0.2s;
  }
  .bouncingLoader:after {
    animation-delay: 0.4s;
  }
`;
const LoadingModal = ({ loading=true,full=true,type="primary",layer=1 }) => {
  if (loading) {
    return (
      <LoadingPage full={full} layer={layer} type={type} className={full ? "full" : ''}>
        <div className="modal__container">
          <div className="bouncingLoader">
            <div></div>
          </div>
        </div>
      </LoadingPage>
    );
  } else return null;
};
export default LoadingModal;