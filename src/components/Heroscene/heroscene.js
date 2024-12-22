import './style.css'


function Heroscene() {
    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <div className="flex flex-col">
                    <div className="platypi-500 text-2xl md:text-3xl">Kevin Richard</div>

                    <div className="hidden md:block">Développeur FrontEnd React / Typescript</div>
                </div>
                    <p className="py-6">
                        META CERTIFIED | in progress
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Heroscene;