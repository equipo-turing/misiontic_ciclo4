import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const AccordionStyled = styled((props) => <Accordion {...props} />)(({ theme }) => ({
  backgroundColor: '#1E1D3E',
}));
const AccordionSummaryStyled = styled((props) => <AccordionSummary {...props} />)(({ theme }) => ({
  backgroundColor: '#2874A6',
}));
const AccordionDetailsStyled = styled((props) => <AccordionDetails {...props} />)(({ theme }) => ({
  backgroundColor: '#D4E6F1',
}));

export { AccordionStyled, AccordionSummaryStyled, AccordionDetailsStyled };
