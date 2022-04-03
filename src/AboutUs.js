import './AboutUs.css';
import Card from './Card';
import aboutUsImage1 from './static/images/aboutus-image-1.png';
import aboutUsImage2 from './static/images/aboutus-image-2.png';
import aboutUsImage3 from './static/images/aboutus-image-3.png';
import aboutUsImage4 from './static/images/aboutus-image-4.png';

function AboutUs() {
  return (
    <div className="explore-container" id="aboutUs">
      <div className="heading-container">
        <p className="heading">About Us</p>
        <div className="sub-heading">Allow us to tell you a short story...</div>
      </div>
      <div className="body-container">
        <Card img={aboutUsImage1}>
          <div className="aboutus-card-content">
            <div>
              <p className="main-heading">Chapter I</p>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun
                </p>
              </div>
            </div>
          </div>
        </Card>
        <Card img={aboutUsImage2}>
          <div className="aboutus-card-content">
            <div>
              <p className="main-heading">Chapter II</p>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun
                </p>
              </div>
            </div>
          </div>
        </Card>
        <Card img={aboutUsImage3}>
          <div className="aboutus-card-content">
            <div>
              <p className="main-heading">Chapter III</p>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun
                </p>
              </div>
            </div>
          </div>
        </Card>
        <Card img={aboutUsImage4}>
          <div className="aboutus-card-content">
            <div>
              <p className="main-heading">Chapter IV</p>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default AboutUs;
