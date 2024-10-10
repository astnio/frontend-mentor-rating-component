const btnSubmitFeedback = document.getElementById('btn-rating-submit');

function updateRatingLabel() {
  const ratingLabel = document.getElementById('rating-label');
  const selectedRating = document.querySelector('input[name="rating"]:checked');

  if (selectedRating) {
    ratingLabel.innerText = selectedRating.value;
  }
}

btnSubmitFeedback.addEventListener('click', () => {
  updateRatingLabel();
});
