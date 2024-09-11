import "./repairman.css";
function RepairmanPage() {
  return (
    <div className="flex-center">
      <div className="container">
        <div className="profile">
          <div className="pfp">
            <img src="" alt="pfp" />
            <div className="rating"></div>
            <div className="date"></div>
          </div>
          <div className="master-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum
            porro voluptatibus explicabo ut dolor minus laboriosam! Minus qui
            quasi optio, consectetur repellendus a libero, dolores harum
            inventore ratione odit.
          </div>
          <div className="button-group">
            <button>Поделиться</button>
            <button>Подписаться</button>
            <button>Оставить заявку</button>
          </div>
        </div>
        <div className="reviews"></div>
      </div>
    </div>
  );
}
export default RepairmanPage;
