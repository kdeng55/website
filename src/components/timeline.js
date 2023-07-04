import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function timeline() {
    return (
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
                margin: 10,
              },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector 
                sx={{
                    height:200,
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
                Undergraduate Research Assistant
                <Typography>Because you need strength</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>AI4ALL Coordinator</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Intern @ Virtudent</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
    }