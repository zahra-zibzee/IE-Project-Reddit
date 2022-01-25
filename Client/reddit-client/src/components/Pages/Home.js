import React from "react";
import Navbar from "../Searchbar/Navbar";

const Home = () => {
  document.body.style.backgroundColor = "rgba(172, 183, 185, 0.568)";
    return (
        <main className="dark page">
          <Navbar navPage="home" />
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