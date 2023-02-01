import "./AddItem.css";

const AddItem = (props) => {
  return (
    <form>
      <input placeHolder="add item" />
      <button onClick={props.add}>click me</button>
    </form>
  );
};

export default AddItem;
