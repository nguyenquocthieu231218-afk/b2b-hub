import React from 'react';
import ComparisonLayout from '../../components/ComparisonLayout';

export default function PipedriveVsHubSpot() {
  return (
    <ComparisonLayout
      title="Pipedrive vs HubSpot: Which Sales CRM Wins in 2026?"
      lead="Choosing between Pipedrive and HubSpot comes down to sales pipeline focus versus all-in-one ecosystem management. While Pipedrive centers purely on deal flow for active sales reps, HubSpot connects sales, inbound marketing, and customer service."
      toolAName="Pipedrive"
      toolBName="HubSpot"
      toolALink="https://pipedrive.com"
      toolBLink="https://hubspot.com"
      verdictText="Choose Pipedrive if you want an easy, deal-focused CRM designed specifically to help sales reps close leads faster. Choose HubSpot if you need an integrated ecosystem connecting marketing campaigns, email automation, and sales reporting."
      tableData={[
        {
          metric: "Best For",
          toolA: "Active sales teams & pipeline management",
          toolB: "Inbound marketing & complete CRM suites"
        },
        {
          metric: "Ease of Use",
          toolA: "Ultra-intuitive visual pipeline UI",
          toolB: "User-friendly with broader feature suite"
        },
        {
          metric: "Starting Price",
          toolA: "~$14 / user / month",
          toolB: "Free basic tier available (Paid from ~$15/mo)"
        },
        {
          metric: "Marketing Tools",
          toolA: "Basic add-on lead boosters",
          toolB: "Industry-leading inbound marketing automation"
        }
      ]}
      coreDifferenceTextA="is built by salespeople for salespeople. Its primary focus is visual deal tracking, activity-based selling, and minimizing administrative tasks for account executives."
      coreDifferenceTextB="serves as a unified growth platform. It bridges the gap between marketing lead generation and sales pipeline tracking within a single source of truth."
      recommendationA="You need a simple, visual pipeline CRM focused exclusively on rep activity and closing outbound sales."
      recommendationB="You rely heavily on content marketing, lead scoring, and automated email nurturing to feed your sales pipeline."
    />
  );
}
