import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackContainer, FeedbackButton } from './FeedBackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options, children }) => {
  return (
    <>
      <FeedbackContainer>
        <FeedbackButton
          onClick={() => onLeaveFeedback(options[0])}
          aria-label="Good"
        >
          Good
        </FeedbackButton>
        <FeedbackButton
          onClick={() => onLeaveFeedback(options[1])}
          aria-label="Neutral"
        >
          Neutral
        </FeedbackButton>
        <FeedbackButton
          onClick={() => onLeaveFeedback(options[2])}
          aria-label="Bad"
        >
          Bad
        </FeedbackButton>
      </FeedbackContainer>
      {children}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};
