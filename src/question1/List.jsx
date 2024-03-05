export default function List({ list, setList }) {
  function handleDelete(id) {
    setList(list.filter((item) => item.id !== id));
  }
  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button onClick={() => handleDelete(item.id)}>
              Remove Comment
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
