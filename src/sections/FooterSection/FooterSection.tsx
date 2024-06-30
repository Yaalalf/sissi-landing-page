import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";
import "./style/mobile.css";
import "./style/desktop_media_query.css";

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
        <div className="InfoContent">
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

        <iframe
          className="LocationFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.0579259194137!2d-2.606347324191256!3d39.26425227164808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd688758508a3e4d%3A0x36e93959d9b87cf9!2sMedicina%20Est%C3%A9tica%20Sissi!5e0!3m2!1ses!2scu!4v1719757050329!5m2!1ses!2scu"
          width="200"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <SocialMediaLinks />
    </footer>
  );
}
