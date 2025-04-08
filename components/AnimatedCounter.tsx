"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp
        decimal=","
        end={amount}
        prefix="$"
        duration={2.75}
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
