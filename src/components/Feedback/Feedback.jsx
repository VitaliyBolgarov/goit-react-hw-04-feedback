import { Button } from './Feedback.styled';

export const Feedback = ({ options, leaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button
          type="button"
          onClick={leaveFeedback}
          name={option}
          key={option}
        >
          {option}
        </Button>
      ))}
    </>
  );
};
