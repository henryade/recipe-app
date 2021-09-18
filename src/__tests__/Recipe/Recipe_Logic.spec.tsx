import RecipeHook from "../../Recipe/Recipe_Logic";
import { act, renderHook } from '@testing-library/react-hooks';
import RecipeList from "../../Recipe";
import AddRecipe from "../../Recipe/AddRecipe";
import "@testing-library/jest-dom/extend-expect";
import App from "../../App";
import { shallow } from "enzyme";

describe("Recipe Hook Test", () => {
  // mount(<App />)
  it('renders recipe page', () => {
    const app = shallow(<RecipeList />);
    expect(app.find(".title")).toHaveLength(1);
  });

  it('renders view recipe page', () => {
    const app = shallow(<AddRecipe />);
    expect(app.find(".title")).toHaveLength(1);
  });

  it('Renders app', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  const { result } = renderHook(RecipeHook)

  it("get all recipes from store", () => {
    let value;
    act(() => {
      value = result.current.GetItemsFromStore();
    })
    expect(value).toEqual([]);
  });

});
