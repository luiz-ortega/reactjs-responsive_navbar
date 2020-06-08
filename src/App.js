import React from 'react';
import NavBar from './components/NavBar';
import { MdExtension } from 'react-icons/md';
import { MdInfo } from 'react-icons/md';

const items = [
  { label: 'Logic', icon: <MdExtension /> },
  { label: 'Info', icon: <MdInfo /> },
];

function App() {
  return <NavBar items={items} />;
}

export default App;
