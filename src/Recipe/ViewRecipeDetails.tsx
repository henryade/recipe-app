import { Wrapper, Header, Paragraph, ImageButton, Heading2, List, ListItem } from "../styles";
import { IViewRecipeData } from "./IRecipe";
import { CloseIcon, DeleteIcon, EditIcon } from "../utils/assets";
import { Capitalize } from "../utils/stringFormatter";

const ViewRecipeDetails = ({ data, handleEdit, handleDelete, closePage }: IViewRecipeData) => {
  return (
    <Wrapper borderLeft="3px solid #3d5a80" height="91.5vh" overflowY="auto">
      {!data && <Paragraph>No Recipe Selected</Paragraph>}
      {data && <Wrapper>
        <Header flexDirection="row" justifyContent="space-between" backgroundColor="#293241" paddingX="15px">
          <Wrapper paddingRight="5px">
            <Heading2 color="#e0fbfc" className="title">{data.name} Recipe</Heading2>
          </Wrapper>
          <Wrapper width="100px" flexDirection="row" justifyContent="space-between" paddingRight="15px" alignItems="center">
            <ImageButton color="#e0fbfc" onClick={() => handleEdit(data)}><EditIcon /> </ImageButton>
            <ImageButton color="#e0fbfc" onClick={() => handleDelete(data.id)}><DeleteIcon /> </ImageButton>
            <ImageButton color="#e0fbfc" onClick={() => closePage()}><CloseIcon /></ImageButton>
          </Wrapper>
        </Header>
        <Wrapper marginTop="10px" alignItems="center">
          <Heading2>Ingredients</Heading2>
        </Wrapper>
        <Wrapper paddingX="15px">
          <List>
            {data.ingredients.map((ingredient, index) => <ListItem key={data.id + index}>{Capitalize(ingredient)}</ListItem>)}
          </List>
        </Wrapper>
      </Wrapper>}
    </Wrapper>
  )
}

export default ViewRecipeDetails;