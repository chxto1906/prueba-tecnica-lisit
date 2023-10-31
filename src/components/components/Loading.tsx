

const Loading = () => {
  return (
    <div className="bg-gray-100 py-8 min-h-screen">
      <div className="container mx-auto min-h-screen">
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            Cargando ...
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-secondary"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading