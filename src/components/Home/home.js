import React from 'react';

import NewsSlider from '../Widgets/NewsSlider/slider'

const Home = () => {
    return (
        <div>
            <NewsSlider
                type="featured"
                start={3}
                amount={12}
                settings={{
                    dots:true
                }}
            />
        </div>
    );
};

export default Home;