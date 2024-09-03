import { useState } from "react";
import "./App.css";
import ListGroup from "./ListGroup";
import Alert from "./Alert";
import Button from "./Button";
import Like from "./Like";
import Message from "./Message";
import Updating from "./Updating";
import NestedObjects from "./NestedObjects";
import NavBar from "./NavBar";
import Cart from "./Cart";
import ExpandableText from "./ExpandableText";

function Apps() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });
  const fullName = person.firstName + " " + person.lastName;
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  let item = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setSetAlertVisiblity] = useState(false);

  return (
    <>
      <div>
        <ListGroup
          item={item}
          heading="Cities"
          onSelectItem={handleSelectedItem}
        />
      </div>
      {alertVisible && (
        <Alert onClose={() => setSetAlertVisiblity(false)}>
          <h3>Hello World...!</h3>
        </Alert>
      )}
      <Button color="danger" onclick={() => setSetAlertVisiblity(true)}>
        Start
      </Button>
      <Like onClick={() => console.log("Clicked")} />
      <br />
      <p>{fullName}</p>
      <br />
      <Message />
      <br />
      <Updating />
      <NestedObjects />
      <br />
      <NavBar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClear={() => {
          setCartItems([]);
        }}
      />
      <br />
      <ExpandableText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
        obcaecati perspiciatis iusto, facilis sit ratione vero aut nulla maiores
        eos aperiam nihil accusantium quam, voluptas illo nostrum amet
        aspernatur cupiditate? Perspiciatis laboriosam, repellat quod minus nisi
        sapiente consequatur esse voluptatibus odit corrupti suscipit cupiditate
        qui sunt cumque fuga ut nostrum amet reiciendis possimus dolorem. Ad
        voluptas qui nam inventore voluptatem! Officia exercitationem autem non
        sapiente asperiores laborum porro amet? Quibusdam natus eaque atque.
        Mollitia quam explicabo adipisci, voluptatibus non vel qui aliquam
        molestias, quos esse, obcaecati blanditiis sint quas excepturi!
        Doloribus dolorem necessitatibus molestiae et, laudantium, alias
        exercitationem aperiam adipisci ut culpa placeat nihil hic dicta,
        deserunt dolore. Inventore saepe deserunt tempora odit consectetur fuga
        perferendis. Delectus illo nihil expedita. Reiciendis consectetur
        deserunt quos nihil maxime earum quas corporis eaque in illum magni
        accusantium, explicabo voluptate voluptatibus provident architecto
        tempore odio fugit numquam obcaecati rem necessitatibus cum dolorum!
        Rerum, ipsa.
      </ExpandableText>
    </>
  );
}

export default Apps;
