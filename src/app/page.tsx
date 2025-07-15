import { CardsGrid } from "../components/CardsGrid";
import users from "../data/users.json";

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <div className="header">
          <h1 className="title">GraphTinder</h1>
          <p className="subtitle">
            Найди своего идеального партнёра для проектов и коллабораций в Москве
          </p>
        </div>
        
        <CardsGrid users={users} />
        
        <div className="footer">
          <p>Найдено {users.length} профилей</p>
        </div>
      </div>
    </main>
  );
}
