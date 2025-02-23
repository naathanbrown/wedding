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
              <li>11:30 - Photos and memories at the church</li>
              <li>12:00 - Depart from Rutland Water</li>
              <li>13:00 - Arrive at Dovecote anytime after this point</li>
              <li>15:00 - Wedding Breakfast is begins</li>
              <li>17:00 - Finish the breakfast, garden game and relax!</li>
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
            suit, purple dresses and of course white!
          </p>
        ) : (
          <p>
            The evening is smart casual wear. However, we will be dressed up so
            feel free to join us!
          </p>
        )}
        <h2>Evening Food</h2>
        <p>
          The food in the evening being served is from a local pizza van. There
          will be a steady supply that you can help yourself to at any point all
          evening.
        </p>
        <h2>Gifts</h2>
        <p>
          Whilst we love the thought we are not accepting gifts for this
          wedding. Should you wish to gift something we ask if you could make a
          contribution to our honeymoon which will be to Australia. There will
          be a collection box on the evening for this.
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
