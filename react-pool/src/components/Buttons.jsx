export function Buttons({ fillPool, emptyPool }) {
  return (
    <div className='Buttons'>
      <button onClick={fillPool}>to fill</button>
      <button onClick={emptyPool}>to empty</button>
    </div>
  );
}