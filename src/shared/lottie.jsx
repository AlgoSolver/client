import Lottie from "react-lottie";

export default function LottieAnimation({ lotti, width="100%", height="100%" }) {
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
        height={width}
        width={width}
        isPaused={false}
      />
    </div>
  );
};
