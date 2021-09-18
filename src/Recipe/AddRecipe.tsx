import { useEffect } from "react";
import { Button, Heading2, Input, Label, Paragraph, Span, Textarea, Wrapper } from "../styles";
import RecipeHook from "./Recipe_Logic";

const AddRecipe = () => {
  const { editData, setRecipe, initialState, error, recipe, handleBlur, handleIngredientChange, handleKeyPress, handleNameChange, onSubmit } = RecipeHook();

  useEffect(() => {
    if (editData) {
      setRecipe({ ...editData, ingredientText: editData.ingredients.join(",") });
    } else {
      setRecipe(initialState());
    }
  }, [editData, initialState, setRecipe]);

  useEffect(() => {
    return () => {
      setRecipe(initialState()); //reset page on close
    }
  }, [initialState, setRecipe])

  return (
    <Wrapper padding="30px 15px" borderLeft="3px solid #3d5a80" height="93vh">
      <Wrapper marginBottom="25px">
        <Heading2 className="title">{editData ? "Edit" : "Add"} Recipe</Heading2>
      </Wrapper>
      <Wrapper marginBottom="15px">
        <Paragraph fontSize="0.65rem" textAlign="center" fontWeight="300">
          Note:
        </Paragraph>
        <Paragraph fontSize="0.65rem" textAlign="center" fontWeight="300">
          Allowed special characters are hyphen(-), forward slash(/), comma(,), apostrophe('), brackets(()). Others will not work.
        </Paragraph>
      </Wrapper>
      <Wrapper marginBottom="10px" width="100%">
        <Wrapper flexDirection="row" justifyContent="space-between" paddingRight="2px">
          <Label htmlFor="name">
            Name*
          </Label>
          {error.name && <Span>{error.name}</Span>}
        </Wrapper>
        <Input type="text" name="name" id="name" placeholder="Food Name" value={recipe.name} onKeyPress={handleKeyPress} onChange={handleNameChange} onFocus={() => handleBlur("name")} />
      </Wrapper>
      <Wrapper marginBottom="5px" width="100%">
        <Wrapper flexDirection="row" justifyContent="space-between" paddingRight="2px">
          <Label htmlFor="ingredients">
            Ingredient*
          </Label>
          {error.ingredients && <Span>{error.ingredients}</Span>}
        </Wrapper>
        <Textarea name="ingredients" id="ingredients" placeholder="Comma,Seperated,Values" value={recipe.ingredientText} onKeyPress={handleKeyPress} onChange={handleIngredientChange} onFocus={() => handleBlur("ingredients")} />
      </Wrapper>
      <Wrapper marginTop="10px">
        <Button type="button" onClick={() => onSubmit()}>{editData ? "Edit" : "Add"}</Button>
      </Wrapper>
    </Wrapper>
  )
}

export default AddRecipe;