import { createContext, ReactNode, useState } from "react";
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number; 
    currentExperience: number; 
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge; 
    startNewChallenge: () => void; 
    levelUp: () => void;
    resetChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
      const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
      const chanllenge = challenges[randomChallengesIndex];

      setActiveChallenge(chanllenge);
  }

  function resetChallenge() {
      setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{ 
          level, 
          currentExperience, 
          experienceToNextLevel,
          challengesCompleted,
          activeChallenge, 
          startNewChallenge, 
          levelUp,
          resetChallenge,
        }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
