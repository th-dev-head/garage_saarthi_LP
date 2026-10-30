# GarageSaarthi AI Strategy & SEO Implementation Specification

**Version:** 1.0\
**Prepared:** 26 October 2026\
**Audience:** Product, engineering, SEO, content, design, QA\
**Status:** Strategy finalized; implementation requires product/data
validation before public claims

------------------------------------------------------------------------

## 1. Executive decision

GarageSaarthi will develop an AI-assisted workshop-management experience
around a flagship **Garage AI Copilot**. The long-term product vision is
a conversational assistant that can answer questions about an authorized
workshop's records, explain business performance, draft operational
content, recommend next steps, and execute selected workflows only
within explicit permission and approval boundaries.

This is both a product initiative and an SEO/content initiative. It is
**not** a plan to insert the word "AI" across every page or to publish
large numbers of thin AI landing pages.

### Decisions confirmed

  -----------------------------------------------------------------------
  Decision                            Final selection
  ----------------------------------- -----------------------------------
  Flagship assistant                  Full workshop copilot: answer
                                      questions, draft content, recommend
                                      actions, and eventually perform
                                      approved actions

  AI job-card documentation           Include

  AI customer communication           Include

  AI business insights                Include

  Workflow automation                 Include in the roadmap now, with
                                      safe staged implementation

  Availability messaging              Truthful; do not claim unavailable
                                      functionality is live; do not use
                                      "Coming Soon" as a substitute

  SEO scope                           Complete implementation: AI landing
                                      page, homepage, features,
                                      solutions, content plan, technical
                                      SEO and launch checks
  -----------------------------------------------------------------------

### Non-negotiable positioning rule

At the time of this specification, GarageSaarthi does not have the
proposed AI capabilities live in the product. Therefore:

-   Do not state or imply that these AI features are currently available
    until each has passed its release gate.
-   Do not display a fake chatbot, fabricated AI-generated answers, fake
    customer results, or non-functional "Try AI" controls.
-   Do not use "Coming Soon" as a blanket workaround.
-   Prepare the product architecture, page structure, content drafts and
    internal linking ahead of launch, but publish public-facing feature
    claims only when substantiated.
-   The AI landing page may be published before launch only if it is
    genuinely useful and accurately framed around the product's current
    capabilities and development status. If that cannot be done without
    implying availability, keep it in staging until the first feature is
    usable.
-   Never label a mockup as a live product screenshot. Clearly identify
    a concept illustration or interactive demo if one is used.

The goal is ambitious positioning without misleading prospective
customers or creating avoidable trust and SEO risks.

------------------------------------------------------------------------

## 2. Product vision and scope

### 2.1 Product promise

**Working positioning:** "Ask your workshop. Understand your business.
Take the next step."

The Garage AI Copilot should make workshop data and routine work easier
to understand and act on through natural language. It should use
GarageSaarthi's own structured records and permitted workflows rather
than behave like a generic chatbot that guesses about a workshop.

### 2.2 Capability groups

1.  **Ask:** answer natural-language questions using authorized workshop
    data.
2.  **Understand:** explain operational and financial metrics with
    traceable calculations and filters.
3.  **Draft:** turn technician notes into job-card wording and draft
    customer communications.
4.  **Recommend:** identify possible follow-ups, exceptions, stock risks
    and operational patterns from available data.
5.  **Act safely:** initiate approved actions through explicit
    permissions, confirmation, validation and audit logging.

These are capability groups, not a claim that all functions are ready on
day one.

### 2.3 Recommended release sequence

  -----------------------------------------------------------------------
  Release                 Scope                   Why this order
  ----------------------- ----------------------- -----------------------
  R0 --- Foundations      Data inventory,         Avoid building a fluent
                          permission model, query but unreliable chatbot
                          catalogue, audit        
                          events, evaluation set, 
                          UI prototype            

  R1 --- Read-only        Natural-language        Establish trust and
  Copilot                 questions over approved validate demand
                          workshop data;          
                          source/filters shown;   
                          uncertainty handling    

  R2 --- Drafting         Job-card text, service  High-value assistance
  assistants              summaries and           with low-risk,
                          customer-message drafts human-reviewed output

  R3 --- Business         Trend explanations,     Build on validated
  insights                comparisons, anomaly    metrics and data
                          flags and               quality
                          evidence-based          
                          suggestions             

  R4 --- Confirmed        Approved reminders,     Add execution only
  workflow actions        task creation and       after action
                          selected follow-up      permissions and logs
                          workflows               work

  R5 --- Controlled       User-configured rules,  Automation is a product
  automation              scoped triggers,        capability, not an
                          pause/undo where        unrestricted agent
                          possible, monitoring    
                          and exception handling  
  -----------------------------------------------------------------------

