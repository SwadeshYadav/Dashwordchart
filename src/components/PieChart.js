import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

function CustomGauge() {
  return (
    <GaugeContainer
      width={200}
      height={200}
      startAngle={-120}
      endAngle={110}
      value={52}
    >
      <GaugeReferenceArc />
      <GradientGaugeValueArc />
      <GaugePointer />
    </GaugeContainer>
  );
}

function GradientGaugeValueArc() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  const gradientColors = ['#007bff', '#00ffcc', '#ff00ff'];

  return (
    <g>
      <defs>
        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          {gradientColors.map((color, index) => (
            <stop
              key={index}
              offset={`${(index / (gradientColors.length - 1)) * 100}%`}
              style={{ stopColor: color, stopOpacity: 1 }}
            />
          ))}
        </linearGradient>
      </defs>
      <GaugeValueArc fill="url(#gaugeGradient)" />
      <circle cx={cx} cy={cy} r={8} fill="gray" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="gray"
        strokeWidth={6}
      />
    </g>
  );
}

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={8} fill="gray" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="gray"
        strokeWidth={6}
      />
    </g>
  );
}

const TopVulnerabilities = () => {
  return (
    <Container>
      <Box mt={0} p={1} sx={{ borderRadius: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={{ flex: '1 1 70%' }}>
          <CustomGauge />
        </Box>
       
      </Box>

      {/* Line Chart */} 
      <Box sx={{ flex: '1 1 30%', marginLeft: 'auto' }}>
          <BarChart
            xAxis={[{ scaleType: 'band', data: ['group'] }]}
            series={[{ data: [10] }, { data: [70] }, { data: [100] },{ data: [40] }]}
            width={300}
            height={300}
            yAxis={[
              {
                type: 'linear',
                tickInterval: 100,
                tickFormat: (value) => `${value}`,
              },
            ]}
          />
        </Box>
       
    </Container>
  );
};

export default TopVulnerabilities;
