import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/29154104?s=460&u=a8c6b1483c305db8bdbfc697ab3e1b5de644511a&v=4" alt="Cristiano Pereira" />

            <div>
                <strong>Cristiano Pereira</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                    
                </p>
            </div>
        </div>
    );
}