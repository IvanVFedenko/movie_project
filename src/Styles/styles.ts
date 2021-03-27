import { Paper, Card, Button, styled } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const FlexContainer = styled('div')({
  display: 'flex',
  marginTop: '80px',
  justifyContent: 'center',
  '@media (max-width: 1215px)': {
    flexDirection: 'column',
  },
});

export const PaperWrapper = styled(Paper)({
  margin: 'auto',
  maxWidth: '1200px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '50px',
  position: 'relative',
  top: '110px',
  marginBottom: '16px',
  '@media (max-width: 400px)': {
    top: '300px',
  },
});

export const HeaderPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: 'calc(100% + 10px)',
  height: '100px',
  position: 'fixed',
  right: '0px',
  borderRadius: 0,
  top: 0,
  zIndex: 2,
  backgroundColor: '#e5ded4',
  '@media (max-width: 400px)': {
    height: '200px',
    flexDirection: 'column',
    margin: 'auto',
    alignItems: 'center',
  },
});

export const FooterPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  boxShadow: '0px -1px 6px -1px rgba(0,0,0,0.73)',
  width: 'calc(100% + 10px)',
  height: '60px',
  position: 'fixed',
  right: '0px',
  borderRadius: 0,
  bottom: 0,
  zIndex: 1,
  backgroundColor: '#e5ded4',
  '@media (max-width: 400px)': {
    height: '100px',
    flexDirection: 'column',
  },
});

export const MovieCard = styled(Card)({
  width: '228px',
  maxHeight: '320px',
  margin: '8px',
  background: '#fff',
  padding: '16px 16px 50px',
  alignItems: 'center',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: 5,
});

export const StyledLink = styled(Link)({
  textDecoration: 'none',
});

export const StyledCardMedia = styled('img')({
  width: '228px',
  height: '320px',
  borderRadius: '3px',
});

export const StyledTitle = styled('div')({
  width: '228px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  padding: '12px 0 0',
  textOverflow: 'ellipsis',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 600,
});

export const StyledTitleOne = styled('div')({
  padding: '4px 0 0',

  textTransform: 'uppercase',
  textAlign: 'center',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 26,
  fontWeight: 600,
});
export const StyledTitleTwo = styled('div')({
  padding: '4px 0 0',
  marginBottom: '20px',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 16,
  fontWeight: 600,
});

export const StyledHeaderLinks = styled('a')({
  display: 'block',
  textDecoration: 'none',
  margin: '8px',
  color: 'black',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 600,
  fontSize: '25px',
  width: '100px',
  textAlign: 'center',
  '&:hover': {
    color: '#139ad6',
  },
  '@media (max-width: 400px)': {
    fontSize: '15px',
    margin: '4px',
  },
});

export const StyledButton = styled(Button)({
  position: 'fixed',
  bottom: '75px',
  right: '10px',
  backgroundColor: '#e5ded4',
  color: 'black',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#139ad6',
    opacity: 0.8,
  },
  '@media (max-width: 400px)': {
    bottom: '110px',
  },
});

export const StyledButtonBack = styled(Button)({
  width: '200px',
  position: 'fixed',
  bottom: '400px',
  right: '24%',
  backgroundColor: '#e5ded4',
  color: 'black',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#139ad6',
    opacity: 0.8,
  },
  '@media (max-width: 1215px)': {
    position: 'static',
    margin: '16px 100px',
  },
  '@media (max-width: 400px)': {
    margin: '16px 80px',
  },
});

export const StyledForm = styled('div')({
  margin: 'auto',
  display: 'flex',
  position: 'fixed',
  top: 100,
  zIndex: 1,
  backgroundColor: 'white',
  width: '100%',
  height: '70px',
  justifyContent: 'center',
  '@media (max-width: 400px)': {
    flexDirection: 'column',
    top: 180,
    height: '150px',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  },
});

export const StyledCardMediaOne = styled('img')({
  width: '400px',
  height: '600px',
  borderRadius: '10px',
  marginTop: '20px',
  marginLeft: '20px',
  '@media (max-width: 500px)': {
    width: '330px',
    height: '500',
    borderRadius: '3px',
    marginTop: '6px',
    marginLeft: '6px',
  },
});

export const MovieCardOne = styled(Card)({
  width: '440px',
  maxHeight: '640px',
  marginTop: '40px',
  marginRight: '60px',
  background: '#fff',
  padding: '8px 8px 28px',
  alignItems: 'center',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: 5,
  '@media (max-width: 1215px)': {
    margin: '40px auto 10px',
  },

  '@media (max-width: 500px)': {
    width: '345px',
    height: '500',
    padding: '4px 4px 4px',
    marginTop: '126px',
  },
});

export const InfoContainer = styled('div')({
  width: '600px',
  marginTop: '60px',
  marginLeft: '40px',
  marginRight: '40px',
  justifyContent: 'center',
  '@media (max-width: 1215px)': {
    width: '400px',
    marginBottom: '116px',
    margin: 'auto',
  },
  '@media (max-width: 400px)': {
    width: '350px',
    height: '500',
    marginBottom: '116px',
    marginLeft: '2px',
    marginRight: '4px',
    marginTop: '5px',
  },
});
