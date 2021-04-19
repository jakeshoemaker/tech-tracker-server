import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'


const Chart = () => {
    const DUMMY_DATA = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
    return (
        <LineChart width={400} height={400} data={DUMMY_DATA}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    )
}

export default Chart