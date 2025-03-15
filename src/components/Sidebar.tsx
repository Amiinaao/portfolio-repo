import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
          <Typography>Skrill Integration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Link to="/skrill">Skrill Details</Link>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content">
          <Typography>API Demonstrations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Link to="/api">API Details</Link>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content">
          <Typography>State Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Link to="/state-management">State Management Examples</Link>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Sidebar;
