
//otra forma de pasar props a un componente es con children, asi puedo pasar mucho html

const Error = ({ children }) => {
    return (
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>{children}</p>
        </div>
    )
}

export default Error
