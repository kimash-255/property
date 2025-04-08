import FooterSection from "./footer";
import Copyright from "./copyright";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#fff", position: "relative", zIndex: 1 }}>
        <FooterSection />
        <Copyright />
      </div>
    </>
  );
};

export default Footer;
