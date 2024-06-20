import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import PieChart from './PieChart'; // Assuming PieChart component is defined in PieChart.js

const topVulnerabilitiesData = [
  { category: 'Medium', color: 'yellow', description: 'X-content-type-option-header missing', count: 271 },
  { category: 'High', color: 'darkorange', description: 'X-content-type-option-header missing', count: 54 },
  { category: 'High', color: 'darkorange', description: 'X-content-type-option-header missing', count: 38 },
  { category: 'Low', color: 'green', description: 'X-content-type-option-header missing', count: 8 },
  { category: 'Low', color: 'green', description: 'X-content-type-option-header missing', count: 4 }
];

const TopVulnerabilities = () => {
  return (
    <Container>
      <Box mt={0} p={0} sx={{ borderRadius: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {/* Left side with PieChart */}
        <Box sx={{ flex: '1 1 70%'}}>
          <PieChart />
        </Box>
        
        {/* Right side with content */}
        <Box sx={{ flex: '100%' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: '100%', mb: 2 }}>
            <Box sx={{ backgroundColor: 'rgb(59 130 246)', color: 'white', borderRadius: 1, p: 1, width: '50%', textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: '14px',fontWeight:"bold" }}>Top Vulnerabilities</Typography>
            </Box>
            <Box sx={{ backgroundColor: 'rgb(243 244 246)', borderRadius: 1, p: 1, width: '50%', textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: '14px',fontWeight:"bold" }}>Most Common CVE</Typography>
            </Box>
          </Box>  
          <Box mt={0} sx={{ textAlign: 'center' }}>
            
            {topVulnerabilitiesData.map((vuln, index) => (
              <Box key={index} display="flex" justifyContent="space-between" alignItems="center" p={1} sx={{ borderBottom: '1px solid lightgrey' }}>
                <Box sx={{ flex: 1, p: 1 }}>
                  <Typography variant="body2" sx={{ display: 'inline-block', backgroundColor: vuln.color, borderRadius: 1, width: '100%', textAlign: 'center', py: 1 }}>
                    {vuln.category}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ flex: 2, p: 1 }}>{vuln.description}</Typography>
                <Typography variant="body2" sx={{ flex: 1, p: 1, textAlign: 'center' }}>{vuln.count}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TopVulnerabilities;
