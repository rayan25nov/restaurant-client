import React, { useState } from "react";

function AddToCartModal(props) {
  const [quantity, setQuantity] = useState(1);

  // Handle the quantity change
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  // Handle adding the item to the cart
  const handleAddToCart = () => {
    // You can implement logic to add the selected item and quantity to the cart here.
    // For now, let's log the selected item and quantity to the console.
    console.log("Item:", props.item);
    console.log("Quantity:", quantity);

    // Close the modal
    props.onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add to Cart</h2>
        <p>{props.item.caption}</p>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={props.onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default AddToCartModal;
