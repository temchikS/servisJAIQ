import washMachine from "../images/washingMachine.png";
import fridge from "../images/fridge.png";
import microwave from "../images/microwave.png";
import toaster from "../images/toaster.png";
import pc from "../images/PC.png";
import iron from "../images/iron.png";
import mixer from "../images/mixer.png";
import bake from "../images/bake.png";
import blender from "../images/blender.png";
import conditioner from "../images/conditioner.png";
import vacuumcleaner from "../images/vacuumCleaner.png";
import tv from "../images/TV.png";
import yellowStar from "../images/yellowStar.png";
import fire from "../images/fire.png";
import calendar from "../images/calendar.png";
import search from "../images/search2.png";
import MasterCard from "./miniProfile";
import Footer from "./footer";

function MainPage() {
  const categories = [
    { src: washMachine, label: "Стиральная машина" },
    { src: fridge, label: "Холодильник" },
    { src: microwave, label: "Микроволновка" },
    { src: toaster, label: "Тостер" },
    { src: pc, label: "ПК" },
    { src: iron, label: "Утюг" },
    { src: mixer, label: "Миксер" },
    { src: bake, label: "Духовка" },
    { src: blender, label: "Блендер" },
    { src: conditioner, label: "Кондиционер" },
    { src: vacuumcleaner, label: "Пылесос" },
    { src: tv, label: "Телевизор" },
  ];

  return (
    <>
      <main>
        <section className="order-section">
          <h1>Device Doctor</h1>
          <p>Ремонт техники</p>
          <button style={{ borderRadius: "100px" }}>Заказать</button>
        </section>
        <section className="categories-masters flex-center">
          <div className="container cm-cont">
            <div className="search">
              <div className="search-tag">
                <img src={yellowStar} alt="" />с высокой оценкой
              </div>
              <div className="search-tag">
                <img src={fire} alt="" />
                топы
              </div>
              <div className="search-tag">
                <img src={calendar} alt="" />
                по дате регистрации
              </div>
              <img src={search} width={20} height={20} alt="" />
            </div>
            <div className="categories">
              <h1 style={{ fontWeight: "semiBold" }}>Категории</h1>
              {categories.map((category, index) => (
                <div className="category-item" key={index}>
                  <img src={category.src} alt={category.label} />
                  <p>{category.label}</p>
                </div>
              ))}
            </div>
            <div className="masters">
              <MasterCard
                name="Коля"
                categories={["компьютеров", "микроволновок", "холодильников"]}
                rating={4}
                startDate="2024-04-20"
                description="Опытный мастер по ремонту, специализирующийся на ремонте компьютеров, микроволновок и телевизоров. Обладая многолетним опытом, я предлагаю качественные услуги по диагностике и устранению неисправностей различных устройств."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default MainPage;
