const GIFTS = [
  { id: 'rose_01', name: "Красная роза #45", price: 10, img: "🌹" },
  { id: 'sparkle_02', name: "Искры #102", price: 25, img: "✨" },
  { id: 'diamond_03', name: "Голубой бриллиант #01", price: 50, img: "💎" },
];

function App() {
  useEffect(() => {
    // Сообщаем Telegram, что приложение готово
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  const handleBuy = (gift) => {
    // Эта функция отправляет данные обратно в ваш bot.js
    const data = JSON.stringify({
      action: 'buy',
      item_id: gift.id,
      item_name: gift.name,
      price: gift.price
    });
    
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData(data);
      window.Telegram.WebApp.close(); // Закрываем приложение, чтобы в чате появилось окно оплаты
    }
  };

  return (
    <div style={{ backgroundColor: '#1c1c1d', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Магазин Подарков</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {GIFTS.map(gift => (
          <div key={gift.id} style={{ backgroundColor: '#2c2c2e', padding: '15px', borderRadius: '15px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px' }}>{gift.img}</div>
            <h3 style={{ margin: '10px 0' }}>{gift.name}</h3>
            <p style={{ color: '#007aff', fontWeight: 'bold' }}>{gift.price} ⭐</p>
            <button 
              onClick={() => handleBuy(gift)}
              style={{ backgroundColor: '#007aff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 'bold', width: '100%', cursor: 'pointer' }}
            >
              Купить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
