import { Navbar } from "../../components/navbar";
import "./info.css";

export const Info = () => {
  const userType = localStorage.getItem("guest_type");

  return (
    <div className="App">
      <Navbar />
      <div className="image-container">
        <img id="header-image" src="floral_header4.jpg" alt="flowers" />
      </div>
      <div id="container">
        <h1>General Day Information</h1>
        <h4>
          If there is anything not answered clearly here, please contact Nathan
          or Samantha directly
        </h4>
        <h2>Itinerary</h2>
        <ul>
          {userType === "all" && (
            <div>
              <li>10:30 - Begin to arrive at ceremony venue</li>
              <li>11:00 - Ceremony begins</li>
              <li>11:30 - Photos at the church</li>
              <li>12:00 - Depart from Rutland Water</li>
              <li>13:00 - Arrive at Dovecote anytime after one</li>
              <li>15:00 - Wedding Breakfast begins</li>
              <li>17:00 - Finish the breakfast, garden games and relax</li>
            </div>
          )}
          <li>19:00 - Reception begins</li>
          <li>19:30 - First Dance and then cake cut</li>
          <li>22:00 - Watch Nathan probably be an idiot</li>
          <li>00:00 - It's all over, go home!</li>
        </ul>
        <h2>Dress Code</h2>
        {userType === "all" ? (
          <p>
            The ceremony and breakfast is formal wear only. The evening is smart
            casual should you wish to change. We ask you avoid a green or navy
            suit, purple dresses and of course white! Samantha would also love
            if you shopped eco-consciously, so second-hand or from your own
            wardrobe.
          </p>
        ) : (
          <p>
            The evening is smart casual wear. However, we will be dressed up so
            feel free to join us! Samantha would also love if you shopped
            eco-consciously, so second-hand or from your own wardrobe.
          </p>
        )}
        {userType === "all" && (
          <div>
            <h1>Menu</h1>
            <h2>Starters</h2>
            <ul>
              <li>Tomato and Basil Soup with Crusty Bread (GF)</li>
              <li>Smoked Salmon Salad (GF)</li>
              <li>
                Grilled Halloumi Fries with Rocket and Sweet Chilli Sauce (GF)
              </li>
            </ul>
            <h2>Mains</h2>
            <h3>All served with roast potatoes and seasonal vegetables</h3>
            <ul>
              <li>Roast Beef with Yorkshire Pudding (can be GF on req)</li>
              <li>Herb Crusted Salmon (GF)</li>
              <li>Vegetarian Lasagna</li>
            </ul>
            <h2>Desert</h2>
            <ul>
              <li>Apple & Blackberry Crumble Served with Ice Cream or Cream</li>
              <li>Chocolate Profiterole Stack</li>
              <li>Salted Caramel Brownie with Ice Cream </li>
            </ul>
          </div>
        )}
        <h2>Evening Food</h2>
        <p>
          In the evening, we have a pizza van. There will be a steady supply of
          pizza that you can help yourself to at any point all evening.
        </p>
        <h2>Gifts</h2>
        <p>
          We don't want anything, other than for you to come and celebrate with
          us! But if you would like to gift us something we would appreciate a
          contribution to our honeymoon to Australia.
        </p>
        <h2>Parking at Dovecote</h2>
        <p>
          Dovecote have indicated it is totally acceptable to leave your car on
          site location in the evening. You can the return the next day and
          collect by looking at their opening hours.
        </p>
        <h2>Local Recommended Hotels</h2>
        <p>
          Below are a few local hotels that you can look into should you need to
          be travelling.
          <ul>
            <li>Holiday Inn Express Kettering (NN14 1UD)</li>
            <li>Holiday Inn Corby (NN18 8ET)</li>
            <li>Hampton by Hilton Corby (NN17 4AP)</li>
            <li>Best Western Corby (NN17 2AE)</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Info;
