import { Box } from "@mui/material";
import "../scss/categories.styles.scss";

const CategoryCard = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => {
        return (
          <div key={id} className="category-container">
            <Box
              className="background-image"
              sx={{ backgroundImage: `url(${imageUrl})` }}
            ></Box>
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCard;
