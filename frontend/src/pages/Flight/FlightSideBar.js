import React from 'react'



      var someDate = new Date();
      var date = someDate.setDate(someDate.getDate());
      var defaultValue = new Date(date).toISOString().split("T")[0]
      

const FlightSideBar = () => {
  return (
    <div>
      This is sidiBar
      <div id="FlightForm"> 
        <form>
          <label>From</label>
            <select>
            <option value="Delhi">Delhi</option>
            <option value="Mumbhai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Silchar">Silchar</option>
            <option value="Chennai">Chennai</option>
            </select>
          <br/>
          <label>To</label>
          <select>
            <option value="Delhi">Delhi</option>
            <option value="Mumbhai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Silchar">Silchar</option>
            <option value="Chennai">Chennai</option>

          </select>
          <br></br>
          <label >Date</label>
          <input type="date" id="Date" name="Date" defaultValue={defaultValue}></input>
        </form>
      </div>
    </div>
  )
}

export default FlightSideBar
