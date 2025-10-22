import { useState } from 'react';
import VIPSelector from '../VIPSelector';

export default function VIPSelectorExample() {
  const [level, setLevel] = useState<any>("NONE");
  
  return (
    <VIPSelector 
      selectedLevel={level}
      onLevelChange={setLevel}
    />
  );
}
