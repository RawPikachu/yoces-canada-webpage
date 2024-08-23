import { useState } from 'react';
import { Container, Box, Heading, Text, Button, Grid, Image, useColorMode} from 'theme-ui'
import { Label, Input } from 'theme-ui';
import Modal from 'react-modal';

export default function Hackathon() {
  const [colorMode] = useColorMode();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const innovateSrc = colorMode === 'dark'
      ? 'assets/dark-innovate-logo.png'
      : 'assets/light-innovate-logo.png';

  const handleNotifyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container sx={{ textAlign: 'center', py: 6 }}>
      <Grid columns={[1, '1fr 2fr']} gap={4} sx={{ alignItems: 'center' }}>
        <Image
          src={innovateSrc}
          alt="Yoces Logo"
          sx={{ textAlign: 'left' }}
        />
        <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'left' }}>
          <Heading as="h1" sx={{ fontSize: 5, mb: 3 }}>
            Coming Soon!
          </Heading>
          <Text sx={{ fontSize: 3, mb: 4 }}>
            We are working hard to bring you something amazing. Stay tuned!
          </Text>
          <Box>
            <Button variant='ctaLg' sx={{ py: 3, mt: 4 }} onClick={handleNotifyClick}>
              Notify Me
            </Button>
          </Box>
        </Box>
      </Grid>

      <Modal 
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: 0,
            border: 'none',
            borderRadius: '20px',
            background: 'white',
          }
        }}
      >
        <Box as='form' sx={{ p: 4, bg: 'sheet', borderRadius: 20, textAlign: 'center' }}>
          <Label as='h1' htmlFor='email' sx={{ textAlign: 'center' }}>Email Address</Label>
          <Input id='email' type='email' sx={{ mt: 2, borderRadius: 15 }} />
          <Button variant='cta' sx={{ py: 2, mt: 3 }}>
            Notify Me
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}