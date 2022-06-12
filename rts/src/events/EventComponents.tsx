const EventComponents: React.FC = () => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  const onDragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Dragging")
  }
  return <div>
    <input onChange={onChangeHandler} />
    <div draggable onDragStart={onDragHandler}>Drag Me!</div>
  </div>
}
export default EventComponents