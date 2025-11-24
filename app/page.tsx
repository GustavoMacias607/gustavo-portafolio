export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Hola, soy <span className="text-blue-600">Gustavo</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Desarrollador Full Stack apasionado por crear experiencias digitales increíbles.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Ver Proyectos
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Contacto
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Mis Habilidades holaaa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {['React & Next.js', 'Node.js & Express', 'Tailwind CSS', 'TypeScript', 'MongoDB', 'Git & GitHub'].map((skill, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-700">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Proyecto 1</h3>
              <p className="text-gray-600 mb-4">Descripción breve del proyecto y tecnologías utilizadas.</p>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">React</span>
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded">Node.js</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Proyecto 2</h3>
              <p className="text-gray-600 mb-4">Descripción breve del proyecto y tecnologías utilizadas.</p>
              <div className="flex gap-2">
                <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded">Next.js</span>
                <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}