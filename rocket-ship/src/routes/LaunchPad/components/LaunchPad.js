import { useEffect, useState } from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const [, triggerRerender] = useState();

  useEffect(() => {
    const launch = setInterval(() => { triggerRerender(Date.now()) }, 500);
    console.log("launching..")
    return () => clearInterval(launch)
  }, [])

  return (
    <div className="launchpad">
      <FunctionalRocket />
      <ClassRocket />
    </div>
  );
}
