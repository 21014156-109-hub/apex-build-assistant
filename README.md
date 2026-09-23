# Apex Build Assistant

Build a Premium AI Construction Operations Assistant Demo

1. Project Goal

Build a polished, client-facing prototype for a product called:

AI Construction Operations Assistant

The purpose of this demo is to show a commercial construction company how AI could help with two major workflows:

AI Commercial Construction Estimator

AI WhatsApp Field Reporting Agent

This is a demo/prototype, not a production system.

The demo must feel like a real, professional SaaS product that could eventually become production-ready.

The client should be able to understand the complete workflow without needing a technical explanation.

2. VERY IMPORTANT — DEMO STRATEGY

Do NOT build a generic chatbot.

Do NOT make the UI look like an AI experiment.

Do NOT put all functionality into one chat window.

Build a complete construction-management experience with a premium dashboard, realistic dummy data, clear workflows, evidence, calculations, reports, and a simulated WhatsApp interaction.

The demo should communicate:

"AI can understand our previous construction projects, help prepare estimates, explain where the numbers came from, and allow field workers to create reports through WhatsApp."

Accuracy and trust are the most important product themes.

The AI must never appear to blindly invent numbers.

3. Main Demo Story

Create one realistic fictional construction company:

Apex Commercial Construction

Create one main demo project:

Riverside Office Complex

Project type:

Commercial Office Building

Project value:

Approximately $2.4M

Project size:

Approximately 52,000 sq ft

Use realistic construction data throughout the application.

Create several historical projects that the AI can reference:

Downtown Business Center

Westside Medical Office

Northpoint Corporate Plaza

Lakeside Retail Center

Midtown Office Renovation

These projects should contain realistic:

project information

construction documents

quantities

material costs

labor costs

previous estimates

final approved estimates

project notes

assumptions

The historical projects are important because the demo must visually demonstrate that the AI can use previous company documents as knowledge.

4. Application Structure

Create the following main navigation:

Dashboard

Projects

AI Estimator

Documents

Historical Projects

Takeoff

Cost Analysis

Field Reports

WhatsApp Agent

Reports

Settings

Use a professional sidebar navigation.

The UI should feel like a premium B2B construction SaaS platform.

5. Dashboard

Create a strong executive dashboard.

Show:

Active Projects

5

Estimated Project Value

$8.7M

AI Estimates

12

Field Reports

48

Pending Reviews

7

AI Accuracy / Verification

Use a carefully worded metric such as:

92% of estimate line items verified

Do not present fake scientific accuracy as fact.

Use language such as:

Verified

Needs Review

Missing Information

instead of pretending the AI is always correct.

6. Dashboard Activity

Show a recent activity timeline:

Example:

AI completed analysis of Riverside Office Complex

New field report received from Mike Johnson

4 estimate items require review

Historical project comparison completed

Final estimate report generated

Make these interactive.

7. Project Details Page

Create a detailed project page for:

Riverside Office Complex

Header:

Project name

Project type

Location

Client

Project value

Status

Completion percentage

Tabs:

Overview

Documents

AI Estimate

Takeoff

Cost Breakdown

Field Reports

Activity

8. DOCUMENTS PAGE

Create a realistic document library.

Example documents:

Architectural

A-101 Floor Plan

A-102 Second Floor Plan

A-201 Elevations

A-301 Building Sections

Structural

S-101 Foundation Plan

S-201 Structural Layout

Mechanical

M-101 HVAC Plan

Electrical

E-101 Lighting Plan

Previous Estimates

Riverside Preliminary Estimate.xlsx

Riverside Approved Estimate.xlsx

Each document should show:

File type

Size

Upload date

Processing status

AI analysis status

Example:

🟢 AI analyzed

9. AI DOCUMENT ANALYSIS

When the user clicks:

Analyze Documents

show an attractive AI processing experience.

Example stages:

Reading documents

Extracting project information

Detecting construction scope

Identifying quantities

Searching historical projects

Comparing cost information

Validating calculations

Preparing estimate

Do not make this take too long.

Use a realistic simulated progress experience.

Then show:

AI Analysis Complete

Documents analyzed:

14

Pages processed:

238

Historical projects matched:

3

Items requiring review:

4

10. AI ESTIMATOR

This is the core feature.

Create an AI Estimate page.

Display:

Estimated Project Cost

$2,274,850

Then show major trades:

