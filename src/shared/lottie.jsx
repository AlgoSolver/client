import Lottie from "react-lottie";

export default function LottieAnimation({ lotti, width, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie 
        options={defaultOptions} 
        height="100%" 
        width="100%"
        isPaused={false} 
      />
    </div>
  );
};