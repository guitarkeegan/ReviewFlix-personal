

const textAreaEl = document.querySelector("textarea");
const reviewButtonEl = document.querySelector(".review-button");

reviewButtonEl.addEventListener("click", async ()=>{
    const currentUrl = window.location;
    const urlArr = currentUrl.href.split("/");
    const movieId = urlArr[urlArr.length - 1]

    try {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ content: textAreaEl.value, movie_id: movieId, rating: 3, user_id: 2 }),
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            document.location.replace(`/movie/${movieId}`);
          } else {
            alert('Failed to sign up.');
          }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});