function loadTopic(topic) {
  const contentArea = document.getElementById("contentArea");

  // Determine the page (html, css, js) based on the URL
  const page = window.location.pathname.includes("htmllec") ? "htmllec" :
               window.location.pathname.includes("css") ? "css" : 
               window.location.pathname.includes("js") ? "js" : null;

  console.log("Page:", page, "Topic:", topic); // Debugging line

  // If a page is found and the topic exists for that page, load the content
  if (page && topics[page] && topics[page][topic]) {
    const selectedContent = topics[page][topic];
    contentArea.innerHTML = selectedContent;
  } else {
    contentArea.innerHTML = "<p>Topic not found.</p>";
  }
}
