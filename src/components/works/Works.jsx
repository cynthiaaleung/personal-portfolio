import "./works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h2>Title</h2>
                <p>EatsyPeasy is a single-page application to help you and your friends choose where to eat!
                </p>
                <p>
                Answer 3 simple questions to generate a customized selection of restaurants, and even an option to send a poll to your friends as well!
                </p>
                <a href="https://github.com/cynthiaaleung/EatsyPeasy-frontend">GitHub Link</a>
              </div>
            </div>
            <div className="right">
              <img src="assets/works-EatsyPeasy.png" alt="Eatsypeasy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
