import Drawer from "../utils/drawer";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
  constructor(content) {
    this.Content = content;
  }
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.Content.innerHTML = await page.render();
    await page.afterRender();
  }
};
 
export default App;