"Workflow automation now" means include automation in product planning
and architecture now. It does **not** mean enabling unrestricted
autonomous changes immediately. Start with low-risk actions that can be
previewed and confirmed.

------------------------------------------------------------------------

## 3. Product feasibility and decisions to resolve before implementation

### 3.1 Essential product decisions

These questions are engineering/product gates, not blockers to preparing
the SEO architecture.

1.  **Source of truth:** Which database tables/services are
    authoritative for job cards, invoices, payments, inventory,
    customer/vehicle history, staff, branches and expenses?
2.  **Tenant and branch model:** How is the current user's garage,
    tenant and permitted branch scope determined server-side?
3.  **Role permissions:** Which roles may see finance, payroll, customer
    PII, staff performance and multi-branch data?
4.  **Metric definitions:** Define revenue, collected amount,
    outstanding balance, gross margin, net profit, job completion time
    and repeat-customer metrics. Do not allow the model to invent
    formulas.
5.  **AI provider and data handling:** Select an approved model/provider
    after reviewing retention, training use, region, contractual terms,
    security, latency and cost. Do not send unnecessary personal data.
6.  **Action catalogue:** List each action the assistant may initiate,
    required permission, confirmation step, idempotency key, audit event
    and rollback/compensation strategy.
7.  **Data freshness:** Decide whether each response uses live queries,
    cached metrics or a reporting snapshot and display the relevant "as
    of" timestamp where material.
8.  **Language support:** Decide launch languages. Start with the
    language(s) the product can test and support reliably; do not
    promise multilingual accuracy without evaluation.
9.  **Availability by plan:** Confirm whether AI will be available in
    all plans, as an add-on, or subject to usage limits. Do not add AI
    to the pricing comparison until decided.
10. **Retention and deletion:** Define prompt/response logging,
    retention, redaction, access, export and deletion policies.

### 3.2 Feasibility principle

The first version should use a **controlled tool/query layer** rather
than allow the model to execute arbitrary SQL or directly mutate
application data.

Preferred flow:

1.  Authenticate the user.
2.  Resolve tenant, branch and role permissions from trusted server-side
    context.
3.  Classify the question or requested action.
4.  Select an approved read tool or action from an allowlist.
5.  Validate parameters and apply tenant/branch filters on the server.
6.  Execute the deterministic query/action.
7.  Return structured results to the model for explanation or draft
    generation.
8.  Validate the response, show relevant filters/data timestamps, and
    identify missing data.
9.  For writes, show a preview and require explicit confirmation where
    required.
10. Log the request category, tool/action, authorization result, outcome
    and request ID without logging secrets or unnecessary personal
    information.

Never treat a model-generated tenant ID, branch ID, role, SQL fragment
or permission claim as authoritative.

------------------------------------------------------------------------

## 4. Flagship feature: Garage AI Copilot

### 4.1 Core user stories

-   As a workshop owner, I can ask about current jobs, pending payments,
    stock levels, revenue and customer history in everyday language.
-   As a manager, I can ask for a filtered view of a specific period or
    branch, subject to my permissions.
-   As a service advisor, I can ask for a concise summary of a vehicle's
    service history if I am allowed to access it.
-   As a technician, I can turn notes I provide into a clearer draft
    without the AI inventing diagnoses or completed work.
-   As an authorized user, I can ask the assistant to prepare an action,
    review a preview and confirm it before the system executes it.
-   As a user, I can see when the assistant lacks data, cannot access a
    record or is uncertain.

### 4.2 Initial read-only question catalogue

Support only questions backed by implemented and tested data tools.
Examples:

**Operations** - "Which vehicles are currently waiting for work?" -
"Show job cards that have been open for more than three days." - "How
many jobs were completed last week?" - "Which jobs are overdue against
their promised delivery date?"

**Finance** - "How much payment is outstanding right now?" - "How much
money was collected this month?" - "Compare invoice totals for this
month and last month." - "Show expenses by category for the selected
period."

**Inventory** - "Which parts are below their reorder level?" - "Which
parts have had no movement in the selected period?" - "Show stock value
by category."

**Customers and vehicles** - "Which customers have not returned in six
months?" - "Summarize this vehicle's recorded service history." - "Which
service reminders are due this week?"

**Staff and branches** - Only expose staff productivity, payroll or
branch comparisons to roles explicitly authorized for those datasets. -
Do not infer individual employee quality from incomplete data.

### 4.3 Response contract

For numerical or record-based responses, the UI should display, where
relevant:

-   A concise answer.
-   Period/date range and branch filter.
-   Metric definition or a short calculation explanation.
-   Data timestamp or freshness status.
-   A link to the underlying report or records where the user is
    authorized.
-   A clear note when records are incomplete or unavailable.
-   A correction/report-feedback path.

The model should not invent missing values, customer history, parts,
repairs, dates, diagnoses or financial totals.

