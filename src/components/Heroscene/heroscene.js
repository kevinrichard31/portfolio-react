import './style.css'


function Heroscene() {
    return (

        <div class="hero bg-base-200 min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Kevin Spider</h1>
                    <p class="py-6">
                        Le meilleur développeur de tout les temps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Heroscene;