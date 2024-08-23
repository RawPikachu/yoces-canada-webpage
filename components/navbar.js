import { Container, Box, Grid, NavLink, Image, useColorMode, IconButton } from 'theme-ui'

const Navbar = (props) => {
  const [mode, setMode] = useColorMode();
  const logoSrc = mode === 'dark'
      ? 'assets/dark-logo.png'
      : 'assets/light-logo.png';
  
  return (
    <Box as="header" sx={{ bg: 'elevated', color: 'text' }}>
      <Container variant='wide' sx={{ pt: 3, pb: 1, textAlign: 'center' }}>
        <Grid
          gap={4}
          columns="auto 1fr auto auto auto"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 2,
            mt: 3,
            mb: 4,
            a: { color: 'muted', transition: 'color .125s ease-in-out' }
          }}
        >
          <Image
            src={logoSrc}
            alt="Yoces Logo"
            sx={{ height: 48, textAlign: 'left' }}
          />
          <Box />
          <NavLink href="https://hackathon.yoces.ca">
            Hackathon
          </NavLink>
          <NavLink href="mailto:youthoces@gmail.com">
            Contact
          </NavLink>
          <NavLink href="https://hcb.hackclub.com/donations/start/yoces">
            Donate
          </NavLink>
        </Grid>
      </Container>
      <IconButton
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
        sx={{
          position: 'absolute',
          top: [2, 3],
          right: [2, 3],
          color: 'primary',
          cursor: 'pointer',
          borderRadius: 'circle',
          transition: 'box-shadow .125s ease-in-out',
          ':hover,:focus': {
            boxShadow: '0 0 0 3px',
            outline: 'none'
          }
        }}
        {...props}
      >
        <svg viewBox="0 0 32 32" width={24} height={24} fill="currentcolor">
          <circle
            cx={16}
            cy={16}
            r={14}
            fill="none"
            stroke="currentcolor"
            strokeWidth={4}
          />
          <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
        </svg>
      </IconButton>
    </Box>
  );
}

export default Navbar