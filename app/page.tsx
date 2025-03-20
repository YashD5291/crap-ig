import LoginForm from './components/LoginForm';

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="col image">
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/Q8X79RK/image.png" alt="instagram" id="image" /></a>
        </div>
        {/*end of image*/}
        <div className="col content">
          <div className="box">
            <div className="title">
              <i className="instagram-logo" aria-label="Instagram"></i>
            </div>
            <LoginForm />
          </div>
          <div className="mini-box">
            <div className="text">Don't have an account? <a href="#">Sign up</a></div>
          </div>
          <div className="download-section">
            <p>Get the app.</p>
            <div className="images">
              <a href="https://imgbb.com/"><img src="https://i.ibb.co/5KyMHpd/appstore.png" alt="appstore" style={{ border: 0 }} /></a>
              <a href="https://imgbb.com/"><img src="https://i.ibb.co/ZTHhz0b/playstore.png" alt="playstore" style={{ border: 0 }} /></a>
            </div>
          </div>
        </div>
        {/*end of content*/}
      </div>
      <footer>
        <ul>
          <li><a href="https://about.meta.com/" target="_blank">Meta</a></li>
          <li><a href="https://about.instagram.com/" target="_blank">About</a></li>
          <li><a href="https://about.instagram.com/blog//" target="_blank">Blog</a></li>
          <li><a href="https://about.instagram.com/about-us/careers" target="_blank">Jobs</a></li>
          <li><a href="https://help.instagram.com/" target="_blank">Help</a></li>
          <li><a href="https://developers.facebook.com/docs/instagram" target="_blank">API</a></li>
          <li><a href="https://privacycenter.instagram.com/policy/" target="_blank">Privacy</a></li>
          <li><a href="https://instagram.com/legal/terms/" target="_blank">Terms</a></li>
          <li><a href="https://instagram.com/explore/locations/" target="_blank">Locations</a></li>
          <li><a href="https://instagram.com/web/lite/" target="_blank">Instagram Lite</a></li>
          <li><a href="https://www.threads.net/" target="_blank">Threads</a></li>
          <li><a href="https://www.facebook.com/help/instagram/261704639352628" target="_blank">Contact Uploading & Non-Users</a></li>
          <li><a href="https://instagram.com/accounts/meta_verified/?entrypoint=web_footer" target="_blank">Meta Verified</a></li>
        </ul>
        <div className="copyright">
          <select aria-label="Switch Display Language" defaultValue="en">
            <option value="af">Afrikaans</option>
            <option value="cs">Čeština</option>
            <option value="da">Dansk</option>
            <option value="de">Deutsch</option>
            <option value="el">Ελληνικά</option>
            <option value="en">English</option>
            <option value="en-gb">English (UK)</option>
            <option value="es">Español (España)</option>
            <option value="es-la">Español</option>
            <option value="fi">Suomi</option>
            <option value="fr">Français</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="it">Italiano</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
            <option value="ms">Bahasa Melayu</option>
            <option value="nb">Norsk</option>
            <option value="nl">Nederlands</option>
            <option value="pl">Polski</option>
            <option value="pt-br">Português (Brasil)</option>
            <option value="pt">Português (Portugal)</option>
            <option value="ru">Русский</option>
            <option value="sv">Svenska</option>
            <option value="th">ภาษาไทย</option>
            <option value="tl">Filipino</option>
            <option value="tr">Türkçe</option>
            <option value="zh-cn">中文(简体)</option>
            <option value="zh-tw">中文(台灣)</option>
            <option value="bn">বাংলা</option>
            <option value="gu">ગુજરાતી</option>
            <option value="hi">हिन्दी</option>
            <option value="hr">Hrvatski</option>
            <option value="hu">Magyar</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="ml">മലയാളം</option>
            <option value="mr">मराठी</option>
            <option value="ne">नेपाली</option>
            <option value="pa">ਪੰਜਾਬੀ</option>
            <option value="si">සිංහල</option>
            <option value="sk">Slovenčina</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
            <option value="vi">Tiếng Việt</option>
            <option value="zh-hk">中文(香港)</option>
            <option value="bg">Български</option>
            <option value="fr-ca">Français (Canada)</option>
            <option value="ro">Română</option>
            <option value="sr">Српски</option>
            <option value="uk">Українська</option>
          </select>
          <span> &copy; 2025 Instagram from Meta </span>
        </div>
      </footer>
    </>
  );
}
