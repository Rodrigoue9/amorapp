
import React, { useState, useEffect, useCallback } from 'react';
import { VALENTINE_TARGET_DATE } from '../constants';
import { CountdownTime } from '../types';

const calculateTimeLeft = (): CountdownTime | null => {
  const difference = +VALENTINE_TARGET_DATE - +new Date();
  let timeLeft: CountdownTime | null = null;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

interface TimePartProps {
  value: number;
  label: string;
}
const TimePart: React.FC<TimePartProps> = ({ value, label }) => (
  <div className="flex flex-col items-center mx-2 sm:mx-4 p-2 sm:p-3 bg-gray-800 rounded-lg shadow-md w-16 sm:w-20">
    <span className="text-2xl sm:text-3xl font-bold text-cyan-400">{String(value).padStart(2, '0')}</span>
    <span className="text-xs sm:text-sm text-gray-400 uppercase">{label}</span>
  </div>
);

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime | null>(calculateTimeLeft());
  const [isAnimated, setIsAnimated] = useState(false);

  const updateTimer = useCallback(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateTimer(); // Initial update
      setIsAnimated(true); // Start animation after initial calculation
      const interval = setInterval(updateTimer, 1000);
      return () => clearInterval(interval);
    }, 100); // Small delay for effect
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateTimer]);


  if (!timeLeft) {
    return (
      <div className={`text-center py-8 transition-opacity duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-2xl font-semibold text-cyan-400">Feliz Dia dos Namorados!</h3>
        <p className="text-gray-300 mt-2">Esperamos que você tenha um dia incrível!</p>
      </div>
    );
  }

  return (
    <div className={`text-center py-8 transition-all duration-1000 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Contagem Regressiva para o Dia dos Namorados!</h3>
      <div className="flex justify-center items-center">
        <TimePart value={timeLeft.days} label="Dias" />
        <TimePart value={timeLeft.hours} label="Horas" />
        <TimePart value={timeLeft.minutes} label="Minutos" />
        <TimePart value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};

export default CountdownTimer;
