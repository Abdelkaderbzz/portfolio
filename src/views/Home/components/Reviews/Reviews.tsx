import { AiFillStar } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Review {
  clientName: string;
  job: string;
  photo: any;
  content: string;
  title: string;
}

const reviews: Review[] = [
  {
    clientName: "James Gouse",
    job: "Graphic Designer",
    photo: (
      <BsPersonCircle
        style={{ width: "50px", height: "50px", opacity: "80%" }}
      />
    ),
    content:
      "op notch development by a very talented team. Spot on communication and on-time delivery. Highly recommended.",
    title: "Amazing Work",
  },
  {
    clientName: "Tiana Philips",
    job: "Photographer",
    photo: (
      <BsPersonCircle
        style={{ width: "50px", height: "50px", opacity: "80%" }}
      />
    ),
    content:
      "All good as always Cameron was responsive, super professional & proactive, thank you!",
    title: "this man is incredible",
  },
  {
    clientName: "Iyad Sebai",
    job: "entrepreneur",
    photo: (
      <BsPersonCircle
        style={{ width: "50px", height: "50px", opacity: "80%" }}
      />
    ),
    content:
      "It was amazing working with these guys! Our project had some very tricky requirements ",
    title: "that is awesome work",
  },
  {
    clientName: "Ayoub Jemai",
    job: "youtuber",
    photo: (
      <BsPersonCircle
        style={{ width: "50px", height: "50px", opacity: "80%" }}
      />
    ),
    content: "Great coding! Fast and attentive to our needs Thank you",
    title: "Excellent",
  },
];
const Reviews = () => {
  const IconRepeat = () => {
    const icons = [];
    for (let i = 0; i < 5; i++) {
      icons.push(<AiFillStar key={i} />);
    }
    return <div className="number-stars">{icons}</div>;
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      // {
      //   breakpoint: 1100,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="review-container">
      <h5 className="review-title">recommendations</h5>
      <p className="review-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam alias
        reiciendis unde fugit iure voluptatem nam.
      </p>
      <div className="carousel-reviews">
        <Slider {...settings}>
          {reviews.map((item, index) => {
            return (
              <div key={index} className="review-content">
                <div className="reviewer-paragraph">
                  {IconRepeat()}
                  <h2>{item.title}</h2>
                  <p>"{item.content}"</p>
                </div>
                <div className="reviewer">
                  {item.photo}
                  <p>
                    <span style={{ color: "var(--text)" }}>
                      {item.clientName}
                    </span>
                    {item.job}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
