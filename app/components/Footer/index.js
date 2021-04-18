import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <div className="footer-content">
      <Container>
        <Row>
          <Col>
            <h5>Tentang Kami</h5>
            <br />
            <p>
              Tujuan utama kami adalah membantu sesama, mewujudkan dunia yang
              lebih nyaman bagi umat manusia. Sampai saat ini baraya care telah
              bergerak di beberapa segmen yaitu, Yatim Piatu dan Dhuafa, Sosial,
              Pendidikan, Kesehatan, Tanggap Darurat Bencana Alam, Berkurban
              Idul Adha Pelosok Desa.
            </p>
          </Col>
          <Col>
            <h5>Kantor Pusat</h5>
            <br />
            <p>
              Jl. Rinjani VI No.121 Rt. 001 Rw. 012 Kel. Abadijaya Kec.
              Sukmajaya Kota Depok
            </p>
          </Col>
          <Col>
            <h5>Donasi</h5>
            <br />
            <p>
              Rek Donasi. Bank BRI Atas Nama Baraya Care
              <br />
              1163 01 000278 565
            </p>
          </Col>
          <Col>
            <h5>Kontak</h5>
            <br />
            <p>carebaraya@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <Wrapper>
        <Container className="footer-credit">
          <Row>
            <Col align="center">
              <FormattedMessage
                {...messages.authorMessage}
                values={{
                  author: (
                    <A href="https://twitter.com/burhanmubarok">
                      Burhan Mubarok
                    </A>
                  ),
                }}
              />
            </Col>
          </Row>
        </Container>
        <section />
      </Wrapper>
    </div>
  );
}

export default Footer;
