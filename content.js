// Function to extract email addresses from a given text
function extractEmails(text) {
    return text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
  }
  
  // Get the page content
  const pageContent = document.body.innerText;
  const emails = extractEmails(pageContent);
  
  if (emails) {
    console.log("Found emails:", emails);
    alert("Extracted emails: \n" + emails.join("\n"));
  } else {
    console.log("No emails found.");
  }
  