import React, { useState } from "react";

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const containerStyle = {
        width: "300px",
        margin: "60px auto",
        textAlign: "center",
        fontFamily: "Arial",
    };

    const titleStyle = {
        fontSize: "22px",
        fontWeight: "bold",
        marginBottom: "15px",
    };

    const starStyle = {
        fontSize: "30px",
        cursor: "pointer",
        marginRight: "5px",
    };

    const ratingTextStyle = {
        marginTop: "15px",
        fontSize: "16px",
        fontWeight: "600",
    };

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>Product Rating</div>

            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}
                    style={{
                        ...starStyle,
                        color: rating >= star ? "gold" : "gray",
                    }}
                    onClick={() => setRating(star)}
                >
                    ★
                </span>
            ))}

            <div style={ratingTextStyle}>
                Selected Rating: {rating} / 5
            </div>
        </div>
    );
}

export default StarRating;
