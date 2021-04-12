import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { memo } from 'react';
const Graph = ({ selected }) => {
  const interval = {
    M5: 5,
    M15: 15,
    M30: 30,
    H1: 60,
    H2: 120,
    H4: 240,
    H6: 360,
    H12: 720,
    D1: 'D',
    D3: '2D',
  };

  return (
    <TradingViewWidget
      width={1200}
      studies_overrides={'"moving average exponential.length": "20"'}
      studies={['BB@tv-basicstudies', 'MASimple@tv-basicstudies']}
      interval={interval[selected?.column]}
      symbol={selected ? selected.symbol : 'AAPL'}
      theme={Themes.DARK}
      locale='fr'
    />
  );
};
export default memo(Graph);
