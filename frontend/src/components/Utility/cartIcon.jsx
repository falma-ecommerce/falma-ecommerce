import React, {useContext} from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../../contexts/CartContext";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 1,
    top: 3,
    // border: `2px solid ${theme.palette.background.paper}`,
    padding: '8px 4px',
    fontSize: "16px"
  },
}));

export default function CartIcon() {
  const { totalQuantities } = useContext(CartContext);
  return (
    <IconButton aria-label="cart" style={{color: "black" }}>
      <StyledBadge badgeContent={totalQuantities} color="secondary">
        <ShoppingCartIcon style={{fontSize:"2rem"}}/>
      </StyledBadge>
    </IconButton>
  );
}
