import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <h1>GitHub OAuth Test</h1>
      <a href='/api/auth/login'>Login with GitHub</a>
    </div>
  );
}
