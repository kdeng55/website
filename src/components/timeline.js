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
                padding:0,
                margin: 10,
              }
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
            <TimelineContent
                sx={{
                  marginRight: 50,
              }}
            >
               <b>Undergraduate Research Assistant @ Boston University</b>
               <Typography variant="body2" color="gray" >June 2023-August 2023</Typography>
               <Typography variant="subtitle1">I worked as an undergraduate research assistant 
                in the AI Research Initiative Lab at BU. During my time there,
                I implemented and tested various innovative Large Language Models
                and Vision Language Models ocused on anticipating and effectively {'\n'}
                responding to societal reactions to improve human-AI collaborative capabilities.
                Further, I also performed comprehensive user studies to 
                assess the exceptional performance of LLM models in comparison to 
                human capabilities.
                </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector
                sx={{
                  height:150,
              }}
              />
            </TimelineSeparator>
            <TimelineContent
            sx={{
              marginRight: 50,
          }}
            ><b>AI4ALL Coordinator</b>
            <Typography variant="body2" color="gray" >July 2023-August 2023</Typography>
            <Typography variant="subtitle1">Along with three other students, I taught a group of 30
              high school girls a three week long program consisting of AI
              and Machine Learning Content. Presented speakers from 
              BU AIR Lab and field trips to Affectiva and Meta. 
              Develop and implement curriculum, workshops, and mentorship
              programs to provide students with comprehensive AI education and hands-on experiences.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent
            sx={{
              marginRight: 50,
            }}>
              <b>Intern @ Virtudent</b>
              <Typography variant="body2" color="gray" >July 2020-August 2020</Typography>
              <Typography variant="subtitle1">At my first internship, I worked at a startup telehealth company called Virtudent.
            There, I conducted critical analysis, formulated effective solutions, and made sound decisions for customer engagement.
            Collaborating with diverse team members, I fostered productive teamwork and enhanced customer satisfaction. I gained knowledge 
            in startup management and finance, understanding strategies for optimizing business success.</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      );
    }