import img1 from "../../assets/images/tour-1.jpeg";
import img2 from "../../assets/images/tour-2.jpeg";
import img3 from "../../assets/images/tour-3.jpeg";
import img4 from "../../assets/images/tour-4.jpeg";
import "./tour.styles.css";
const tours = [
  {
    country: "China",
    date: { day: 9, month: "Septmber", year: 2020 },
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    days: 6,
    imgUrl: img1,
    price: 2100,
  },
  {
    country: "Indonesia",
    date: { day: 10, month: "October", year: 2020 },
    title: "Tour into wilds",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    days: 11,
    imgUrl: img2,
    price: 1100,
  },
  {
    country: "Hong Kong",
    date: { day: 26, month: "May", year: 2020 },
    title: "Explore the tours",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    days: 5,
    imgUrl: img3,
    price: 3100,
  },
  {
    country: "Kenya",
    date: { day: 11, month: "December", year: 2020 },
    title: "Into the woods",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    days: 5,
    imgUrl: img4,
    price: 3500,
  },
];
const Tours = () => {
  return (
    <div className="tours-container" id="tours">
      <h1 className="special-header">
        Featured <span>Tours</span>
      </h1>
      <div className="tours-box container ">
        {tours.map((tour) => {
          const { country, date, title, text, days, imgUrl, price } = tour;
          return (
            <div className="tour-card">
              <div className="image">
                <img src={imgUrl} alt={title} />
                <div className="date">{`${date.month} ${date.day}th, ${date.year}`}</div>
              </div>
              <div className="tour-details">
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="info">
                  <div>
                    <i class="fas fa-map"></i>
                    <span>{country}</span>
                  </div>
                  <div>{days} days</div>
                  <div> From $ {price}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
