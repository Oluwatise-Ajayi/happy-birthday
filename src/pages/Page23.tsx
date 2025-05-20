import { Container, Image, Text, Stack } from '@mantine/core';

const Page23 = () => (
  <Container size="sm" px={0} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Stack align="center" gap="md" style={{ width: '100%' }}>
      <Image
        src="/images/dad23.jpeg"
        alt="Dad's kind moments"
        radius="lg"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)', width: '100%', maxWidth: 400, height: 'auto' }}
        fit="cover"
      />
      <Text size="md" style={{ fontFamily: 'Merriweather, serif', color: '#374151', textAlign: 'center' }}>
        May your kindness and compassion continue to touch lives. Your gentle heart is a blessing to us all!
      </Text>
    </Stack>
  </Container>
);

export default Page23; 