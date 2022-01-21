import React from "react";
import Navbar from "../Searchbar/Navbar";

const Home = () => {
    return (
        <main className="dark page">
          <Navbar />
          <header className="carousel">
            {/* <WorldNewsCarousel trendingItems={trendingItems} /> */}
          </header>
          <section className="page-content">
            <div className="page-wrapper" data-testid="feed-wrapper">
              {/* {errors ? (
                <p className="feed-error">Sorry, something went wrong</p>
              ) : status === "pending" ? (
                <Loading />
              ) : (
                <Feed
                  posts={posts}
                  handleLoadMoreClick={handleLoadMoreClick}
                  currentSubreddit={currentSubreddit}
                  path={path}
                />
              )} */}
              {/* <TrendingSidebar /> */}
            </div>
          </section>
        </main>
      );
}

export default Home;