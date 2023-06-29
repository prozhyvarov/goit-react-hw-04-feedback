import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackContainer, FeedbackButton } from './FeedBackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackContainer>
        {options.map(option => (
          <FeedbackButton
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButton>
        ))}
      </FeedbackContainer>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};
