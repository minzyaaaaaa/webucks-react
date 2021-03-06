import "./List.css";

function List() {
  return (
    <div>
      <header className="header">
        <div className="header__title">WeBucks</div>
        <nav className="header__nav">
          <ul>
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </nav>
      </header>

      <div className="section__coldBrew">
        {/*콜드 브루 타이틀*/}
        <div className="section__title">
          <span>콜드 브루 커피</span>
          <i className="fa-solid fa-mug-hot"></i>
          <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
        </div>

        {/*콜드 브루 메뉴판 */}
        <ul className="section__coldBrew__menu menus">
          <li className="menu">
            <div className="menu__img">
              <img src="/images/coldbrew.jpeg" alt="콜드 브루" />
            </div>
            <span className="menu__text">콜드 브루</span>
          </li>
          <li className="menu">
            <div className="menu__img">
              <img src="/images/coldbrew-latte.jpeg" alt="콜드 브루 라떼" />
            </div>
            <span className="menu__text">콜드 브루 라떼</span>
          </li>
          <li className="menu">
            <div className="menu__img">
              <img
                src="/images/coldbrew-oatlatte.jpeg"
                alt="콜드 브루 오트 라떼"
              />
            </div>
            <span className="menu__text">콜드 브루 오트 라떼</span>
          </li>
          <li className="menu">
            <div className="menu__img">
              <img src="/images/coldbrew-flat.jpeg" alt="돌체 콜드 브루" />
            </div>
            <span className="menu__text">돌체 콜드 브루</span>
          </li>
          <li className="menu">
            <div className="menu__img">
              <img
                src="/images/coldbrew-icecream.jpeg"
                alt="콜드 브루 플로트"
              />
            </div>
            <span className="menu__text">콜드 브루 플로트</span>
          </li>
          <li className="menu">
            <div className="menu__img">
              <img src="/images/coldbrew-shake.jpeg" alt="콜드 브루 몰트" />
            </div>
            <span className="menu__text">콜드 브루 몰트 </span>
          </li>
          <li className="menu">
            <div className="menu__img">
              <img src="/images/coldbrew-cream.jpeg" alt="달고나 콜드 브루" />
            </div>
            <span className="menu__text">달고나 콜드 브루</span>
          </li>
          <li className="menu">
            <div className="menu__img">
              <img src="/images/coldbrew-bottle.jpeg" alt="콜드 브루 보틀" />
            </div>
            <span className="menu__text">콜드 브루 보틀</span>
          </li>
          <li className="menu">
            <div className="menu__img">
              <img src="images/coldbrew-matcha.jpeg" alt="말차 콜드 브루" />
            </div>
            <span className="menu__text">말차 콜드 브루</span>
          </li>
          <li className="menu">
            <div className="menu__img">
              <img
                src="images/coldbrew-vanilacream.jpeg"
                alt="바닐라 크림 콜드 브루"
              />
            </div>
            <span className="menu__text">바닐라 크림 콜드 브루</span>
          </li>
        </ul>
      </div>

      <div className="section__brewed">
        {/* <!-- 브루드 커피 타이틀 --> */}
        <div className="section__title">
          <span>브루드 커피</span>
          <i className="fa-solid fa-mug-hot"></i>
          <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
        </div>
        {/* <!-- 브루드 커피 메뉴 --> */}
        <ul className="section__brewed__menus menus">
          <li className="menu">
            <div className="menu__img">
              <img src="/images/brewed.jpeg" alt="오늘의 커피" />
            </div>
            <span className="menu__text">오늘의 커피</span>
          </li>
          <li className="menu">
            <div className="menu__img">
              <img src="/images/brewed-ice.jpeg" alt="아이스 커피" />
            </div>
            <span className="menu__text">아이스 커피</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
