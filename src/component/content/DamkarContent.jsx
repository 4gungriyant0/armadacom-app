import {Container, Row, Col, Button} from "react-bootstrap";
import Logo from "../../assets/logo/damkar.png";
import Banner from "../../assets/img/damkar.png";

const DamkarContent = () => {
  return (
    <>
      <Container className="cdamkar">
        <Row className="damkar text-light">
          <Col sm={5} className="gbdamkar d-flex justify-content-center align-items-center">
            <img src={Banner} alt="slide" />
          </Col>
          <Col sm={6} className="d-flex flex-column text-center justify-content-start justify-content-md-center align-items-center px-md-5 pt-md-4 pb-4">
            <img src={Logo} alt="slide" className="logodamkar" />
            <div className="ls ts fw-bold fs-4 pb-md-3  d-none d-md-block">ANDA BELI KAMI ANTAR</div>
            <div className="body-text-light text-opacity-75 mx-4">Damkar hadir sebagai solusi penuh kenyamanan untuk kebutuhan jualan, servis, dan antar jemput. Nikmati kemudahan servis dan beli tanpa perlu keluar rumah</div>

            <Button className="btn-a mt-4 px-3 py-2" variant="light" href="https://damkar.armadacom.id/" target="_blank">
              Lihat Harga
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DamkarContent;
