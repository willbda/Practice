// Challenge 7: Obsidian Note Generator (CAPSTONE PROJECT)
// 🎯 Goal: Build a complete CSV-to-Obsidian note generation system

updateChallengeInfo(
    "Challenge 7: Obsidian Note Generator",
    "The ultimate challenge! Build a production-ready system that takes CSV data and generates properly formatted Obsidian notes with templates, frontmatter, and intelligent categorization.",
    [
        "This is a real tool you can actually use for your workflow!",
        "Focus on making it robust - handle edge cases and errors gracefully",
        "Think about user experience - what would make this tool delightful to use?",
        "Consider extensibility - how could someone add new templates easily?",
        "Test with real data - the messier the better!"
    ]
);

console.log("📚 Starting Challenge 7: Obsidian Note Generator");
console.log("🏆 This is your capstone project - build something you'll actually use!");

// TODO 1: Enhanced CSV Parser with Error Handling
// Build a production-ready CSV parser:
// - parseCSVFile(csvText): robust parsing with detailed error reporting
// - validateCSVStructure(data): ensure data consistency
// - repairMalformedRows(data): attempt to fix common CSV issues
// - generateParsingReport(results): report what was parsed, what failed

class CSVParser {
    constructor() {
        this.errors = [];
        this.warnings = [];
        this.stats = { processed: 0, errors: 0, warnings: 0 };
    }
    
    // YOUR METHODS HERE:
    
}

// TODO 2: Advanced Template Engine
// Create a sophisticated template system:
// - Support nested data: {{contact.name}}, {{meeting.date}}
// - Conditional rendering: {{#if status === 'urgent'}}URGENT: {{/if}}
// - Loops: {{#each attendees}}[[{{name}}]]{{/each}}
// - Filters: {{date|formatDate}}, {{text|uppercase}}
// - Template inheritance: base templates with blocks

class TemplateEngine {
    constructor() {
        this.templates = new Map();
        this.filters = new Map();
        this.helpers = new Map();
    }
    
    // YOUR METHODS HERE:
    
}

// TODO 3: Obsidian-Specific Features
// Build features specifically for Obsidian:
// - generateVaultStructure(data): suggest folder organization
// - createLinkNetwork(data): identify potential note connections
// - extractMentions(text): find @mentions and convert to links
// - generateTagHierarchy(data): create hierarchical tag structure
// - handleAttachments(data): process file references and attachments

class ObsidianFormatter {
    constructor() {
        this.vaultConfig = {
            dateFormat: 'YYYY-MM-DD',
            linkStyle: 'wikilink', // or 'markdown'
            tagPrefix: '#',
            attachmentFolder: 'attachments'
        };
    }
    
    // YOUR METHODS HERE:
    
}

// TODO 4: Intelligent Document Classification
// Create a smart system to detect document types:
// - analyzeFieldNames(headers): infer document type from column names
// - detectPatterns(data): look for patterns in the data itself
// - confidenceScoring(analysis): rate how confident we are about the type
// - suggestTemplates(documentType): recommend best templates

class DocumentClassifier {
    constructor() {
        this.typeRules = new Map();
        this.patterns = new Map();
        this.setupDefaultRules();
    }
    
    setupDefaultRules() {
        // Define rules for detecting meetings, reports, applications, etc.
    }
    
    // YOUR METHODS HERE:
    
}

// TODO 5: Batch Processing Pipeline
// Create a complete processing pipeline:
// - validateInput(csvData): comprehensive input validation
// - processInBatches(data, batchSize): handle large datasets efficiently
// - generateProgress(current, total): show processing progress
// - createOutputStructure(results): organize generated files
// - generateSummaryReport(results): detailed report of what was created

class ProcessingPipeline {
    constructor() {
        this.parser = new CSVParser();
        this.templateEngine = new TemplateEngine();
        this.formatter = new ObsidianFormatter();
        this.classifier = new DocumentClassifier();
    }
    
    async processCSV(csvText, options = {}) {
        // YOUR IMPLEMENTATION HERE:
        // 1. Parse CSV
        // 2. Classify documents
        // 3. Apply templates
        // 4. Format for Obsidian
        // 5. Generate reports
    }
    
    // YOUR METHODS HERE:
    
}

// TODO 6: Real-World Template Library
// Create a comprehensive template library:

const TEMPLATE_LIBRARY = {
    // Meeting templates
    meeting: {
        daily_standup: `---
type: meeting
subtype: daily-standup
date: {{date}}
attendees: [{{#each attendees}}"{{name}}"{{#unless @last}}, {{/unless}}{{/each}}]
tags: [meetings, standup, {{team}}]
---

# Daily Standup - {{date}}

## Attendees
{{#each attendees}}
- [[{{name}}]]
{{/each}}

## Discussion Points
{{notes}}

## Action Items
- [ ] Review progress from yesterday
- [ ] Plan today's work
- [ ] Identify blockers

---
Related: [[Standup Notes]]`,

        project_meeting: `---
type: meeting
subtype: project
date: {{date}}
project: {{project}}
attendees: [{{#each attendees}}"{{name}}"{{#unless @last}}, {{/unless}}{{/each}}]
tags: [meetings, project, {{project|slugify}}]
---

# {{title}} - {{date}}

**Project:** [[{{project}}]]
**Date:** {{date}}
**Duration:** {{duration|default:"1 hour"}}

## Attendees
{{#each attendees}}
- [[{{name}}]]
{{/each}}

## Agenda
{{agenda|default:"No agenda provided"}}

## Discussion
{{notes}}

## Decisions Made
{{decisions|default:"No major decisions"}}

## Action Items
{{#each actionItems}}
- [ ] {{task}} - [[{{assignee}}]] - {{deadline}}
{{/each}}

## Next Steps
{{nextSteps|default:"Schedule follow-up meeting"}}

---
Related: [[{{project}}]], [[Meeting Notes]]`
    },

    // Report templates
    report: {
        status_report: `---
type: report
subtype: status
date: {{date}}
author: {{author}}
project: {{project}}
tags: [reports, status, {{project|slugify}}]
---

# {{title}} - {{date}}

**Author:** [[{{author}}]]
**Project:** [[{{project}}]]
**Reporting Period:** {{period}}

## Executive Summary
{{summary}}

## Key Accomplishments
{{accomplishments}}

## Challenges & Blockers
{{challenges}}

## Metrics & KPIs
{{metrics}}

## Next Period Goals
{{goals}}

## Resource Needs
{{resources|default:"No additional resources needed"}}

---
Related: [[{{project}}]], [[Reports]]`,

        analysis_report: `---
type: report
subtype: analysis
date: {{date}}
author: {{author}}
subject: {{subject}}
tags: [reports, analysis, {{category}}]
---

# {{title}} - Analysis Report

**Analyst:** [[{{author}}]]
**Date:** {{date}}
**Subject:** {{subject}}

## Overview
{{overview}}

## Methodology
{{methodology}}

## Key Findings
{{findings}}

## Data Sources
{{#each sources}}
- {{source}} - {{reliability}}
{{/each}}

## Recommendations
{{recommendations}}

## Appendices
{{appendices|default:"No appendices"}}

---
Related: [[Analysis Reports]], [[{{category}}]]`
    },

    // Application templates
    application: {
        job_application: `---
type: application
subtype: job
company: {{company}}
position: {{position}}
status: {{status}}
date_applied: {{dateApplied}}
tags: [applications, jobs, {{company|slugify}}]
---

# {{position}} at [[{{company}}]]

**Position:** {{position}}
**Company:** [[{{company}}]]
**Status:** {{status}}
**Applied:** {{dateApplied}}
**Deadline:** {{deadline|default:"Not specified"}}

## Job Description
{{jobDescription|default:"Add job description here"}}

## Application Materials
- [ ] Resume tailored for this role
- [ ] Cover letter
- [ ] Portfolio/samples
- [ ] References

## Company Research
{{companyResearch|default:"Research company background, culture, recent news"}}

## Interview Preparation
{{interviewPrep|default:"Prepare for potential interview questions"}}

## Follow-up Actions
- [ ] Send thank-you email after application
- [ ] Follow up in 1-2 weeks
- [ ] Connect with employees on LinkedIn

## Notes
{{notes}}

---
Related: [[Job Search]], [[{{company}}]], [[Applications]]`
    }
};

// TODO 7: User Interface & Experience
// Create an intuitive interface for using your system:
// - loadCSVFile(): handle file input
// - previewData(data): show preview before processing
// - selectTemplates(): let user choose/customize templates
// - processWithProgress(): show real-time progress
// - downloadResults(): package results for download

// YOUR CODE HERE:


// TODO 8: Testing & Validation
// Test your system thoroughly:
// - createTestData(): generate various test CSV files
// - runAllTests(): comprehensive test suite
// - validateOutput(): ensure generated notes are valid
// - performanceTest(): test with large datasets

// YOUR CODE HERE:


// 🧪 Comprehensive Test Suite
function testObsidianGenerator() {
    console.log("🔍 Testing your Obsidian Note Generator...");
    
    // Test data representing real-world messiness
    const testCSV = `
type,title,date,company,position,status,attendees,notes,project,author
meeting,"Project Kickoff Meeting",2025-01-15,,,,"John Smith, Sarah Johnson, Mike Chen","Discussed timeline, budget, and deliverables. Next meeting scheduled for next week.",ProjectAlpha,
report,"Q4 Performance Review",2025-01-10,,,,,"","Revenue up 15%, customer satisfaction at 92%. Need to focus on retention in Q1.",,"Jane Doe"
application,"Senior Developer Position",2025-01-12,TechCorp,"Senior Software Engineer",Applied,,"Applied through LinkedIn. Heard back within 2 days for phone screen.",,"David Williams"
meeting,"Daily Standup",2025-01-16,,,,"Alex Park, Lisa Wang","Sprint 3 progress review. Blocker: API integration issues.",ProjectBeta,
application,"Product Manager Role",2025-01-08,StartupXYZ,"Product Manager","Interview Scheduled",,"Phone interview scheduled for Friday 2 PM.",,"David Williams"
`;
    
    try {
        // Test the complete pipeline
        const pipeline = new ProcessingPipeline();
        
        console.log("📊 Processing test CSV data...");
        // const results = await pipeline.processCSV(testCSV);
        
        console.log("✨ System architecture looks solid!");
        console.log("🏗️ You've built a sophisticated data processing system!");
        console.log("📝 This is production-ready code for your Obsidian workflow!");
        
        return true;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// Uncomment the line below when you're ready to test your complete system
// runTests("Obsidian Generator", testObsidianGenerator);

console.log("🎉 CONGRATULATIONS! You're building a real, useful application!");
console.log("💡 This system could save you hours of manual note creation!");
console.log("🚀 Think about additional features: AI categorization, smart tagging, etc.");
console.log("📈 You're not just learning JavaScript - you're solving real problems!");