### 4.4 UX requirements

-   Persistent assistant entry point within the authenticated
    application.
-   Conversation history only if privacy, retention and user access
    controls are defined.
-   Suggested prompts based on the user's role and available modules.
-   Explicit active branch and date context; do not silently apply
    ambiguous filters.
-   Clarifying question when "this month," "my branch," "pending" or
    similar terms cannot be resolved reliably.
-   Loading, empty, error, permission-denied and rate-limit states.
-   Clear distinction between an answer, a draft, a recommendation and
    an action awaiting approval.
-   Mobile-responsive interface suitable for busy workshop environments.
-   Do not display sensitive customer details in notifications or
    previews unnecessarily.

------------------------------------------------------------------------

## 5. Supporting AI capabilities

### 5.1 AI Job Card & Service Documentation Assistant

**Purpose:** Help staff improve wording and consistency of
documentation.

**Inputs:** Staff-provided notes, selected job-card fields, recorded
inspection findings and explicitly selected service history.

**Outputs:** Edited description, customer-friendly explanation, service
summary or structured draft.

**Rules:** - Never invent a diagnosis, cause, repair performed, part
replaced, cost, warranty, safety status or completion state. - Preserve
uncertainty and attribution: "technician noted..." is not the same as a
verified diagnosis. - Highlight missing details instead of filling them
with plausible guesses. - Keep original input available and let staff
review/edit before saving. - Saving a draft or updating a job card must
use normal application permissions and audit logging. - Do not
automatically turn an AI suggestion into a completed repair or customer
commitment.

**Acceptance tests:** - Missing fault details remain missing. -
Conflicting notes are flagged rather than silently reconciled. - The
generated summary matches source facts. - Unauthorized users cannot read
or edit a job card through the assistant.

### 5.2 AI Customer Communication Assistant

**Purpose:** Draft messages using approved customer, vehicle and job
context.

**Use cases:** Estimate follow-up, repair-status update, service
reminder, post-service check-in and explanation of recorded work.

**Rules:** - Draft first; sending is a separate action. - Verify
recipient, channel, message content, language and consent/communication
rules before sending. - Do not claim that a repair is complete, an
estimate is approved, a payment is received or a part is available
unless the source record confirms it. - Respect WhatsApp/provider
policies and applicable privacy/marketing requirements. - Avoid exposing
internal notes, staff-only information or another customer's data. - For
bulk messaging, require audience preview, count, purpose and explicit
confirmation.

**Acceptance tests:** - Draft contains only verified context. -
Incorrect/missing recipient blocks sending. - Duplicate retries do not
send duplicate messages. - User can edit the draft before sending. -
Send outcome and provider message ID are recorded where available.

### 5.3 AI Business Insights

**Purpose:** Explain verified trends and point users to useful follow-up
questions.

**Candidate insights:** Revenue changes, outstanding payment movement,
repeat visits, stock risks, service workload, turnaround time and
technician workload.

**Rules:** - Metrics come from deterministic calculations and approved
definitions. - Show period, comparison period, branch and relevant
exclusions. - Distinguish correlation from causation. - Recommendations
must be framed as suggestions, not guaranteed outcomes. - Do not claim a
predicted result without a validated forecasting method and
evaluation. - Avoid "increase revenue by X%" or similar performance
promises without reliable, representative evidence.

### 5.4 Workflow Automation

**Purpose:** Convert an approved recommendation into a controlled
workflow.

**Start with low-risk actions:** - Prepare a follow-up task for staff
review. - Draft a reminder for a selected customer. - Create an internal
task from a flagged overdue job. - Prepare a stock-reorder suggestion
without placing a purchase order. - Offer a filtered report or saved
view.

**Require explicit confirmation and stronger controls for:** - Sending
external messages. - Changing job-card status or promised delivery
date. - Creating or modifying invoices/estimates. - Updating stock
quantities. - Issuing refunds, recording payments or making financial
changes. - Bulk operations or actions affecting many customers.

**Automation controls:** - Allowlisted actions only. - Role and branch
authorization on every execution. - Preview of target records and exact
changes. - Confirmation for external or consequential effects. -
Idempotency and duplicate protection. - Audit trail with actor,
timestamp, action, target, approval and result. - Rate limits, retry
policy and failure notifications. - Pause/disable control for
user-configured rules. - Rollback where technically safe; otherwise a
documented compensating action. - Never let the model independently
change its own permissions or bypass approval.

### 5.5 AI capability status registry

Maintain a single internal source of truth for capability availability,
such as:

-   `planned`
-   `internal_test`
-   `beta`
-   `available`
-   `disabled`

Use this registry to control product UI and public website claims where
appropriate. Do not expose a feature as available simply because a
marketing page or frontend component exists. Product, support and
marketing must use the same release status.