TradeQuantityCostStatusGeneral Conditions—$182,000VerifiedConcrete1,240 CY$298,400VerifiedStructural Steel182 TON$416,000VerifiedDrywall62,400 SF$174,720VerifiedFlooring48,200 SF$212,080Needs ReviewElectrical—$386,500Needs ReviewHVAC—$328,000Needs ReviewPainting91,000 SF$136,500Verified

Use realistic dummy numbers.

11. ESTIMATE TRUST / VERIFICATION

Every important number must be explainable.

When the user clicks an estimate line item, open a side panel.

Example:

Drywall

Quantity:

62,400 SF

Source

A-102 — Second Floor Plan

Historical Reference

Northpoint Corporate Plaza

Historical Rate

$2.72 / SF

Calculation

62,400 × $2.80 = $174,720

Verification

🟢 Quantity found in project documents

🟢 Similar historical project found

🟢 Calculation verified

This is extremely important.

The demo should repeatedly communicate:

"The AI does not simply guess. It shows the evidence behind the estimate."

12. AI EXPLANATION

Add an:

"Why this number?"

button.

When clicked, show:

The estimated drywall quantity was derived from the second-floor plan and cross-checked against three historical commercial projects with similar floor areas and scope.

Then show the relevant documents.

Do not make unsupported claims.

13. HISTORICAL PROJECT KNOWLEDGE

Create a page called:

Historical Projects

Display project cards.

Example:

Northpoint Corporate Plaza

$2.8M

54,000 sq ft

Commercial Office

Similarity

86%

Then show:

Used by AI for:

Drywall pricing

Flooring rates

Labor assumptions

General conditions

Create 4–5 historical projects.

This demonstrates the "learn from previous documents" concept.

Use wording carefully:

The demo should say:

"AI uses your previous project data as reference."

Do not claim that the model has been permanently trained/fine-tuned unless that is actually implemented.

14. TAKEOFF PAGE

Create a visual construction takeoff experience.

Show a drawing preview.

Overlay highlighted areas and quantity markers.

Example:

Drywall

12,450 SF

Flooring

18,200 SF

Doors

48

Windows

76

Allow the user to click an item and see its source.

Use realistic visual placeholders if actual CAD/PDF processing is not implemented.

The demo must clearly label simulated/demo data where appropriate.

15. COST ANALYSIS

Create a professional cost breakdown.

Sections:

Materials

Labor

Equipment

Subcontractor

Overhead

Contingency

Markup

Show charts and tables.

Allow users to expand each category.

Example:

Material:

$1,124,500

Labor:

$642,300

Equipment:

$178,200

Subcontractors:

$212,000

Overhead:

$72,500

Contingency:

$45,350

Total:

$2,274,850

16. ASSUMPTIONS

Create an:

AI Assumptions

section.

Example:

Assumption 1

Flooring pricing is based on the most recent comparable project.

🟢 Supported by historical data

Assumption 2

Waste factor set to 7%.

🟡 Requires review

Assumption 3

HVAC equipment specification was incomplete.

🔴 Missing information

This is important because the AI should demonstrate that it knows when information is incomplete.

17. REVIEW WORKFLOW

Create:

Review Estimate

The estimator can:

approve

edit

reject

add comment

Example:

AI:

Flooring quantity: 18,200 SF

Estimator changes:

19,100 SF

The system should show:

AI: 18,200 SF

Human: 19,100 SF

Then:

Correction recorded

This visually demonstrates a future learning/feedback loop.

18. FIELD REPORTS

Create a Field Reports page.

Show reports from workers.

Example:

Daily Site Report

Worker:

Mike Johnson

Project:

Riverside Office Complex

Date:

September 23, 2026

Work Completed:

Drywall installation

Second floor

1,200 SF

Materials:

Drywall sheets

Joint compound

Issue:

Material delivery delayed by 2 hours.

Status:

Completed

Photos:

3

19. WHATSAPP AGENT — VERY IMPORTANT

This is one of the main features of the demo.

Create a dedicated:

WhatsApp Agent

page.

The page should look like a real WhatsApp conversation.

Do not make it look like a generic ChatGPT chat.

Show:

Field Worker — Mike Johnson

with a realistic WhatsApp-style conversation.

20. WHATSAPP DEMO CONVERSATION

Use this example:

Worker

We finished drywall on the second floor.

AI

Great. How much drywall was installed?

Worker

Around 1,200 square feet.

AI

Were there any delays or issues today?

Worker

Yes, the material arrived about 2 hours late.

AI

Understood. Did the delay affect today's planned work?

Worker

No, we still completed the planned drywall work.

AI

Thanks. Please send me a photo of the completed work.

Show a photo message.

AI

I have everything I need. Would you like me to submit today's site report?

