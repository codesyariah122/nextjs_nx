import * as React from 'react';
import { browser, isMobile, device } from '@/helpers/index';
/* eslint-disable-next-line */
export interface HomeProps {}

const getTextContentOnlyFromHtml = (html: any) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const walker = document.createTreeWalker(
    doc.body,
    NodeFilter.SHOW_TEXT,
    null
  );
  const texts = [];
  let node;
  while ((node = walker.nextNode())) {
    texts.push(node.nodeValue);
  }
  return texts;
};

export function Home(props: HomeProps) {
  const [vendor, setVendor] = React.useState('');
  const [model, setModel] = React.useState('');

  React.useEffect(() => {
    if (device.vendor !== 'Apple') console.log('This device not found');
    setVendor(device.vendor);
    setModel(device.model);
    console.log(browser);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full h-screen bg-[#cecdce]">
        <ul>
          <li>Vendor : {vendor}</li>
          <li>Model : {model}</li>
          <ol>
            <li>{browser.name + '.' + browser.version}</li>
          </ol>
        </ul>
      </div>
    </div>
  );
}

export default Home;
