import LeftSideBar from "@/components/LeftSideBar";
import MainComponent from "@/components/MainComponent";
import RightSection from "@/components/RightSection";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-white relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        <LeftSideBar />

        <MainComponent />

        <RightSection />
      </div>
    </div>
  );
};

export default Home;