------------------------------------------------------------------------

## 6. Website and SEO architecture

### 6.1 Recommended page map

  --------------------------------------------------------------------------
  Page                       Purpose                 Recommendation
  -------------------------- ----------------------- -----------------------
  Homepage `/`               Core garage-management  Add a concise AI
                             positioning             section only when the
                                                     described capability is
                                                     substantiated

  Dedicated AI page          Main AI discovery and   Create one
  `/ai-garage-management/`   conversion page         authoritative page;
                                                     verify URL and keyword
                                                     overlap before release

  Features overview          Overview of available   Add AI capabilities
  `/features/`               modules                 only when live and
                                                     clearly distinguish
                                                     them from existing
                                                     non-AI features

  Reports & Analytics        Existing reporting      Explain the difference
                             workflows               between existing
                                                     dashboards/reports and
                                                     natural-language AI
                                                     analysis once the
                                                     latter is live

  Job Cards                  Existing job-card       Add AI documentation
                             workflow                section when available

  CRM & Customer Management  Existing customer       Add AI drafting/summary
                             records and follow-ups  workflows when
                                                     available

  Inventory Management       Existing inventory      Add grounded
                             workflow                natural-language
                                                     queries and stock
                                                     recommendations when
                                                     available

  Dashboard                  Existing operational    Link to conversational
                             dashboard               insights when
                                                     implemented

  Garage/workshop management Broader solution intent Explain AI as a
  solutions                                          supporting capability
                                                     without replacing the
                                                     core solution intent

  Industry/vehicle-type      Segment-specific needs  Include only relevant,
  pages                                              proven use cases for
                                                     each segment

  Blog/resource centre       Educational discovery   Publish original,
                                                     expert-reviewed guides
                                                     that answer real
                                                     workshop questions
  --------------------------------------------------------------------------

Do not create separate near-identical pages for "AI garage software,"
"AI garage management software," "AI workshop software" and every
vehicle type unless each page serves a distinct intent with unique
substance. Start with one strong canonical AI landing page.

### 6.2 Keyword clusters

These are hypotheses to validate against Search Console, keyword
research and the existing page matrix. They are not claims about search
volume.

**Primary cluster** - AI garage management software - AI garage
software - AI for garage management

**Assistant / conversational query cluster** - AI assistant for auto
repair shops - AI chatbot for garage management - ask questions about
garage business data - conversational reporting for workshops

**Workflow clusters** - AI job card documentation - AI service report
writing for auto workshops - AI customer communication for auto repair
shops - AI workshop business insights - AI inventory insights for
garages

**Educational topics** - How AI can help an auto repair workshop - Ways
to use AI in garage operations - AI versus traditional garage management
software - Safe use of AI for vehicle service documentation - What
workshop data is needed for AI business reporting

Do not target every phrase with a separate landing page. Map
semantically related queries to one useful page or one genuinely
distinct feature page.

### 6.3 Cannibalization and intent rules

-   The AI landing page owns the broad AI garage-management intent.
-   Existing feature pages retain their existing feature intent, such as
    job cards, CRM, inventory or reports.
-   The homepage remains focused on the overall garage-management
    product and conversion.
-   Blog articles answer informational questions and link to the
    relevant product/feature page.
-   Use Search Console page/query data to identify existing URLs already
    receiving impressions for AI-related queries before selecting a
    primary URL.
-   If an existing URL already serves the same intent well, improve it
    instead of creating a competing page.
-   Use a canonical URL consistently and avoid duplicate query-parameter
    variants.

------------------------------------------------------------------------

## 7. Dedicated AI landing page content specification

### 7.1 URL and metadata proposal

**Proposed URL:** `/ai-garage-management/`\
**Suggested title:** `AI Garage Management Software | GarageSaarthi`\
**Suggested meta description:**
`Explore how AI can help automotive workshops understand garage data, prepare service documentation and streamline customer follow-ups with GarageSaarthi.`

These are draft metadata values. Finalize after query mapping and after
deciding which capabilities are genuinely available. If the page is
published before launch, revise copy to avoid implying live
functionality; if accurate framing is not possible, keep it out of the
public index until launch.

### 7.2 Hero section

**Headline direction:**\
"Meet a Smarter Way to Manage Your Workshop"

**Supporting copy direction:**\
"GarageSaarthi is building an AI-assisted workshop experience designed
to help teams understand their operational data, prepare clearer service
documentation and manage routine follow-ups---with workshop permissions
and human review where needed."

This copy describes direction, not a claim that all functions are
available. Replace it with capability-specific present-tense copy only
after those capabilities pass release gates.

**CTA policy:** - If AI is live: "Explore the AI Assistant" or "Book a
Demo." - If only the existing software is available: use the existing
truthful product CTA, such as "Start Free Trial" or "Book a Demo," and
clearly explain what is available today. - Never use "Try AI" if there
is no functional AI experience behind it.

### 7.3 Recommended page sections

1.  **Hero:** clear product category, realistic value proposition and
    truthful CTA.
2.  **What the Garage AI Copilot does:** ask, understand, draft,
    recommend and---where enabled---act with approval.
3.  **Real workshop questions:** examples for job status, outstanding
    payments, stock and customer history. Mark examples as illustrative
    until the relevant feature is live.
4.  **AI-assisted documentation:** explain source-grounded drafting and
    staff review.
5.  **Customer communication:** explain drafts, recipient validation and
    staff approval.
6.  **Business insights:** explain how calculations use defined metrics
    and selected date/branch filters.
7.  **Controlled workflows:** describe only the actions actually
    supported, including confirmation requirements.
8.  **How it works:** authorized data retrieval → deterministic
    tools/calculations → explanation/draft → user review → approved
    action.
9.  **Privacy and control:** tenant separation, permissions, data
    handling and auditability. Publish only verified security claims.
10. **Who it helps:** workshop owner, service advisor, manager and
    authorized staff, with role-specific examples.
11. **Product demonstration:** genuine screenshots or a clearly labelled
    concept; no fabricated interface presented as live.
12. **FAQs:** accurate answers about availability, data access,
    correctness, automation and plans.
13. **CTA:** existing trial/demo path, with no promise of unshipped
    functionality.

### 7.4 Example questions

Use examples only when the product can answer them from real authorized
data:

-   "Which jobs are waiting for parts?"
-   "How much payment is outstanding this week?"
-   "Which parts are below reorder level?"
-   "Summarize the recorded service history for this vehicle."
-   "Draft a repair-status update for this customer."
-   "Create a follow-up task for these overdue estimates."

For an unshipped capability, these may be used in an internal design
prototype or future content draft but must not be presented as a live
interactive demo.

### 7.5 FAQ topics

Answer these only with confirmed product and policy facts:

-   What is AI garage management software?
-   How can AI help an automotive workshop?
-   Can I ask questions about my workshop's data?
-   Which GarageSaarthi modules can the AI assistant access?
-   Can AI prepare job-card descriptions?
-   Can AI draft WhatsApp customer messages?
-   Can the AI send messages or change records automatically?
-   How does GarageSaarthi protect access to workshop data?
-   Can users see data from other branches?
-   Is AI included in every pricing plan?
-   Is the AI assistant available on mobile?

Do not use FAQ markup as a ranking trick. Structured data must match
visible page content and follow the current Google requirements.

------------------------------------------------------------------------

## 8. Existing-page refinement matrix

The goal is to add useful context, not indiscriminately repeat AI
phrases.

### 8.1 Homepage

**Keep:** primary garage-management proposition and current conversion
journey.

**Add when substantiated:** - A compact "Ask your workshop" section with
a real product screenshot. - Two or three verified examples, such as
querying pending jobs or low-stock items. - A link to the AI landing
page. - Clear distinction between existing reporting dashboards and the
AI assistant.

**Avoid:** replacing the main headline with "AI software" if the overall
product is still principally garage-management software; making AI
dominate the page before it is available.

### 8.2 Features overview

-   Maintain existing feature categories and established URLs.
-   Add a clearly labelled AI category only when there are actual usable
    capabilities to list.
-   Link to the AI landing page and to the specific feature pages that
    contain the implemented workflow.
-   Do not rename existing features as AI features unless AI materially
    changes how they work.
-   Do not create a feature card that opens a dead end or a generic
    "Coming Soon" page.

### 8.3 Reports & Analytics

-   Preserve current reporting terms and existing report functionality.
-   Once live, explain conversational queries as an additional way to
    explore supported metrics, not as a replacement for established
    reports.
-   Show supported metrics, definitions, date filters and branch
    filters.
-   Link between Reports & Analytics and the AI landing page only where
    contextually useful.

### 8.4 Job Cards

-   Keep job-card creation, tracking, history and audit concepts
    central.
-   Add AI documentation assistance only after it can generate a
    reviewable draft from recorded facts.
-   Explain that staff remain responsible for verifying the final repair
    documentation.
-   Link to the AI landing page as a related capability.

### 8.5 CRM and Customer Management

-   Keep customer records, vehicle history, service reminders and
    follow-up functionality central.
-   Add AI message drafting and service-history summaries only when
    implemented.
-   Distinguish existing automated reminders from AI-generated message
    content.
-   Never suggest that existing automated WhatsApp messages are
    AI-generated unless that is true.

### 8.6 Inventory

-   Preserve current stock, purchase and low-stock functionality.
-   Add natural-language stock questions and recommendations when
    supported.
-   Distinguish a reorder recommendation from a purchase order that has
    actually been created or submitted.

