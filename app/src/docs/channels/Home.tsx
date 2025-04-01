import { Page } from "../_types/PageTypes";

const Home: Page = {
  info: {
    slug: "home",
    title: "Home",
    title_display: "Home",
    summary: "Welcome to the home page of our channel.",
    pageType: "channel",
  },
  content: [
    <div key="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our channel.</p>
    </div>
  ],
}

export default Home;