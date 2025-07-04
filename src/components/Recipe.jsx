import styles from "./Recipe.module.scss";
import recipeImage from "../assets/images/recette.jpg";

function Recipe() {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={recipeImage} alt="recipe_image"></img>
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center flex-fill`}
      >
        <h3>Salmons & asperges</h3>
      </div>
    </div>
  );
}

export default Recipe;