### 8.7 Dashboard and Garage/Workshop solutions

-   Keep core operational intent and established conversion links.
-   Explain AI as an additional interaction layer over available data.
-   Do not promise predictive maintenance, fault diagnosis, demand
    forecasting or guaranteed business growth without a separate
    validated product capability and supporting evidence.

### 8.8 Industry and location pages

-   Add an AI use case only if it is relevant to the segment and
    supported by the product.
-   Avoid mass-generating AI copy for every city, country or vehicle
    category.
-   Do not imply local availability, regulatory compliance or language
    support that has not been verified.
-   Keep location-specific tax, legal and operational claims separate
    from generic AI messaging.

------------------------------------------------------------------------

## 9. Content plan

Publish content that helps workshop owners make real decisions and
demonstrates first-hand product understanding. Avoid commodity articles
that repeat generic claims about AI.

### Suggested initial topics

  -----------------------------------------------------------------------
  Topic                   Search intent           Recommended destination
  ----------------------- ----------------------- -----------------------
  How AI Can Help an Auto Informational           Educational article →
  Repair Workshop                                 AI landing page

  AI Garage Software vs   Commercial              Comparison guide → AI
  Traditional Garage      investigation           landing page
  Software                                        

  Using AI to Understand  Informational/use case  Guide → Reports &
  Workshop Revenue and                            Analytics + AI page
  Pending Payments                                

  How to Write Clearer    Practical workflow      Guide → Job Cards
  Vehicle Service Reports                         

  Using AI to Draft       Practical workflow      Guide → CRM
  Customer Service                                
  Updates Responsibly                             

  What Workshop Data Is   Educational             Guide → AI page
  Needed for AI Business                          
  Insights?                                       

  How to Use AI Safely in Trust/safety            Guide → AI page
  Workshop Operations                             
  -----------------------------------------------------------------------

Before publication: - Validate the topic against Search Console queries
and keyword tools. - Check for existing pages with the same intent. -
Include original screenshots, product examples or expert input where
possible. - Have a product/engineering reviewer validate every claim. -
Add a useful CTA without forcing every article to target the same
commercial keyword. - Consolidate or update weak overlapping articles
instead of creating near-duplicates.

------------------------------------------------------------------------

## 10. Technical SEO requirements

### 10.1 Crawlability and indexation

-   Use a stable, human-readable URL.
-   Return a successful HTTP status for the canonical page.
-   Ensure the page is indexable and not blocked by `robots.txt` or a
    `noindex` directive when it is ready for search.
-   Include the canonical URL in the HTML.
-   Add it to the XML sitemap only when it is ready to be indexed.
-   Use normal crawlable `<a href>` links for navigation and internal
    links.
-   Ensure important content is available in rendered HTML and works
    with the site's JavaScript framework.
-   Avoid requiring a user login or client-side interaction for search
    engines to read the public landing page.
-   Keep public marketing content separate from private authenticated
    product data.

### 10.2 Metadata and headings

-   Unique title and meta description.
-   One clear primary H1.
-   Logical H2/H3 hierarchy.
-   Descriptive image alt text based on the actual image, not keyword
    stuffing.
-   Open Graph/social metadata consistent with visible page content.
-   Avoid repetitive titles across AI and existing feature pages.

### 10.3 Structured data

-   Use only relevant schema types supported by the actual page and
    current Google documentation.
-   `SoftwareApplication` may be considered if it accurately represents
    the product and required properties can be provided truthfully.
-   `Organization`/`WebSite` markup should remain consistent with the
    rest of the site.
-   `BreadcrumbList` may be used if visible breadcrumbs exist.
-   FAQ content must be visible and accurate; do not add schema solely
    to seek a rich result.
-   Do not invent aggregate ratings, reviews, prices, offers, product
    availability or AI features in structured data.
-   Validate markup and monitor Search Console after deployment.

### 10.4 Internal linking

-   Homepage → AI landing page when the AI section is substantiated.
-   AI landing page → relevant existing feature pages.
-   Relevant feature pages → AI landing page when a real workflow
    connection exists.
-   Educational articles → the most relevant product page, not always
    the homepage.
-   Use descriptive, natural anchors and avoid repeating the same
    exact-match phrase unnaturally in every link.
-   Avoid orphan pages and circular links added only for SEO.

### 10.5 Performance and accessibility

-   Keep the hero lightweight; do not require a heavy interactive AI
    demo to render the page.
-   Optimize images and avoid layout shifts.
-   Ensure mobile readability and keyboard accessibility.
-   Give interactive demos accessible labels and error states.
-   Use semantic HTML where appropriate.
-   Test Core Web Vitals and mobile performance after deployment.

### 10.6 AI crawler and "GEO" myths

