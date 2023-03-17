
const Chessbord = (socket:any) => {

    let board = [];
    const xAxis = ['0', '1', '2', '3', '4', '5', '6', '7']
    const yAxis = ['0', '1', '2', '3', '4', '5', '6', '7'];

    socket.socket.emit('test',"Test Data");

    for (let y = yAxis.length - 1; y >= 0; y--) {
        for (let x = 0; x < xAxis.length; x++) {

            const number = x + y + 2;

            if (number % 2 === 0) {
                board.push({ x, y, flag: true })
            } else {
                board.push({ x, y, flag: false })
            }
        }
    }

    return (
        <div className='chessbord'>
            {board.map(board => {
                const { x, y, flag } = board;
                return <span className={`chess_tile ${flag ? 'black_tile' : 'white_tile'}`}>[{x}{y}]</span>
                
            })}
        </div>
    )
}

export default Chessbord
