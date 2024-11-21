import React, { useState } from 'react';
import './RatingForm.css';

function RatingForm() {
    const [selectedRating, setSelectedRating] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleRatingClick = (rating) => {
        setSelectedRating(rating);
    };

    const handleSubmit = () => {
        if (selectedRating) {
            setIsSubmitted(true);
        } else {
            alert("Please select a rating before submitting.");
        }
    };

    return (
        <div className="rating-container">
            {!isSubmitted ? (
                <div id="rating-form">
                    <div className="rating-header">
                        <h2>Rate Your Experience</h2>
                        <p>Please select a rating from 1 to 5.</p>
                    </div>
                    <div className="rating-options">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                                key={rating}
                                className={`rating-btn ${selectedRating === rating ? 'selected' : ''}`}
                                onClick={() => handleRatingClick(rating)}
                            >
                                {rating}
                            </button>
                        ))}
                    </div>
                    <button id="submit-btn" className="submit-btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
               
                
            ) : (
                <div id="thank-you-message" className="feedback-container">
                    <div className="selected-rating">
                        You selected {selectedRating} out of 5
                    </div>
                    <div className="thank-you">Thank You!</div>
                    <div className="message">
                        We appreciate your feedback. It helps us improve our services.
                    </div>
                </div>
            )}
        </div>
    );
}

export default RatingForm;
