import { CardsGrid } from "../components/CardsGrid";
import { HeroSection } from "../components/HeroSection";
import users from "../data/users.json";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Content Section */}
      <section className="content">
        <div className="container">
          <h2 className="section-title">Доступные профили</h2>
          <CardsGrid users={users} />
          <div className="footer">
            <p className="footer-text">Найдено {users.length} профилей</p>
          </div>
        </div>
      </section>
    </>
  );
}
