import { Dispatch, SetStateAction } from "react";

export interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
}

export interface IAddRecipeData extends IRecipe {
  ingredientText: string;
}

export interface IAddRecipeProps {
  setRecipes: Dispatch<SetStateAction<IRecipe[]>>,
  editData: IRecipe | undefined,
  setEditData: any;
  closeAddEditPage: (recipe: IRecipe) => void;
}

export interface IViewRecipeData {
  data: IRecipe|undefined;
  handleDelete: (id: number) => void;
  handleEdit: (data: IRecipe) => void;
  closePage: () => void;
}

export interface IIngredient {
  ingredient: string;
}

export interface IError {
  name: string | undefined;
  ingredients: string | undefined;
}