Do not make success dependent on special AI-only markup, keyword
stuffing, a mandatory `llms.txt` file, artificial "entity mentions," or
a supposed special paragraph-chunking formula. Prioritize crawlability,
accurate information, strong internal linking, original content and
conventional technical SEO. Eligibility for AI search features is not
guaranteed.

------------------------------------------------------------------------

## 11. Security, privacy and reliability requirements

### 11.1 Tenant isolation and authorization

-   Resolve tenant, branch and role from authenticated server-side
    context on every request.
-   Apply authorization in the data-access/tool layer, not just in the
    prompt.
-   Do not rely on model instructions as a security boundary.
-   Test attempts to access another tenant, another branch, restricted
    payroll or unauthorized customer records.
-   Minimize personal data in model context and logs.
-   Treat user-entered text, imported documents and retrieved records as
    untrusted content.
-   Do not allow retrieved content or prompt injection to modify tool
    permissions or system policies.

### 11.2 Tool safety

-   No arbitrary model-generated SQL against production databases.
-   Use typed, allowlisted functions with strict input validation.
-   Use read-only tools by default.
-   Separate draft generation from execution.
-   Require confirmation for consequential external actions and bulk
    operations.
-   Use idempotency for retries and duplicate prevention.
-   Record a traceable action result and show failures honestly.
-   Apply timeouts, quotas, abuse detection and provider cost controls.

### 11.3 Reliability and evaluation

Create a test set from representative workshop questions, with expected
query results and permission outcomes. Include: - Numerical
correctness. - Date-range and branch filtering. - Ambiguous wording and
follow-up questions. - Missing/inconsistent data. - Unauthorized access
attempts. - Prompt injection in notes or imported content. - Draft
hallucination checks. - Duplicate action prevention. - Failed
provider/API calls and retries. - Multilingual cases only for languages
officially supported.

Do not launch a capability solely because it looks convincing in a demo.
Establish minimum thresholds for numerical accuracy, permission
correctness, action safety, latency and error handling before release.

------------------------------------------------------------------------

## 12. Analytics and measurement

### 12.1 SEO baseline

Before changes, export or record: - Existing page/query matrix from
Google Search Console. - Clicks, impressions, CTR and average position
by page/query. - Existing URLs receiving impressions for AI-related
terms. - Index coverage and canonical status. - Organic landing-page
conversions and demo/trial events. - Relevant rankings/traffic for
existing garage-management terms.

Do not assume a new AI page will increase overall organic traffic.
Establish a baseline and compare results over time.

### 12.2 Event tracking

Use the site's established analytics stack and consent configuration.
Candidate events:

-   `ai_landing_view`
-   `ai_cta_click`
-   `ai_demo_request`
-   `ai_feature_page_click`
-   `ai_demo_start` (only for a real demo)
-   `ai_demo_complete` (only if completion is meaningfully defined)

Do not send prompts, customer names, vehicle registration numbers,
invoice details or other sensitive workshop data to marketing analytics.

### 12.3 Product metrics

-   Percentage of supported questions answered correctly.
-   Percentage of responses with correct tenant/branch filters.
-   Permission-denial test pass rate.
-   User correction/negative feedback rate.
-   Draft acceptance/edit rate.
-   Confirmed action success and duplicate-action rate.
-   Tool failure rate and p95 response latency.
-   AI cost per active workshop and per successful task.
-   Repeat use and user-reported usefulness.

### 12.4 SEO and business metrics

-   Indexed status and impressions for the AI page.
-   Clicks/CTR for mapped AI queries.
-   Non-branded versus branded organic visits.
-   Assisted conversions to demo/trial.
-   Conversion rate and qualified leads from the AI landing page.
-   Engagement with related existing feature pages.
-   Query/page overlap indicating cannibalization.
-   Organic performance of the broader site to catch unintended
    regressions.

Use a reasonable measurement window; avoid declaring success or failure
from a few days of data.

------------------------------------------------------------------------

## 13. Rollout plan and ownership

### Phase 1 --- Discovery and foundations

**Owners:** Product + engineering + SEO\
- Inventory existing modules, data tables, APIs and permissions. -
Define supported questions and metric glossary. - Choose the approved AI
provider and data-handling rules. - Confirm launch language, plan
availability and usage limits. - Review Search Console page/query matrix
and existing site URLs. - Draft AI landing page and existing-page
content changes. - Build evaluation examples and a security threat
model.

**Exit gate:** Product requirements, data sources, access rules and
public claim boundaries are approved.

### Phase 2 --- Read-only assistant MVP

**Owners:** Engineering + QA + product\
- Implement authenticated chat UI. - Implement allowlisted read tools. -
Enforce tenant/branch/role checks. - Show filters and source records
where appropriate. - Add refusal/uncertainty states, logging and cost
limits. - Run correctness and cross-tenant security tests.

