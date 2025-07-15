const fs = require('fs');
const path = require('path');

// Читаем исходные данные
const rawData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/data.json'), 'utf8'));

// Преобразуем в нужный формат
const users = rawData.map((item, index) => {
  const who = item.find(([question]) => question === "Кто вы?")?.[1] || "";
  const lookingFor = item.find(([question]) => question === "Кого вы ищите?")?.[1] || "";
  const telegram = item.find(([question]) => question === "Ваш ТГ аккаунт")?.[1] || "";
  
  return {
    id: index + 1,
    who: who.trim(),
    lookingFor: lookingFor.trim(),
    telegram: telegram.trim()
  };
});

// Записываем в users.json
fs.writeFileSync(
  path.join(__dirname, 'src/data/users.json'), 
  JSON.stringify(users, null, 2)
);

console.log(`✅ Преобразовано ${users.length} профилей`);
console.log('📁 Данные сохранены в src/data/users.json'); 