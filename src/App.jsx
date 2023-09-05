import iconFB from './assets/icon-fb.png';
import iconYT from './assets/icon-youtube.png';
import bennerImg from './assets/coffee3.jpg';
import './style2.css'

function App() {

  return (
    <>
      <div id="banner">
        <img src={bennerImg} style={{ 'zIndex': '-5' }} width="100%" height="100vh" alt="cf" />
        <nav>
          <a href="./index.html">KyrieHaveGoodDay</a>
          <a href="./about.html">關於我</a>
          <a href="./contact.html">連絡我</a>
          <p>冬天即將來臨</p>
          <hr />
          <h1>一杯暖咖啡</h1>
        </nav>
      </div>
      <section id="news">
        <div className="new-box">
          <div id="news-left"></div>
          <h3>ＢＯＮＪＯＵＲ ＯＮＬＩＮＥ ＳＨＯＰ</h3>
          <hr />
          <h1>夏日微風沁禮</h1>
          <p>2020關懷疫情受災花農-母親節康乃馨贈送活動
            [朋廚花現小農-用愛送馨花香勝疫]
            你知道嗎？台灣土地今年孕育出的花田，燎原廣闊格外盛開！
            你知道嗎？台灣土地今年孕育出的花朵，色澤鮮豔格外靈活！</p>
          <a href="#" className="button">連結</a>
        </div>
        <div className="new-box">
          <div id="news-right"></div>
          <h3>BONJOUR NEWS</h3>
          <hr />
          <h1>2020關懷疫情受災花農活動</h1>
          <p>Summer Breeze present
            找一個好日子，為許久不見的朋友送上一份微風般的禮物。
            Find a good day and give a breeze-like gift to a friend you haven't seen for a long time.</p>
          <a href="#" className="button">連結</a>
        </div>
      </section>

      <section id="box">
        <h3>
          KyrieHaveGoodDay
        </h3>

      </section>

      <section id="content">
        <h1>一聲問候，愛上美味關係！</h1>
        <div>
          <a href="#" id="about"><span>關於我</span></a>

          <a href="#" id="contact"><span>連絡我</span></a>
        </div>
      </section>

      <iframe id="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.303049714139!2d121.22220631542602!3d24.955801984009067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34682249c750d347%3A0x8cdb28de62e89e3d!2z6LWr57a16Zu76IWm6Kit6KiI5Z-56KiT5a246ZmiLeS4reWjouWtuOmZog!5e0!3m2!1szh-TW!2stw!4v1599569197196!5m2!1szh-TW!2stw"
        width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false"
        tabIndex="0"></iframe>
      <footer>
        <div id="icon">
          <h2><a href="./index2.html">咖啡</a></h2>
          <a href="#"><img src={iconFB} alt="fb" /></a>
          <a href="#"><img src={iconYT} alt="yt" /></a>
          <p>&copy;2023 KyrieHaveGoodDay</p>
        </div>
      </footer>

    </>
  )
}

export default App