Worker

Yes.

Then show:

Report Created Successfully

21. WHATSAPP REPORT GENERATED

After the conversation, automatically display the generated report:

Daily Site Report

Project

Riverside Office Complex

Worker

Mike Johnson

Date

September 23, 2026

Work Completed

Drywall installation — second floor

Quantity

1,200 SF

Delay

2 hours

Cause

Material delivery

Impact

No impact on planned completion

Photos

3

Status

Completed

Buttons:

View Report

Edit

Approve

Send

22. SHOW THE CONNECTION BETWEEN WHATSAPP AND DASHBOARD

This is critical.

After submitting the WhatsApp report:

Go to:

Field Reports

and show:

🔵 New report received

Then show the report created from the WhatsApp conversation.

This proves that WhatsApp isn't just a separate chatbot.

It feeds directly into the construction management system.

23. AI AGENT BEHAVIOR

The AI should be designed as an interactive agent.

It should:

ask one question at a time

identify missing information

ask follow-up questions

avoid unnecessary questions

confirm important information

summarize before submission

allow correction

create structured data

generate the final report

Example:

If worker says:

"We worked on electrical."

AI should ask:

Which area of the project did you work on?

Then:

What work was completed?

Then:

Approximately how many fixtures/circuits/etc. were completed?

The exact questions should depend on the type of work.

24. VOICE MESSAGE DEMO

Because field workers may prefer voice, include a UI element:

🎙️ Voice Message

Example:

"Today we installed around 40 light fixtures on the third floor..."

Show:

AI transcription

Then show the extracted structured information.

This can be simulated for the demo if real WhatsApp voice integration is not implemented.

25. PHOTO UNDERSTANDING

Allow the worker to send a photo.

Show:

AI Photo Analysis

Example:

Photo received.

Possible drywall installation detected.

Location: Second Floor

Verification: Requires supervisor review

Do NOT claim that computer vision has verified something unless the prototype actually performs that analysis.

For the demo, clearly mark simulated functionality if necessary.

26. REPORTS

Create a Reports page.

Allow:

Daily reports

Weekly reports

Estimate reports

Cost reports

Show:

Generate PDF

Send

Download

Share

The generated report should look professional.

27. DESIGN REQUIREMENTS

The UI must look like a serious B2B SaaS product.

Style:

clean

modern

premium

professional

minimal

construction/business oriented

Avoid:

excessive gradients

childish illustrations

huge AI robot graphics

unnecessary animations

generic ChatGPT appearance

excessive rounded cards

Use:

strong typography

excellent spacing

subtle borders

professional charts

clear tables

status indicators

responsive layouts

polished empty/loading/error states

28. COLOR SYSTEM

Use a professional construction/enterprise palette.

Primary:

#1F4E79

Secondary:

#2F6B4F

Background:

#F7F8FA

Text:

#17202A

Muted:

#6B7280

Success:

#2E7D32

Warning:

#B7791F

Error:

#C62828

Do not overuse colors.

Status colors should communicate meaning clearly.

29. RESPONSIVE DESIGN

The application must work on:

desktop

laptop

tablet

The primary demo experience is desktop.

The WhatsApp experience should look good on mobile-sized screens.

30. DEMO DATA

Do not leave the application empty.

Populate it with realistic dummy data.

At minimum:

Projects

5

Historical projects

5

Documents

20+

Estimate line items

30+

Field reports

10+

Workers

6

AI activities

20+

WhatsApp messages

30+

The application should look populated immediately after launch.

31. IMPORTANT: DEMO DATA MUST BE CONSISTENT

The same project values must be used throughout the application.

If the estimate page says:

$2,274,850

the dashboard, reports, project page and cost analysis must use the same value.

Do not create random numbers in different components.

Create one centralized demo dataset.

32. TECHNICAL ARCHITECTURE

Use a clean architecture that can later be connected to real APIs.

Suggested stack:

Next.js

TypeScript

Tailwind CSS

shadcn/ui

Recharts

Lucide icons

If backend functionality is required:

Node.js

TypeScript

PostgreSQL

Redis

For the prototype, mock services are acceptable.

Structure the application so mock services can later be replaced by:

real LLM API

document processing

PostgreSQL

vector search

WhatsApp Business API

OpenClaw

33. AI SERVICE ABSTRACTION

Create an abstraction such as:

AIService


with methods conceptually similar to:

analyzeDocument()
findHistoricalProjects()
generateEstimate()
explainEstimate()
identifyAssumptions()
generateFieldReport()
continueFieldConversation()


