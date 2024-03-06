import "./styles.css"

export default function App(){
  return <form className="new-item-form">
    <div classNme="form-row">
      <label htmlFor="item">New item</label>
      <input type="text" id="item" /> 
    </div>

  </form>
}