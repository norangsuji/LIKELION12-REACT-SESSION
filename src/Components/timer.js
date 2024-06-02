import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아갑니다.");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머 종료되었습니다.");
    };
  }, []);

  return <div>타이머 시작합니다 - 콘솔에서 출력됩니다.</div>;
};

export default Timer;
