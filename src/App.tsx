import "./App.css";
import Home from "./app/components/home/Home";
function App() {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden text-isabelline-800">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,34,59,0.35),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(74,78,105,0.28),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(34,34,59,0.92)_0%,rgba(46,31,28,0.8)_45%,rgba(74,78,105,0.88)_100%)]" />
            </div>
            <Home />
        </div>
    );
}

export default App;
