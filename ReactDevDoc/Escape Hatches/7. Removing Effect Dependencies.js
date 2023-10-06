// challenge 1 
import { useState, useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('✅ 创建定时器');
    const id = setInterval(() => {
      console.log('⏰ Interval');
      setCount(c => c + 1);    // use the updater function
    }, 1000);
    return () => {
      console.log('❌ 清除定时器');
      clearInterval(id);
    };
  }, []);                      // so that 'count' can be removed from the dependency array

  return <h1>计数器: {count}</h1>
}
