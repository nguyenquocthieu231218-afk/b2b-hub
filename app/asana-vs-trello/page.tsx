import React from 'react';
import ComparisonLayout from '../../components/ComparisonLayout';

export default function AsanaVsTrello() {
  return (
    <ComparisonLayout
      title="Asana vs Trello: Which Task Management Tool Wins in 2026?"
      lead="When it comes to lightweight task tracking, Asana and Trello are household names. While Trello perfected the Kanban board, Asana provides deeper workflow structures for scaling teams."
      toolAName="Asana"
      toolBName="Trello"
      toolALink="https://asana.com"
      toolBLink="https://trello.com"
      verdictText="Choose Asana if you manage multi-step team projects that need timeline views and task dependencies. Choose Trello if you want a simple, visual Kanban board for fast personal or small team task tracking."
      tableData={[
        {
          metric: "Best For",
          toolA: "Complex team projects & multi-view workflows",
          toolB: "Visual Kanban boards & lightweight task lists"
        },
        {
          metric: "Learning Curve",
          toolA: "Low to Moderate",
          toolB: "Instant (Near zero)"
        },
        {
          metric: "Starting Price",
          toolA: "~$10.99 / user / month",
          toolB: "~$5.00 / user / month"
        },
        {
          metric: "Dependency Tracking",
          toolA: "Native & robust",
          toolB: "Basic (Requires Power-Ups)"
        }
      ]}
      coreDifferenceTextA="lets you switch between List, Board, Timeline (Gantt), and Calendar views effortlessly, making it superior for cross-departmental coordination."
      coreDifferenceTextB="relies almost entirely on the card-and-board system. It is ideal for micro-teams, freelancers, or linear pipelines where simplicity is king."
      recommendationA="You manage complex projects with strict deadlines, multiple assignees, and dependent task milestones."
      recommendationB="You want a straightforward, plug-and-play digital whiteboard without unnecessary features getting in your way."
    />
  );
}
