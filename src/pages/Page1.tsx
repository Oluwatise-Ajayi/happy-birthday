import { Title, Container } from '@mantine/core';

const Page1 = () => (
  <Container size="md" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Title
      order={1}
      aria-label="Happy Birthday to the World's Best Dad!"
      style={{
        fontFamily: '"Pacifico", cursive',
        fontSize: '2.5rem',
        color: '#ff6f61',
        textAlign: 'center',
        textShadow: '2px 2px 8px #fff3e0',
      }}
    >
      Happy Birthday to the World&apos;s Best Dad!
    </Title>
  </Container>
);

export default Page1; 