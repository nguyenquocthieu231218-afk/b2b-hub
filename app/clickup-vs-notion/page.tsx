import React from 'react';
import ComparisonLayout from '../components/ComparisonLayout';

export default function ClickUpVsNotion() {
  return (
    <ComparisonLayout
      title="ClickUp vs Notion: Which All-in-One Workspace Wins in 2026?"
      lead="Choosing between ClickUp and Notion comes down to structured project management versus modular knowledge bases. While ClickUp offers built-in task tracking and time logs, Notion excels as a flexible, document-first workspace."
      toolAName="ClickUp"
      toolBName="Notion"
      toolALink="https://clickup.com"
      toolBLink="https://notion.so"
      verdictText="Choose ClickUp if your team needs out-of-the-box task tracking, sprint planning, and native time tracking. Choose Notion if you prioritize customizable documentation, internal wikis, and flexible databases."
      tableData={[
        {
          metric: "Best For",
          toolA: "Structured project management & agile teams",
          toolB: "Wikis, documents, and dynamic databases"
        },
        {
          metric: "Task Management",
          toolA: "Native statuses, assignees, priorities & time tracking",
          toolB: "Custom database properties & manual formulas"
        },
        {
          metric: "Starting Price",
          toolA: "~$7 / user / month",
          toolB: "~$8 / user / month"
        },
        {
          metric: "Customization",
          toolA: "Pre-built views (Kanban, Gantt, Mind Maps)",
          toolB: "Infinite drag-and-drop block flexibility"
        }
      ]}
      coreDifferenceTextA="focuses heavily on task execution and team productivity. It includes built-in workloads, goals, and sprint widgets without complex configuration."
      coreDifferenceTextB="acts as a digital canvas. It allows teams to build tailored CRMs, knowledge bases, and team wikis using modular building blocks."
      recommendationA="You need an end-to-end task management suite with time tracking, goal monitoring, and Gantt charts out of the box."
      recommendationB="You want a centralized hub for company documentation, meeting notes, and flexible, formula-driven databases."
    />
  );
}