For the demo, these can use deterministic/mock data.

Do not hardcode AI responses directly inside UI components.

34. WHATSAPP SERVICE ABSTRACTION

Create something like:

WhatsAppService


with:

sendMessage()
receiveMessage()
sendMedia()
receiveMedia()
createReport()


For the demo, simulate the conversation.

Later this can connect to:

WhatsApp Business Platform

OpenClaw

Webhooks

35. ACCURACY-FIRST DESIGN

This is a core product requirement.

Never make the AI look like it knows something when it doesn't.

Use these states:

VERIFIED

Strong document evidence exists.

SUPPORTED

Historical project evidence exists.

NEEDS REVIEW

An assumption was required.

MISSING

The system does not have enough information.

The UI should make this obvious.

36. DO NOT CLAIM FAKE AI ACCURACY

Do NOT display:

"AI is 98.7% accurate"

unless this is based on a real evaluation dataset.

Instead display:

Verification Status

and show how many line items have evidence.

Example:

24 Verified

4 Need Review

2 Missing Information

37. DEMO PRESENTATION FLOW

The entire application should support this client presentation:

Step 1

Open Dashboard.

Show:

"This is the construction company's AI operations dashboard."

Step 2

Open Riverside Office Complex.

Step 3

Show documents.

Step 4

Click:

Run AI Analysis

Step 5

Show AI analyzing the documents.

Step 6

Open AI Estimate.

Step 7

Click:

Why is drywall $174,720?

Show evidence and calculation.

Step 8

Open Historical Projects.

Show similar previous projects.

Step 9

Show an item that requires review.

Explain that AI does not blindly guess.

Step 10

Open WhatsApp Agent.

Show field worker conversation.

Step 11

Complete the conversation.

Step 12

Show:

Report Created

Step 13

Open Field Reports.

Show the WhatsApp report now inside the construction dashboard.

Step 14

Generate final report.

This should create a strong end-to-end story.

38. PRODUCT MESSAGE

The landing/dashboard message should communicate:

Automate construction operations with AI.

Supporting message:

Turn project documents, historical estimates, and field updates into actionable construction intelligence.

For the WhatsApp feature:

Your field team already knows how to use WhatsApp. Now your AI does too.

For estimating:

Estimate with the knowledge of your previous projects.

39. IMPORTANT DEVELOPMENT RULES

Before changing code:

Inspect the existing repository.

Identify the framework.

Identify existing components.

Identify routing.

Identify styling system.

Identify available assets.

Identify existing mock/data structure.

Understand the current build process.

Do NOT immediately start rewriting the application.

Do NOT introduce a new framework if one already exists.

Do NOT replace existing UI architecture without a reason.

Do NOT create unnecessary folders.

Do NOT perform a large refactor.

Preserve existing design and functionality unless the project specifically requires changes.

40. DEVELOPMENT APPROACH

Work in small milestones:

Milestone 1

Application shell + navigation + design system.

Milestone 2

Dashboard + project pages.

Milestone 3

Documents + AI analysis experience.

Milestone 4

Estimator + evidence + cost breakdown.

Milestone 5

Historical project knowledge.

Milestone 6

WhatsApp Agent.

Milestone 7

Field reports + dashboard integration.

Milestone 8

Final polish + demo flow.

After each milestone:

run the application

check for errors

verify responsive behavior

verify data consistency

verify navigation

verify the demo flow

41. FINAL QUALITY BAR

Before considering the demo complete, ask:

Can a client understand the product without explanation?

Does the estimator look realistic?

Does the AI explain its numbers?

Does historical project knowledge appear useful?

Does the system show uncertainty instead of pretending?

Does WhatsApp feel like a real field-worker workflow?

Does the WhatsApp report appear in the main dashboard?

Does the entire application tell one coherent story?

Does every screen look production-quality?

Is the demo impressive enough that the client can imagine using it in their company?

If any answer is no, improve it before considering the prototype complete.

42. MOST IMPORTANT PRIORITY

The priority order is:

Professional UI

Clear end-to-end demo

Estimator + evidence

Historical project knowledge

WhatsApp field-worker workflow

Field report generation

Accuracy/verification UX

Polish and animations

Do not spend the majority of the prototype effort on backend infrastructure.

The goal of this phase is to create a convincing, interactive proof-of-concept that demonstrates the complete product vision.

The prototype should make the client think:

"I can see how this could fit into our actual construction workflow."

But it must not falsely claim that the AI has already solved production-level estimating accuracy.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1071526f-1157-4d2b-9849-858fcfd51815).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
