

export default function Spinner({ text }: any) {
    return (
        <div className="custom-loader-div">
            <div className="custom-loader"></div>
            <div>{text}</div>
        </div>
    )
}
