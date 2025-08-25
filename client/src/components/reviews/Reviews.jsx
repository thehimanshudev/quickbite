import { useState } from "react";

// Single Review Component
const Review = ({ name, rating, comment, date }) => {
  const starStyle = (filled) => ({
    color: filled ? "#facc15" : "#d1d5db",
    fontSize: "18px",
    marginRight: "2px",
  });

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "15px",
        width: "300px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <h4 style={{ fontWeight: "600", fontSize: "16px" }}>{name}</h4>
        <span style={{ color: "#6b7280", fontSize: "12px" }}>{date}</span>
      </div>
      <div style={{ display: "flex", marginBottom: "8px" }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={starStyle(i < rating)}>
            ★
          </span>
        ))}
      </div>
      <p style={{ color: "#374151", fontSize: "14px" }}>{comment}</p>
    </div>
  );
};

// Review List Horizontal
const Reviews = () => {
  const [reviews] = useState([
    {
      name: "Sonu Yadav",
      rating: 5,
      comment: "Delicious food!",
      date: "2025-08-24",
    },
    {
      name: "Rahul Patel",
      rating: 4,
      comment: "Good taste, but a bit spicy.",
      date: "2025-08-23",
    },
    {
      name: "Vijay Rana",
      rating: 5,
      comment: "Absolutely loved it!",
      date: "2025-08-22",
    },
    {
      name: "Akash",
      rating: 3,
      comment: "Average experience.",
      date: "2025-08-21",
    },
  ]);

  // Take only first 3 reviews
  const topThreeReviews = reviews.slice(0, 3);

  return (
    <div
      id="reviews"
      style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}
    >
      <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px" }}>
        Top Reviews
      </h2>
      <div
        style={{
          display: "flex",
          gap: "15px",
          overflowX: "auto",
          paddingBottom: "10px",
        }}
      >
        {topThreeReviews.map((rev, idx) => (
          <Review key={idx} {...rev} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
