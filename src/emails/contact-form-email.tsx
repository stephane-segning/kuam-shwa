import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Hr,
  Section,
  Row,
  Column,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'Arial, sans-serif', color: '#222' }}>
      <Container>
        <Section>
          <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>
            New Contact Form Submission
          </Text>
          <Hr />
          <Row>
            <Column style={{ fontWeight: 'bold', width: '100px' }}>Name:</Column>
            <Column>{name}</Column>
          </Row>
          <Row>
            <Column style={{ fontWeight: 'bold', width: '100px' }}>Email:</Column>
            <Column>{email}</Column>
          </Row>
          <Row>
            <Column style={{ fontWeight: 'bold', width: '100px' }}>Phone:</Column>
            <Column>{phone}</Column>
          </Row>
          <Row>
            <Column style={{ fontWeight: 'bold', width: '100px' }}>Message:</Column>
            <Column style={{ whiteSpace: 'pre-line' }}>{message}</Column>
          </Row>
          <Hr />
          <Text style={{ fontSize: '12px', color: '#888' }}>
            This message was sent via the Simba Kuamshwa contact form.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
