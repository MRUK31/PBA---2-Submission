const topics = {
  htmllec: {
    intro_html: `
      <h2>HTML Introduction</h2>
      <p>HTML (HyperText Markup Language) is the foundation of all web pages. It provides the basic structure for websites, which is enhanced and modified by CSS and JavaScript.</p>
      <ul>
        <li>Uses <strong>tags</strong> to define elements (like headings, paragraphs, links, etc.).</li>
        <li>Browsers interpret HTML to render web pages visually.</li>
        <li>Every HTML document starts with <code>&lt;!DOCTYPE html&gt;</code> to declare the document type.</li>
      </ul>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    Hello HTML!
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>`,

    tags_html: `
      <h2>Basic HTML Tags</h2>
      <p>Basic tags help in structuring and displaying content on a webpage:</p>
      <ul>
        <li><code>&lt;h1&gt; to &lt;h6&gt;</code>: Heading tags</li>
        <li><code>&lt;p&gt;</code>: Paragraph tag</li>
        <li><code>&lt;a&gt;</code>: Anchor tag (used for hyperlinks)</li>
        <li><code>&lt;img&gt;</code>: Used to embed images</li>
        <li><code>&lt;div&gt;</code>: Generic container for grouping content</li>
        <li><code>&lt;br&gt;</code>: Line break</li>
        <li><code>&lt;hr&gt;</code>: Horizontal rule (divider)</li>
      </ul>
      <pre><code>&lt;h1&gt;Welcome!&lt;/h1&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;
&lt;br&gt;
&lt;img src="image.jpg" alt="Image"&gt;
&lt;hr&gt;
</code></pre>`,

    forms_html: `
      <h2>HTML Forms</h2>
      <p>Forms are used to collect user input. The data can be submitted to a server for processing.</p>
      <ul>
        <li><code>&lt;form&gt;</code>: Wraps form elements</li>
        <li><code>&lt;input&gt;</code>: Accepts user input (text, radio, checkbox, etc.)</li>
        <li><code>&lt;label&gt;</code>: Defines labels for inputs</li>
        <li><code>&lt;textarea&gt;</code>: Multiline text input</li>
        <li><code>&lt;select&gt;</code>: Dropdown list</li>
        <li><code>&lt;button&gt;</code>: Submit or custom button</li>
      </ul>
      <pre><code>&lt;form&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;
  &lt;input type="text" id="name" placeholder="Enter your name"&gt;&lt;br&gt;&lt;br&gt;
  &lt;label&gt;Gender:&lt;/label&gt;
  &lt;input type="radio" name="gender" value="male"&gt; Male
  &lt;input type="radio" name="gender" value="female"&gt; Female&lt;br&gt;&lt;br&gt;
  &lt;button&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre>`,

    tables_html: `
      <h2>HTML Tables</h2>
      <p>Tables are used to display data in rows and columns.</p>
      <ul>
        <li><code>&lt;table&gt;</code>: Main table tag</li>
        <li><code>&lt;tr&gt;</code>: Table row</li>
        <li><code>&lt;th&gt;</code>: Table header cell</li>
        <li><code>&lt;td&gt;</code>: Table data cell</li>
      </ul>
      <pre><code>&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;th&gt;Name&lt;/th&gt;
    &lt;th&gt;Age&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;John&lt;/td&gt;
    &lt;td&gt;25&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code></pre>`,

    semantic_html: `
      <h2>Semantic HTML</h2>
      <p>Semantic HTML introduces meaning to the content structure. These tags clearly describe the purpose of the content they contain, which improves accessibility and SEO.</p>
      <ul>
        <li><code>&lt;header&gt;</code>: Page or section header</li>
        <li><code>&lt;nav&gt;</code>: Navigation links</li>
        <li><code>&lt;main&gt;</code>: Main content</li>
        <li><code>&lt;section&gt;</code>: Thematic grouping of content</li>
        <li><code>&lt;article&gt;</code>: Self-contained content (e.g., blog post)</li>
        <li><code>&lt;footer&gt;</code>: Footer content</li>
      </ul>
      <pre><code>&lt;header&gt;
  &lt;h1&gt;Welcome to My Site&lt;/h1&gt;
&lt;/header&gt;
&lt;nav&gt;
  &lt;a href="#home"&gt;Home&lt;/a&gt;
  &lt;a href="#contact"&gt;Contact&lt;/a&gt;
&lt;/nav&gt;
&lt;main&gt;
  &lt;section&gt;
    &lt;h2&gt;About Us&lt;/h2&gt;
    &lt;p&gt;We are a tech company...&lt;/p&gt;
  &lt;/section&gt;
&lt;/main&gt;
&lt;footer&gt;
  &lt;p&gt;© 2025 MySite&lt;/p&gt;
&lt;/footer&gt;
</code></pre>`
  },


  css: {
    intro_css: `
      <h2>CSS Introduction</h2>
      <p>CSS (Cascading Style Sheets) is used to apply styling and layout to HTML content. It controls the design, spacing, colors, fonts, and overall visual presentation of a webpage.</p>
      <ul>
        <li>CSS can be inline, internal, or external.</li>
        <li>It works by selecting HTML elements and applying styles to them.</li>
      </ul>
      <pre><code>p {
  color: blue;
  font-size: 16px;
}</code></pre>`,

    selectors_css: `
      <h2>CSS Selectors</h2>
      <p>Selectors allow you to target specific HTML elements to style:</p>
      <ul>
        <li><strong>Element Selector:</strong> <code>p {}</code></li>
        <li><strong>Class Selector:</strong> <code>.classname {}</code></li>
        <li><strong>ID Selector:</strong> <code>#idname {}</code></li>
      </ul>
      <pre><code>/* Example */
#mainTitle {
  color: green;
}
.container {
  padding: 20px;
}</code></pre>`,

    boxmodel_css: `
      <h2>CSS Box Model</h2>
      <p>The box model describes the rectangular boxes generated for elements, consisting of:</p>
      <ul>
        <li><strong>Content:</strong> Actual text or images</li>
        <li><strong>Padding:</strong> Space around the content</li>
        <li><strong>Border:</strong> Surrounds the padding</li>
        <li><strong>Margin:</strong> Space between elements</li>
      </ul>
      <pre><code>div {
  margin: 10px;
  padding: 15px;
  border: 1px solid black;
}</code></pre>`,

    flexbox_css: `
      <h2>CSS Flexbox</h2>
      <p>Flexbox is a one-dimensional layout method for arranging items in rows or columns, making it easier to design responsive layouts.</p>
      <pre><code>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}</code></pre>`,

    media_css: `
      <h2>Responsive CSS (Media Queries)</h2>
      <p>Media queries help make websites responsive by applying styles based on screen size or device type.</p>
      <pre><code>@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}</code></pre>`
  },


  js: {
    intro: `
      <h2>JavaScript Introduction</h2>
      <p>JavaScript is a scripting language that allows you to create dynamic and interactive web content. It works on the client side in the browser.</p>
      <ul>
        <li>Used for DOM manipulation, events, animations, and API interactions.</li>
        <li>Can be written directly in HTML using <code>&lt;script&gt;</code> tags or in separate .js files.</li>
      </ul>`,

    variables: `
      <h2>Variables</h2>
      <p>Variables store data that can be used and modified later in a program.</p>
      <ul>
        <li><code>let</code>: Block-scoped, reassignable</li>
        <li><code>const</code>: Block-scoped, not reassignable</li>
        <li><code>var</code>: Function-scoped (older, not recommended)</li>
      </ul>
      <pre><code>let age = 25;
const name = "Mrunali";</code></pre>`,

    functions: `
      <h2>Functions</h2>
      <p>Functions are reusable blocks of code that perform specific tasks. They can take parameters and return results.</p>
      <pre><code>function greet(name) {
  return "Hello, " + name;
}
console.log(greet("John"));</code></pre>`,

    dom: `
      <h2>DOM Manipulation</h2>
      <p>DOM (Document Object Model) represents the structure of a web page. JavaScript can access and change content using DOM methods.</p>
      <pre><code>document.getElementById("myText").innerText = "Changed!";</code></pre>`,

    events: `
      <h2>JS Events</h2>
      <p>JavaScript can respond to user interactions using events like <code>click</code>, <code>submit</code>, <code>mouseover</code>, etc.</p>
      <pre><code>document.getElementById("myBtn")
  .addEventListener("click", () =&gt; {
    alert("Button clicked!");
});</code></pre>`
  },
};


