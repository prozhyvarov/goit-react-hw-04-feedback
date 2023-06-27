import React, { Component } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedBackOptions/FeedBackOptions';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedBack = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countGoodFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedBack();
    return Math.round((good / total) * 100) || 0;
  };

  onLeaveFeedBack = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedBack();
    const totalPercentage = this.countGoodFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedBack={this.onLeaveFeedBack}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              totalPercentage={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </Section>
      </Container>
    );
  }
}
