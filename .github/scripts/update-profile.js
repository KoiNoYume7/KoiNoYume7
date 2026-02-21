const fs = require("fs");

const readmePath = "README.md";
let readme = fs.readFileSync(readmePath, "utf8");

// Extract DOB
const dobMatch = readme.match(/<!-- dob:\s*(\d{4}-\d{2}-\d{2})\s*-->/);
if (!dobMatch) process.exit(0);

const birthDate = new Date(dobMatch[1]);
const today = new Date(
  new Date().toLocaleString("en-US", { timeZone: "Europe/Zurich" })
);

// Calculate age
let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
if (
  monthDiff < 0 ||
  (monthDiff === 0 && today.getDate() < birthDate.getDate())
) {
  age--;
}

// Calculate days alive
const diffTime = today - birthDate;
const daysAlive = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// Replace markers
readme = readme.replace(
  /<!-- AGE_START -->(.*?)<!-- AGE_END -->/,
  `<!-- AGE_START -->${age}<!-- AGE_END -->`
);

readme = readme.replace(
  /<!-- DAYS_START -->(.*?)<!-- DAYS_END -->/,
  `<!-- DAYS_START -->${daysAlive}<!-- DAYS_END -->`
);

fs.writeFileSync(readmePath, readme);