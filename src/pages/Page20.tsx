import { Container, Image, Text, Stack } from '@mantine/core';

const Page20 = () => (
  <Container size="sm" px={0} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Stack align="center" gap="md" style={{ width: '100%' }}>
      <Image
        src="/images/dad20.jpeg"
        alt="Dad's grateful moments"
        radius="lg"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)', width: '100%', maxWidth: 400, height: 'auto' }}
        fit="cover"
      />
      <Text size="md" style={{ fontFamily: 'Merriweather, serif', color: '#374151', textAlign: 'center' }}>
        May your heart be filled with gratitude and appreciation. Your thankful spirit brightens our days!
      </Text>
    </Stack>
  </Container>
);

export default Page20; 