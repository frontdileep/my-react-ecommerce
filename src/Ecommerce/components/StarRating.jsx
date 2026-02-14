function StarRating({ rating }) {
  const stars = Math.round(rating);
  return (
    <div className="stars">
      {"★".repeat(stars)}
      {"☆".repeat(5 - stars)}
    </div>
  );
}

export default StarRating;
