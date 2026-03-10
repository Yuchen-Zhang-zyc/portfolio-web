const fs = require('fs');
const content = fs.readFileSync('/Users/yuchenzhang/.gemini/antigravity/brain/3085defb-bbb2-44f3-87dc-ea25054c381a/.system_generated/steps/1028/output.txt', 'utf8');

// Find the code block. It starts with "const img..." and ends at the end.
// Actually, it's just the contents of the file. But we need to make sure we don't include tool output wrapper text if there is any.
// The file seems to start with code directly or after some basic header. Let's look at the first few lines again.
// The view_file output showed: 1: const img...
// It IS the raw code.
// Let's replace "export default function Frame()" with "export default function NirvanaProject()" just for consistency, but the user said "do exactly as in figma". Frame is fine, or NirvanaProject is fine. Next.js pages must export default a function.

fs.writeFileSync('/Users/yuchenzhang/Desktop/portfolio_web/src/app/projects/nirvana/page.tsx', content);
console.log('Done');
