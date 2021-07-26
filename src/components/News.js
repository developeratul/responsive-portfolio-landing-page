import SectionTitle from "./SectionTitle"
import NewsData from "../data/NewsData"

const News = () => {
  return (
    <section className="latest_news_section" id="blog">
      <SectionTitle
        title="Latest News"
        desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
      />

      <div className="latest_news_content_wrapper">
        {NewsData.map((news, index) => {
          return (
            <div className="single_news" key={index} style={{ background: `url(${news.img})` }}>
              <div className="overlay">
                <div className="news_desc">
                  <p>{news.title}</p>
                  <h2>{news.desc}</h2>
                  <div className="news_button">
                    <a href={news.link} target="_blank" rel="noopener noreferrer">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default News
