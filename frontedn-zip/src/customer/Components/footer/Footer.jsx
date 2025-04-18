import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid  item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
        About EvKarya
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Our Story
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Team
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Careers
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Press
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Contact Us
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
        Our Services
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Wedding Planning
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Corporate Events
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Birthday Parties
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Concert Management
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Catering Services
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
        Popular Venues
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Banquet Halls
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Outdoor Lawns
        </Typography>
        <Typography className='body2'component="p"  gutterBottom>
        Hotels & Resorts
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Conference Rooms
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Beachside Venues
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
        Help & Support
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        FAQs
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Event Guides
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Vendor Support
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        Feedback
        </Typography>
      </Grid>
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
        &copy; 2025 EvKarya. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
        Crafted with care by EvKarya Team.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Icons made by{' '}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" color="inherit" underline="always">
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;


