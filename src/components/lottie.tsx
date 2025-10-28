import Lottie from "lottie-react";
import animation404 from "@/assets/animation404.json";

export default function AnimationExample() {
  return (
    <div style={{ width: 500, height: 250 }}>
      <Lottie animationData={animation404} loop={true} />
    </div>
  );
}
