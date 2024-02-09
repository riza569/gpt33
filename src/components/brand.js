import "../Css/brand.css";
import google from "../assets/google.png";
import dropbox from "../assets/dropbox.png";
import shopify from "../assets/shopify.png";
import atlassion from "../assets/atlassian.png";
import slack from "../assets/slack.png";
const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="#" />
    </div>
    <div>
      <img src={slack} alt="#" />
    </div>
    <div>
      <img src={atlassion} alt="#" />
    </div>
    <div>
      <img src={dropbox} alt="#" />
    </div>
    <div>
      <img src={shopify} alt="#" />
    </div>
  </div>
);

export default Brand;
