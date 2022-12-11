import React, { useEffect } from 'react';
import useLanguage from '../../hook/useLanguage'
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import bannerImage from '../../assets/banner.jpg';
import imgMahran from '../../assets/img-mahran.jpg';
import imgTegar from '../../assets/img-tegar.jpg';
import imgBeltra from '../../assets/img-beltra.jpg';

function About() {
  const text = useLanguage()
  const [initializing, setInitializing] = React.useState(true);

  useEffect(() => {
    setInitializing(false);
  }, []);

  if (initializing === true) {
    return (
      <div className="indicator">
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <Container fluid>
        <Row className="about-header">
          <Col className="about-title">
            <h1>Super Healthy</h1>
          </Col>
          <Col className="about-tagline">
            <div>
              <p>
                <strong>Super Healthy</strong>{text.about.tagline} 
              </p>
            </div>
          </Col>
        </Row>

        {/* Banner */}
        <Row className="about-banner-container">
          <Col className="about-banner">
            <img src={bannerImage} alt="bannerimage" className="about-banner-image" />
          </Col>
          <Col className="about-banner-text">
            <p>{text.about.banner}</p>
          </Col>
        </Row>

        {/* Visi Misi */}
        <Row className="about-vm">
          <Col>
            <div>
              <h3>{text.about.aboutvm1}</h3>
              <p>
              {text.about.vm1desc}
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <h3>{text.about.aboutvm2}</h3>
              <p>
              {text.about.vm2desc}
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <h3>{text.about.aboutvm3}</h3>
              <p>
              {text.about.vm3desc}
              </p>
            </div>
          </Col>
        </Row>

        <Row className="creator-title-wrapper py-5">
          <h1>{text.about.creator}</h1>
        </Row>
        <Row className="about-creator">
          <Col>
            <div className="creator-container">
              <div className="creator-image">
                <img src={imgMahran} alt="mahranImage"></img>
              </div>
              <div className="creator-desc">
                <h3>Mahran Radifan Zhafir</h3>
                <h5>The Developer</h5>
                <p>
                {text.about.creator1}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="about-creator">
          <Col>
            <div className="creator-container">
              <div className="creator-image">
                <img src={imgTegar} alt="tegarImage"></img>
              </div>
              <div className="creator-desc">
                <h3>Tegar Alfalakh Thamrin</h3>
                <h5>The Developer</h5>
                <p>
                {text.about.creator2}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="about-creator">
          <Col>
            <div className="creator-container">
              <div className="creator-image">
                <img src={imgBeltra} alt="beltraImage"></img>
              </div>
              <div className="creator-desc">
                <h3>Beltra Saura Rahmadan</h3>
                <h5>The Developer</h5>
                <p>
                {text.about.creator3}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
