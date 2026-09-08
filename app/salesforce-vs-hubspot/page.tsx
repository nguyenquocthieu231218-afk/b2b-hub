import React from 'react';
import ComparisonLayout from '../components/ComparisonLayout';

export default function SalesforceVsHubSpot() {
  return (
    <ComparisonLayout
      title="Salesforce vs HubSpot: Which CRM Platform Wins in 2026?"
      lead="Choosing between Salesforce and HubSpot is the ultimate CRM debate. While Salesforce offers unmatched enterprise customization and complex data architecture, HubSpot prioritizes ease of use, fast adoption, and seamless inbound marketing integration."
      toolAName="Salesforce"
      toolBName="HubSpot"
      toolALink="https://salesforce.com"
      toolBLink="https://hubspot.com"
      verdictText="Choose Salesforce if you are a large enterprise requiring deep custom logic, complex sales pipelines, and dedicated admin management. Choose HubSpot if you want an intuitive, all-in-one CRM that aligns sales, marketing, and customer support with minimal setup time."
      tableData={[
        {
          metric: "Best For",
          toolA: "Enterprise organizations & complex deal pipelines",
          toolB: "Scaling SMBs & inbound marketing alignment"
        },
        {
          metric: "Implementation",
          toolA: "High complexity (Often requires dedicated admin/agency)",
          toolB: "Low to moderate (Self-serve & intuitive UI)"
        },
        {
          metric: "Starting Price",
          toolA: "~$25 / user / month",
          toolB: "Free CRM tier available (Paid tiers ~$15-$20/mo)"
        },
        {
          metric: "Customization",
          toolA: "Near-infinite Apex code & custom object flexibility",
          toolB: "Out-of-the-box fields, custom properties & pipelines"
        }
      ]}
      coreDifferenceTextA="is built for enterprise-scale operations. It provides deep data reporting, complex permission structures, and custom workflow logic, but requires ongoing administrative overhead."
      coreDifferenceTextB="emphasizes user experience and adoption. It seamlessly unifies sales pipelines, content marketing, and customer service automation into a single user-friendly dashboard."
      recommendationA="You have a large sales team, complex multi-tier reporting needs, and resources for specialized CRM administration."
      recommendationB="You want a modern CRM that your sales team will actually enjoy using, with strong built-in marketing automation and lower total cost of ownership."
    />
  );
}
