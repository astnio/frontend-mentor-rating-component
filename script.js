const btnSubmitFeedback = document.getElementById('btn-rating-submit');
const ratingLabel = document.getElementById('rating-label');

btnSubmitFeedback.addEventListener('click', () => {
  const selectedRating = document.querySelector('input[name="rating"]:checked');

  if (selectedRating) {
    ratingLabel.innerText = selectedRating.value;
  }
});
