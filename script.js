const btnSubmitFeedback = document.getElementById('btn-rating-submit');
const sectionRating = document.querySelector('.section-rate');
const sectionThankYou = document.querySelector('.section-thank-you');

function updateRatingLabel() {
  const ratingLabel = document.getElementById('rating-label');
  const selectedRating = document.querySelector('input[name="rating"]:checked');

  if (selectedRating) {
    ratingLabel.innerText = selectedRating.value;
    sectionThankYou.style.visibility = 'visible';
    sectionRating.style.transform = 'translateX(-100%)';
    sectionThankYou.style.transform = 'translateX(0%)';
  }
}

btnSubmitFeedback.addEventListener('click', () => {
  updateRatingLabel();
});
