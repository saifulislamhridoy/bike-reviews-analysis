import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Home = () => {
    const img = "https://imgd.aeplcdn.com/1280x720/bw/models/husqvarna-vitpilen-250-standard20200225140033.jpg?q=80"
    const [reviews] = useReviews()
    const sliceReviews=reviews.slice(0,3)
    return (
        <div>
            <div className="h-full md:pt-20 pb-20 px-4 mx-auto max-w-7xl md:px-2">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-items-center content-center h-full">
                    <div className="order-2 md:order-1">
                        <h1 className="md:text-5xl text-3xl font-bold">Husqvarna Vitpilen 250</h1>
                        <h3 className="md:text-3xl text-2xl font-bold mt-3 text-slate-600">About Vitpilen 250</h3>
                        <p className="pt-2">Husqvarna Vitpilen 250 is a cafe racer bike available at a starting price of Rs. 2,10,179 in India. It is available in only 1 variant and 1 colour. The Husqvarna Vitpilen 250 is powered by 248.76cc BS6 engine which develops a power of 29.63 bhp and a torque of 24 Nm. With both front and rear disc brakes, Husqvarna Vitpilen 250 comes up with anti-locking braking system. This Vitpilen 250 bike weighs 166 kg and has a fuel tank capacity of 9.5 liters.The Husqvarna Vitpilen 250 is a quarter-litre, cafe racer-styled motorcycle which shares its underpinnings and engine with the KTM 250 Duke. The motorcycle will be sold in India through KTM dealerships and production is being carried out at Bajaj's facility in Chakan.</p>
                        <button className="bg-slate-500 mt-2 font-bold px-3 py-2 rounded text-white">Explore Now</button>
                    </div>
                    <div className="flex justify-center items-center order-1 md:order-2" >
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            <div className="grid justify-center mt-10">
            <h2 className="text-4xl font-bold text-center">Customer Reviews(6)</h2>
                <div className="grid grid-cols-3 gap-20 mt-10 mb-10">
                    {
                   sliceReviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;