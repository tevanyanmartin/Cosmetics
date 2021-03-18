import "./styles.css";
import faceLogo from "../Pics/facebook-circular-logo.png";
import instaLogo from "../Pics/instagram.png";
import youtubeLogo from "../Pics/youtube.png";

function Footer() {
  return (
    <footer>
      <div className="footer1">
        <h3>Մեր ապրանքներ</h3>
        <ul>
          <li className="apr">ԱՊՐԱՆՔ</li>
          <li className="apr">ԱՊՐԱՆՔ</li>
          <li className="apr">ԱՊՐԱՆՔ</li>
          <li className="apr">ԱՊՐԱՆՔ</li>
          <li className="apr">ԱՊՐԱՆՔ</li>
          <li className="apr">ԱՊՐԱՆՔ</li>
        </ul>
      </div>
      <div className="footer2">
        <h3>CONNECT</h3>
        <ul>
          <li className="apr">
            <a href="https://www.google.com/" target="_blank">
               <img src={instaLogo} className="logos" />
            </a>{" "}
          </li>
          <li className="apr">
            <a href="https://www.google.com/" target="_blank">
               <img src={faceLogo} className="logos" />
            </a>
          </li>
          <li className="apr">
            <a href="https://www.google.com/" target="_blank">
              <img src={youtubeLogo} className="logos" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
