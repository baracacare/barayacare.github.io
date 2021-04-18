import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

import { Container, Row, Col, Card } from 'react-bootstrap';

function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            Tentang Kami
            <br />
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br />
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popul
            </p>
          </Col>
          <Col>
            Kantor Pusat
            <br />
            <br />
            <p>
              packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web
              sites still in their infancy. Various versions have evolved over
              the years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
          </Col>
          <Col>
            Kontak
            <br />
            <br />
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics
          </Col>
        </Row>
      </Container>
      <Wrapper>
        <Container>
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
