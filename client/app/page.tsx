'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <nav className="bg-dark text-white w-25 py-3">
      <div className="px-4 text-xl font-weight-bold">Navigation</div>
      <ul className="nav flex-column mt-3">
        <li className="nav-item">
          <Link href="/films">
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/autheurs">
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Content = ({ selected, onSelect }: { selected: string | null; onSelect: (selected: string) => void }) => {
  const [currentContent, setCurrentContent] = useState<string | null>('');

  useEffect(() => {
    if (selected !== null) {
      if (selected === 'films') {
        setCurrentContent('Liste des Films');
      } else if (selected === 'home') {
        setCurrentContent('Bienvenue sur la Page d\'Accueil');
      } else {
        setCurrentContent(null);
      }
    }
  }, [selected]);

  return (
    <div className="flex-grow-1 bg-light p-4">
      {currentContent === '' ? (
        <h1>Waiting for content...</h1>
      ) : (
        <>{currentContent}</>
      )}
      <button onClick={() => onSelect('films')}>Films</button>
      <button onClick={() => onSelect('home')}>Home</button>
    </div>
  );
};

const Page = () => {
  return (
    <div className="d-flex flex-column" style={{ height: '100vh' }}>
      <Dashboard />
      <ContentWrapper />
    </div>
  );
};

const ContentWrapper = () => {
  const [selected, setSelected] = useState<string>('films');

  return <Content selected={selected} onSelect={setSelected} />;
};

export default Page;
