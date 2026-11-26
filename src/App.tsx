/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Footer from './components/Footer';
import HeroCover from './components/HeroCover';
import Navbar from './components/Navbar';
import PhilosophyAndAbout from './components/PhilosophyAndAbout';
import ProcessAndAdvantages from './components/ProcessAndAdvantages';
import SectorsAndTerms from './components/SectorsAndTerms';
import ServicesAndCatalogue from './components/ServicesAndCatalogue';
import WhatsAppOrderBox from './components/WhatsAppOrderBox';

export default function App() {
  const [orderText, setOrderText] = useState('');
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const handleAddItemToOrder = (itemText: string) => {
    setAddedItems((prev) => (prev.includes(itemText) ? prev : [...prev, itemText]));
    setOrderText((prev) => {
      const line = `- ${itemText} (Qty: )`;
      if (!prev.trim()) return line;
      if (prev.includes(itemText)) return prev;
      return `${prev.trimEnd()}\n${line}`;
    });
  };

  const handleClearCatalogBadges = () => {
    setAddedItems([]);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#141414]">
      <Navbar />
      <main>
        <HeroCover />
        <PhilosophyAndAbout />
        <ServicesAndCatalogue
          onAddItemToOrder={handleAddItemToOrder}
          addedItems={addedItems}
        />
        <ProcessAndAdvantages />
        <SectorsAndTerms />
        <WhatsAppOrderBox
          orderText={orderText}
          onOrderTextChange={setOrderText}
          onClearCatalogBadges={handleClearCatalogBadges}
        />
      </main>
      <Footer />
    </div>
  );
}