**Exit gate:** Supported questions meet agreed accuracy and security
thresholds.

### Phase 3 --- Drafting and insight workflows

**Owners:** Engineering + QA + operations\
- Add job-card draft assistance. - Add customer-message drafting. - Add
deterministic business metrics and explanations. - Add human review and
edit-before-save/send. - Test all generated content against source
records.

**Exit gate:** No critical factual-invention or permission issues remain
in the agreed test suite.

### Phase 4 --- Approved actions and automation

**Owners:** Product + engineering + security/QA\
- Add low-risk task creation and reminder preparation. - Add action
preview, explicit confirmation, idempotency and audit logs. - Add
limits, pause controls, failure recovery and action-level permissions. -
Introduce broader automation only after observing the controlled actions
in production.

**Exit gate:** Consequential actions cannot execute without the required
authorization and approval.

### Phase 5 --- Public SEO launch

**Owners:** SEO + content + product marketing + engineering\
- Publish the AI landing page when its claims are accurate. - Add only
substantiated homepage and feature-page sections. - Add internal links
and accurate structured data. - Validate canonical, indexability,
sitemap, rendering, mobile performance and analytics. - Capture baseline
and monitor for query overlap and conversion performance.

**Exit gate:** All published claims map to available features, and
technical QA passes.

------------------------------------------------------------------------

## 14. Launch checklist

### Product and claims

-   [ ] AI capability status is documented and owned.
-   [ ] Every public claim maps to a verified release.
-   [ ] Example questions work against actual supported data.
-   [ ] Mockups are labelled and cannot be mistaken for live
    functionality.
-   [ ] Pricing and availability statements are confirmed.
-   [ ] Support and sales teams have the same feature-status
    information.

### Engineering and safety

-   [ ] Tenant and branch isolation tested.
-   [ ] Role-based access tested for every tool.
-   [ ] No arbitrary SQL or unrestricted write access.
-   [ ] Drafts are separated from execution.
-   [ ] External/consequential actions require appropriate confirmation.
-   [ ] Idempotency, audit logs, timeouts and failure states tested.
-   [ ] Privacy, retention and provider terms approved.
-   [ ] Cost and rate limits configured.
-   [ ] Evaluation suite meets agreed thresholds.

### SEO and content

-   [ ] Search Console query/page overlap reviewed.
-   [ ] One canonical AI landing URL selected.
-   [ ] Title, description, H1 and heading hierarchy reviewed.
-   [ ] Claims are truthful and evidence-backed.
-   [ ] Existing page intent preserved.
-   [ ] Internal links are relevant and crawlable.
-   [ ] Structured data reflects visible, verified content.
-   [ ] Sitemap and indexability verified.
-   [ ] Mobile rendering and performance tested.
-   [ ] Analytics events tested without sensitive data.
-   [ ] Content reviewed by product/engineering before publication.

------------------------------------------------------------------------

## 15. Content and claim governance

Maintain a simple claim register with these fields:

  Field          Description
  -------------- -----------------------------------------------------------
  Claim ID       Stable identifier
  Public claim   Exact text or meaning used on the site
  Capability     Product feature supporting the claim
  Status         Planned / internal test / beta / available / disabled
  Evidence       Test result, product URL, screenshot or release reference
  Limitations    Supported modules, roles, languages, plans or actions
  Owner          Product/engineering approver
  Review date    Last verified date

If a capability is disabled or regresses, remove or revise the relevant
public claim promptly. Do not let SEO copy drift away from the actual
product.

------------------------------------------------------------------------

## 16. Official SEO references

Use current official documentation at implementation time; requirements
can change.

-   Google Search Central --- Optimizing for generative AI features on
    Google Search:
    https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
-   Google Search Central --- AI features and your website:
    https://developers.google.com/search/docs/appearance/ai-features
-   Google Search Central --- Guidance on generative AI content:
    https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
-   Google Search Central --- Search Essentials:
    https://developers.google.com/search/docs/essentials

Core principle: Google's AI search experiences still rely on ordinary
search eligibility and quality practices. Prioritize useful, original,
accessible content and clear technical structure; do not promise
inclusion in AI Overviews or other generative search features.

------------------------------------------------------------------------

## 17. Final recommendation

Build GarageSaarthi AI as a **secure, workshop-grounded copilot with
controlled actions**, not as an unrestricted chatbot. Include automation
in the roadmap immediately, but release it progressively: read-only
answers first, reviewed drafts second, and permissioned, confirmed
actions after reliability is proven.

For SEO, create one authoritative AI garage-management landing page and
improve existing pages only where the AI capability strengthens their
current purpose. Publish capability-specific present-tense claims only
after the feature is genuinely available. This gives GarageSaarthi a
coherent AI product direction, an implementable engineering plan and a
credible search strategy without creating misleading claims or thin,
repetitive pages.
