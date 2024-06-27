import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import "./style/mobile.css";

export default function InformationTopBanner() {
  return (
    <div className="InformationTopBanner">
      <p className="Phone">
        <span className="Icon"></span>+34 967 740 850
      </p>
      <SocialMediaLinks />
    </div>
  );
}
