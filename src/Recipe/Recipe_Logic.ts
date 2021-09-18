import { useState, useCallback } from "react";
import { GetItem, RemoveItem } from "../utils/store";
import { IAddRecipeData, IError, IRecipe } from "./IRecipe";
import { AddToExistingItem } from "../utils/store";
import { SanitizeString, SanitizeWord } from "../utils/stringFormatter";
import generateId from "../utils/generateId";

export const defaultKeys = {
  EditPage: "edit",
  AddPage: "add",
  ViewPage: "view"
}

const RecipeHook = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | undefined>();
  const [editData, setEditData] = useState<IRecipe | undefined>();
  const [DataToDisplay, setDataToDisplay] = useState<string>("");

  const handleDelete = (id: number) => {
    const newList = RemoveItem(id);
    setRecipes(newList);
    setSelectedRecipe(undefined);
    setDataToDisplay("");
  }

  const handleEdit = (data: IRecipe) => {
    setEditData(data);
    setDataToDisplay(defaultKeys.EditPage)
  }

  const openViewPage = (recipe: IRecipe) => {
    setDataToDisplay(defaultKeys.ViewPage)
    setSelectedRecipe(recipe);
  }

  const closeViewPage = () => {
    setDataToDisplay("");
    setSelectedRecipe(undefined);
  }

  const GetItemsFromStore = () => {
    const dataString = GetItem();
    if (!dataString) return []; //if no item
    return JSON.parse(dataString);
  }

  const closeAddEditPage = (recipe: IRecipe) => {
    openViewPage(recipe); //open view page after editing or adding new recipe
  }
  const closeButton = () => {
    setDataToDisplay("");
    setSelectedRecipe(undefined);
    setEditData(undefined);
  }

  const showAddRecipePage = () => {
    setSelectedRecipe(undefined);
    setEditData(undefined);
    setDataToDisplay(defaultKeys.AddPage)
  }

  const initialState = useCallback(
    () => ({
      id: generateId(),
      name: "",
      ingredients: [],
      ingredientText: ""
    }),
    [],
  );

  const initialErrorState = useCallback(
    () => ({
      name: undefined,
      ingredients: undefined
    }),
    [],
  );

  const [recipe, setRecipe] = useState<IAddRecipeData>(initialState());
  const [error, setError] = useState<IError>(initialErrorState());

  const onSubmit = () => {
    // check correctness of recipe fields
    const name = SanitizeWord(recipe.name);
    const ingredientText = SanitizeWord(recipe.ingredientText);
    const ingredients = ingredientText.split(",").filter((str: string) => str.length > 1);

    //Error check
    if (!name || !ingredientText) {
      const errors: IError = initialErrorState();
      if (!recipe.name) errors.name = "Required";
      if (recipe.name && !name) errors.name = "Invalid Name";
      if (!recipe.ingredientText) errors.ingredients = "Required";
      if (recipe.ingredientText && !ingredientText) errors.ingredients = "Invalid Ingredients";
      setRecipe({ ...recipe, name, ingredientText, ingredients });
      return setError({ ...error, ...errors })
    }

    const data: IRecipe = { id: recipe.id, name, ingredients };

    const newData = AddToExistingItem(data); // add to store
    setRecipes([...newData]); // update UI
    data && setEditData(undefined); //remove data from state if editing
    closeAddEditPage(data); // close page and open view
  }

  const handleNameChange = (e: any) => {
    return setRecipe({ ...recipe, [e.target.name]: SanitizeString(e.target.value) })
  }

  const handleBlur = (key: string) => {
    setError({ ...error, [key]: undefined })
  }

  const handleKeyPress = (e: any) => {
    if (e.which === 13) {
      e.preventDefault();
      setError({ ...error, [e.target.name]: "Enter key not allowed" });
    }
  }

  const handleIngredientChange = (e: any) => {

    if (!e.target.value) return setRecipe({ ...recipe, ingredients: [], ingredientText: "" }); // if no ingredient was entered, return empty
    const ingredients = e.target.value.split(",").filter((str: string) => str.length > 1).map((str: string) => SanitizeWord(str)); // create ingredients array, remove empty strings and unwanted characters
    return setRecipe({ ...recipe, ingredients, ingredientText: SanitizeString(e.target.value) })
  }

  return {
    recipes,
    setRecipes,
    selectedRecipe,
    setSelectedRecipe,
    editData,
    setEditData,
    DataToDisplay,
    setDataToDisplay,
    handleDelete,
    handleEdit,
    openViewPage,
    closeViewPage,
    GetItemsFromStore,
    closeAddEditPage,
    closeButton,
    showAddRecipePage,
    initialState,
    initialErrorState,
    recipe,
    setRecipe,
    error,
    setError,
    onSubmit,
    handleNameChange,
    handleBlur,
    handleKeyPress,
    handleIngredientChange
  }

}

export default RecipeHook;