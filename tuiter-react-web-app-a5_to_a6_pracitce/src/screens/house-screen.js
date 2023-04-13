function HouseScreen(
    {
        house = {rooms: 3, baths: 2, sqft: 2000 }
    }) {
    // console.log(props)
    // const house = props.house
    // {
    //     rooms: 3,
    //     baths: 2,
    //     sqft: 2000
    //   }
    return (
        <div>
            <h2>House Screen</h2>
            <ul>
                <li>Rooms: {house.rooms}</li>
                <li>Baths: {house.baths}</li>
                <li>Sqft: {house.sqft}</li>
            </ul>
        </div>
    )
}
export default HouseScreen