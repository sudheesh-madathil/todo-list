function ListTask({ Props, Index, removeTask }) {
  return (
    <>
      <div className="list-task">
        {Props.title}
        <button
          onClick={() => {
            removeTask(Index);
          }}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </>
  );
}
export default ListTask;
