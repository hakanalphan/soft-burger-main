import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink, Badge } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/actions/CartAction";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

const CartSummary = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const removeFromCart = (product) => {
    dispatch(cartActions.removeFromCart(product));
    alertify.error(product.productName + " sepetten silindi!", 2);
  };

  const renderEmpty = () => (
    <NavItem>
      <NavLink>Sepetiniz boş</NavLink>
    </NavItem>
  );

  const renderSummary = () => (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Sepetiniz
      </DropdownToggle>
      <DropdownMenu right>
        {cartItems.map((cartItem) => (
          <DropdownItem key={cartItem.product.id}>
            <Badge onClick={() => removeFromCart(cartItem.product)} color="danger">-</Badge>
            {cartItem.product.productName}
            <Badge color="success">{cartItem.quantity}</Badge>
          </DropdownItem>
        ))}

        <DropdownItem divider />
        <DropdownItem><Link to={"/cart"}>Sepete Git</Link></DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );

  return (
    <div>
      {cartItems.length > 0 ? renderSummary() : renderEmpty()}
    </div>
  );
};

export default CartSummary;