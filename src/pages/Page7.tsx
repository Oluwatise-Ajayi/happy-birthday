import { Container, Image, Text, Stack } from '@mantine/core';

const Page7 = () => (
  <Container size="sm" px={0} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Stack align="center" gap="md" style={{ width: '100%' }}>
      <Image
        src="/images/dad7.jpeg"
        alt="Dad's joyful moment"
        radius="lg"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)', width: '100%', maxWidth: 400, height: 'auto' }}
        fit="cover"
      />
      <Text size="md" style={{ fontFamily: 'Merriweather, serif', color: '#374151', textAlign: 'center' }}>
        Wishing you abundant health and vitality in the years ahead. May you continue to shine with energy and joy!
      </Text>
    </Stack>
  </Container>
);

export default Page7; 