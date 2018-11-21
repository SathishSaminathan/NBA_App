import React from "react";

import NewsSlider from "../Widgets/NewsSlider/slider";
import NewsList from "../Widgets/NewsList/news_list";

const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={3}
        amount={12}
        settings={{
          dots: false
        }}
      />
      <NewsList 
        type="card"
        loadMore={true}
        start={3}
        amount={3}
      />
    </div>
  );
};

export default Home;
