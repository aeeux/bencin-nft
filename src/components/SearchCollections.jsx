import { Select } from "antd";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { getCollectionsByChain } from "helpers/collections";

function SearchCollections({ setInputValue }) {
  const { Option } = Select;
  const { chainId } = useMoralisDapp();
  const NFTCollections = getCollectionsByChain(chainId);

  function onChangeHandler(value) {
    setInputValue(value);
  }

  return (
    <div>
      <Select
        showSearch
        style={{ width: "650px", marginLeft: "50px", marginRight: "20px" }}
        placeholder="Find a Collection..."
        optionFilterProps="children"
        onChange={onChangeHandler}
      >
        {NFTCollections &&
          NFTCollections.map((collection, i) => (
            <Option value={collection.addrs} key={i}>
              {collection.name}
            </Option>
          ))}
      </Select>
    </div>
  );
}

export default SearchCollections;
