import React from "react";

const QuickBiteCTA = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #f97316, #facc15)", // orange-yellow gradient
        textAlign: "center",
        padding: "60px 20px",
        borderRadius: "12px",
        color: "#fff",
      }}
    >
      {/* Optional Icon */}
      <div style={{ fontSize: "40px", marginBottom: "20px" }}>🍔</div>

      <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "15px" }}>
        Craving Something Delicious?
      </h2>
      <p style={{ fontSize: "16px", marginBottom: "30px" }}>
        Join thousands of food lovers who trust QuickBite for fresh, tasty meals
        delivered fast.
      </p>

      <button
        style={{
          padding: "12px 25px",
          backgroundColor: "#fff",
          color: "#f97316",
          fontWeight: "600",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
      >
        Order Now
      </button>
    </div>
  );
};

export default QuickBiteCTA;
