const STORE_KEY = process.env.REACT_APP_STORE_KEY || "";

//////////////////////////////
////// Store Services ///////
////////////////////////////

const AddNewItem = (item: string) => {
  return localStorage.setItem(STORE_KEY, item);
};

const GetItem = () => {
  return localStorage.getItem(STORE_KEY);
};

//////////////////////////////////
//////// Controller /////////////
////////////////////////////////

//Add to store controller
const AddToExistingItem = (item: any) => {
  const dataString = GetItem();
  if(!dataString) { // no data in store
    AddNewItem(JSON.stringify([item]));
    return [item];
  };
  const data = JSON.parse(dataString);
  const index = data.findIndex((value: any) => value.id === item.id);
  if(index < 0) { // new data addition
    data.push(item);
    AddNewItem(JSON.stringify(data));
    return data;
  }
  data[index] = item; // existing data
  AddNewItem(JSON.stringify(data));
  return data;
};

//Remove from store controller
const RemoveItem = (id: number) => {
  const dataString = GetItem();
  if(!dataString) return [];
  const data = JSON.parse(dataString);
  const filteredData = data.filter((item: any) => item.id !== id);

  AddNewItem(JSON.stringify(filteredData));
  return filteredData;
};

export {
  AddNewItem,
  GetItem,
  AddToExistingItem,
  RemoveItem
};