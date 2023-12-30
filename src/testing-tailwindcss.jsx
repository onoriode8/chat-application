import appleImage from './assests/apple.jpg';

const TestingtailwindCss = () => {
    return (
        <div className="">
            <div className="rounded-xl bg-black flex items-center p-6 shadow-lg m-6 space-x-3">
                <div><img className="md:w-35 sm:w-25 sm:h-20 md:h-38  lg:h-30 lg:w-30 rounded-2xl" src={appleImage} alt="" /></div>
                <div className=" font-medium text-slate-500">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero aliquam eaque dignissimos</p>
                    <p>nihil ea neque quaerat atque autem harum dolor rem placeat delectus praesentium fuga, numquam veniam tempore minus?</p>
                </div>
                <div className="font-medium text-slate-500">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero aliquam eaque dignissimos</p>
                    <p>nihil ea neque quaerat atque autem harum dolor rem placeat delectus praesentium fuga, numquam veniam tempore minus?</p>
                </div>
            </div>
            <div className="">
                <button 
                    className="bg-white shadow p-2 ml-6 mr-5 hover:bg-sky-700
                     hover:text-white hover:rounded-xl">Learn More</button>
                <button className="bg-white shadow p-2 m-2">Get Started</button>
            </div>
        </div>
    )
}

export default TestingtailwindCss;