import "./styles.css"

export default function App(){
  return (
    <>
  <form className="new-item-form">
    <div classNme="form-row">
      <label htmlFor="item">New item</label>
      <input type="text" id="item" /> 
    </div>
  <button className="btn">Add</button>
  </form>
  <h1 className="header">To do List</h1>
  <ul className="list">
      <li>
        <label>
          <input type="checkbox" />
          Learn react states
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Learn appending children
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
  </ul>
  </>
  )
}