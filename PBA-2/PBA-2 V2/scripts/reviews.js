const reviews = [
  { text: "CodeNest is amazing! I learned so much in just a few weeks.", author: "Alice" },
  { text: "The interactive lessons are very engaging and easy to follow.", author: "Bob" },
  { text: "I love the clean design and the variety of topics available.", author: "Charlie" },
];

let currentReviewIndex = 0;

function moveReview(direction) {
  currentReviewIndex = (currentReviewIndex + direction + reviews.length) % reviews.length;
  const reviewContent = document.getElementById("reviewContent");
  reviewContent.innerHTML = `
    <p>"${reviews[currentReviewIndex].text}"</p>
    <p><strong>- ${reviews[currentReviewIndex].author}</strong></p>
  `;
}

<script src="scripts/reviews.js"></script>