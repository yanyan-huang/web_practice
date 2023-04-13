export default function DescructorScreen () {
    const house = {
        rooms: 30,
        baths: 20,
        sqft: 2000
    }

    const {rooms, baths, sqft} = house
    // rooms = house.rooms
    // baths = house.baths
    // sqft = house.sqft

    const colors = ['warning', 'danger', 'success']
    const [warning, danger, success] = colors
    return (
        <div>
            <h1>Descructor Screen</h1>
            
            <h2>Descructing objects</h2>

            <h3>House</h3>
            Rooms: {rooms} <br/>
            Baths: {baths} <br/>
            Sqft: {sqft} <br/>

            <h3>Colors</h3>
            Warning: {warning} <br/> 
            Danger: {danger} <br/>
            Success: {success} <br/>

        </div>
    )
}
