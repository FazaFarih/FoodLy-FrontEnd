import HookTest from "../hooks/HookTest"


function TestPage(){

  const {count, setCount} = HookTest()

  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="btn btn-primary mt-2" onClick={() => setCount(count + 1)}>Tolong Pencet</div>
          <p className="p-0">{count}</p>
        </div>
      </div>
    </div>
  )
}

export default TestPage