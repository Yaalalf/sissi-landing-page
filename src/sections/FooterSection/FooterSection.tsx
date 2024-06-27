import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";
import "./style/mobile.css";

export default function FooterSection() {
  return (
    <footer className="FooterSection">
      <div className="LogoContainer">
        <div className="Logo"></div>
      </div>

      <p className="Slogan">
        Tu Bienestar <br /> nuestra prioridad <br />
        💙
      </p>
      <div className="InfoContainer">
        <p className="Info Phone">
          <span className="Icon"></span>+34 967 740 850
        </p>
        <p className="Info Address">
          <span className="Icon"></span> Pl. Ramón y Cajal, 5, 02600
          Villarrobledo, Albacete, Spain
        </p>
        <p className="Info Email">
          <span className="Icon"></span> sissi.medicinaestetica@gmail.com
        </p>
        <p className="Info Hour">
          <span className="Icon"></span> L-M-M-J-V | 9:00 a 14:00 y de 16:00 a
          19:00 <br /> S | 10:00 a 14:00
        </p>
      </div>
      <SocialMediaLinks />
    </footer>
  );
}
