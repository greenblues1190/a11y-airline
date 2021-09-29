import { useState } from 'react';
import './SpinButton.css';

const SpinButton = () => {
  const [adultCount, setAdultCount] = useState(1);

  const increase = () => {
    if (adultCount === 3) return;
    setAdultCount(adultCount + 1);
  };

  const decrease = () => {
    if (adultCount === 0) return;
    setAdultCount(adultCount - 1);
  };

  const onChange = ({ target }) => {
    const { valueAsNumber } = target;

    setAdultCount(valueAsNumber);
  };

  return (
    <>
      <h1>승객 선택</h1>
      <h2>성인</h2>
      <button
        className='round-button minus-button'
        type='button'
        aria-label='성인 탑승자 한명 줄이기'
        onClick={decrease}
        aria-disabled={adultCount === 0}
      ></button>
      <input
        className='adult-amount'
        type='text'
        aria-label='성인'
        min={0}
        max={3}
        value={adultCount}
        onChange={onChange}
      />
      <span className='adult-amount-hidden' aria-live='assertive'>
        성인 승객 {adultCount}명으로 변경
      </span>
      <button
        className='round-button plus-button'
        type='button'
        aria-label='성인 탑승자 한명 늘리기'
        onClick={increase}
        aria-disabled={adultCount === 3}
      ></button>
    </>
  );
};

export default SpinButton;
