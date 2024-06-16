import AnimatedVisibilityObserver from "../AnimatedVisibilityObserver/AnimatedVisibilityObserver";
import "./style/mobile.css";

export default function TitleContainer({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="TitleContainer">
      <AnimatedVisibilityObserver once>
        <h3>{title}</h3>
      </AnimatedVisibilityObserver>
      <AnimatedVisibilityObserver once delay={200}>
        <h4>{subtitle}</h4>
      </AnimatedVisibilityObserver>
    </div>
  );
}
