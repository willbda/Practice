// Challenge 6: Data Processing & Template Generation
// 🎯 Goal: Build a CSV parser and template system for real-world data processing

updateChallengeInfo(
    "Challenge 6: Data Processing & Template Generation",
    "This is where JavaScript gets practical! Build a system to parse CSV data and generate formatted output using templates. Perfect foundation for your Obsidian note generation project.",
    [
        "CSV parsing requires careful handling of quotes, commas, and newlines",
        "Template systems use placeholders that get replaced with actual data",
        "Switch statements are perfect for choosing templates based on data type",
        "String methods like replace(), split(), and trim() are your best friends",
        "Think about edge cases: empty fields, special characters, malformed data"
    ]
);

console.log("📚 Starting Challenge 6: Data Processing & Template Generation");
console.log("🎯 This challenge builds skills you'll use for your Obsidian project!");

// TODO 1: CSV Parser Foundation
// Create a basic CSV parser that can:
// - splitCSVLine(line): split a CSV line into fields (handle quotes!)
// - parseCSVData(csvText): convert full CSV text into array of objects
// - validateRow(row, expectedColumns): check if row has correct structure
// - cleanField(field): trim whitespace and handle empty fields

// YOUR CODE HERE:


// TODO 2: Data Type Detection
// Create functions to intelligently detect and convert data:
// - detectType(value): return 'string', 'number', 'date', 'boolean', 'empty'
// - convertValue(value, targetType): convert string to appropriate type
// - analyzeColumn(values): return statistics about a column's data
// - suggestType(columnData): suggest best type for a column

// YOUR CODE HERE:


// TODO 3: Template System
// Build a flexible template system:
// - createTemplate(name, template): store named templates
// - renderTemplate(templateName, data): replace placeholders with data
// - Template placeholders should use {{fieldName}} syntax
// - Support conditional sections: {{#if condition}}...{{/if}}

// YOUR CODE HERE:


// TODO 4: Document Type Detection & Templates
// Create templates for different document types:
// - Meeting template: {{title}}, {{date}}, {{attendees}}, {{notes}}
// - Report template: {{reportType}}, {{author}}, {{summary}}, {{findings}}
// - Application template: {{companyName}}, {{position}}, {{status}}, {{deadline}}
// - detectDocumentType(row): analyze row data to guess document type

// YOUR CODE HERE:


// TODO 5: Obsidian-Specific Formatting
// Create functions that generate Obsidian-compatible markdown:
// - generateFrontmatter(data): create YAML frontmatter
// - createObsidianLink(text): format as [[Internal Link]]
// - generateTags(data): extract and format #tags
// - formatDate(dateString): convert to YYYY-MM-DD format
// - generateFilename(data, type): create valid filename from data

// YOUR CODE HERE:


// TODO 6: Batch Processing System
// Build a system to process multiple CSV rows:
// - processBatch(csvData): process all rows and return results
// - groupByType(processedData): group results by document type
// - generateReport(results): create summary of what was processed
// - handleErrors(errors): collect and report processing errors gracefully

// YOUR CODE HERE:


// TODO 7: Sample Data & Demo
// Create sample CSV data representing different document types:
// - Sample meeting data with title, date, attendees
// - Sample report data with type, author, findings
// - Sample application data with company, position, status
// - Demonstrate your system processing this sample data

const sampleCSV = `
type,title,date,company,position,status,attendees,notes
meeting,Project Kickoff,2025-01-15,,,,"John, Sarah, Mike",Discussed project timeline and deliverables
report,Q4 Analysis,2025-01-10,,,,,Quarterly performance exceeded expectations by 15%
application,Software Engineer,2025-01-12,TechCorp,Senior Developer,Applied,,Applied through company website
meeting,Daily Standup,2025-01-16,,,,"Team Alpha",Sprint progress review
application,Product Manager,2025-01-08,StartupXYZ,PM,Interview Scheduled,,Phone interview on Friday
`;

// YOUR CODE HERE - Process the sample data:


// 🧪 Test your solutions
function testChallenge6() {
    console.log("🔍 Testing your Challenge 6 solutions...");
    
    try {
        // Test CSV parsing
        if (typeof splitCSVLine === 'function') {
            const testLine = 'name,"John Doe",25,"New York, NY"';
            const fields = splitCSVLine(testLine);
            if (!Array.isArray(fields) || fields.length !== 4) {
                return "splitCSVLine not parsing correctly";
            }
            if (fields[1] !== "John Doe" || fields[3] !== "New York, NY") {
                return "splitCSVLine not handling quotes correctly";
            }
        }
        
        // Test template system
        if (typeof renderTemplate === 'function' && typeof createTemplate === 'function') {
            createTemplate('test', 'Hello {{name}}!');
            const result = renderTemplate('test', {name: 'World'});
            if (result !== 'Hello World!') {
                return "Template system not working correctly";
            }
        }
        
        // Test data type detection
        if (typeof detectType === 'function') {
            if (detectType('123') !== 'number') {
                return "detectType not recognizing numbers";
            }
            if (detectType('2025-01-15') !== 'date') {
                return "detectType not recognizing dates";
            }
        }
        
        console.log("✨ Excellent! Your data processing system is working!");
        console.log("📊 You've built the foundation for serious data manipulation!");
        console.log("🗂️ This could easily become your Obsidian note generator!");
        
        return true;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// Uncomment the line below when you're ready to test your solution
// runTests("Challenge 6", testChallenge6);

console.log("💡 This challenge combines everything: loops, functions, objects, arrays!");
console.log("🚀 You're building something genuinely useful - not just exercises!");
console.log("📝 Think about how each piece connects to your Obsidian workflow...");
console.log("🎯 Pro tip: Start with the CSV parsing, then build templates, then combine them!");