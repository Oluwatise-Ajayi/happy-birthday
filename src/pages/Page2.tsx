import { Container, Text, ScrollArea } from '@mantine/core';

const letter = `Dear Dad,\n\n
As you hit this incredible milestone of your 50th birthday, I wanted to take a moment to express just how much you mean to me.  It's hard to put into words the depth of my gratitude and love for you, but I hope this letter conveys even a fraction of it.

I thank you for all the life lessons and unwavering support you've always provided, you've been my constant source of strength and inspiration. You've taught me so much about life, love, and how to be a good person.

You've always been there for me, through thick and thin. You celebrated my triumphs and comforted me during my failures. Your belief in me has given me the courage to pursue my dreams, even when I doubted myself.  Your wisdom has guided me through challenging times, and your laughter has brightened my darkest days.

Fifty years is a huge milestone, Dad. It's a testament to the wonderful person you are and all that you've accomplished.  You've built a life filled with love, laughter, and meaningful connections, and you continue to inspire those around you.

As you embark on this new chapter, I wish you nothing but the best. May the years ahead be filled with joy, health, and all the things that bring you happiness. May you continue to pursue your passions, explore new horizons, and create even more cherished memories.

Thank you, Dad, for everything. Thank you for your love, your guidance, and your unwavering support. You are not just my father, but also my mentor, my friend, and my hero. I am so incredibly lucky and proud to call you my dad. love you sir

Happy 50th Birthday!

With all my love,
\n\nThank you for always being there, for your wisdom, your kindness, and your endless support.\n\nWith all my love,\nTise`;

const Page2 = () => (
  <Container size="sm" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <ScrollArea style={{ maxHeight: 400, width: '100%' }}>
      <Text
        size="lg"
        style={{
          fontFamily: '"Playfair Display", "Merriweather", serif',
          color: '#e65100', // Brighter orange color
          whiteSpace: 'pre-line',
          lineHeight: 1.8,
        }}
      >
        {letter}
      </Text>
    </ScrollArea>
  </Container>
);

export default Page2; 