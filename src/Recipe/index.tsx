import { useEffect } from "react";
import { Button, Container, Header, Heading1, ImageButton, Paragraph, Wrapper } from "../styles";
import AddRecipe from "./AddRecipe";
import ViewRecipeDetails from "./ViewRecipeDetails";
import { CloseIcon } from "../utils/assets";
import RecipeHook from "./Recipe_Logic";

const defaultKeys = {
  EditPage: "edit",
  AddPage: "add",
  ViewPage: "view"
}

const RecipeList = () => {
  const { setRecipes, DataToDisplay, GetItemsFromStore, showAddRecipePage, closeButton, recipes, selectedRecipe, openViewPage, handleEdit, handleDelete, closeViewPage } = RecipeHook();

  useEffect(() => {
    setRecipes(GetItemsFromStore());
    return () => {
      setRecipes([]);
    }
  }, [GetItemsFromStore, setRecipes]);

  return (
    <Container>
      <Header padding="10px 15px">
        <Wrapper justifyContent="center">
          <Heading1 className="title">
            Recipe List
          </Heading1>
        </Wrapper>
        <Wrapper justifyContent={"end"} flexDirection="row" alignItems="center">
          {defaultKeys.AddPage !== DataToDisplay && <Button type="button" onClick={() => showAddRecipePage()}>Add</Button>}
          {[defaultKeys.EditPage, defaultKeys.AddPage].includes(DataToDisplay) && <ImageButton marginLeft="15px" color="#e0fbfc" onClick={() => closeButton()}><CloseIcon /></ImageButton>}
        </Wrapper>
      </Header>
      <Wrapper flexDirection="row">
        <Wrapper className={Object.values(defaultKeys).includes(DataToDisplay) ? "halfwidth" : "fullwidth"}>
          <Wrapper overflowY="auto">
            {recipes.map((recipe) => (
              <Wrapper key={recipe.id} backgroundColor={selectedRecipe?.id === recipe.id ? "#98c1d9" : ""} paddingY="20px" onClick={() => recipe.name !== selectedRecipe?.name && openViewPage(recipe)} cursor="pointer" className="list" flexDirection="row" borderBottom="1px solid #98c1d9" padding="5px 15px" justifyContent="space-between">
                <Paragraph>{recipe.name}</Paragraph>
              </Wrapper>
            ))}
          </Wrapper>
        </Wrapper>
        <Wrapper backgroundColor="#e0fbfc" position="fixed" right="0" width="50%" mobileWidth="100%" className={Object.values(defaultKeys).includes(DataToDisplay) ? "show" : "hide"}>
          {defaultKeys.ViewPage === DataToDisplay && <ViewRecipeDetails data={selectedRecipe} handleEdit={handleEdit} handleDelete={handleDelete} closePage={closeViewPage} />}
          {[defaultKeys.EditPage, defaultKeys.AddPage].includes(DataToDisplay) && <AddRecipe />}
        </Wrapper>
      </Wrapper>
    </Container>
  )
}

export default RecipeList;
