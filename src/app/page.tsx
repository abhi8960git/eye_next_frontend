import Image from "next/image";
import HeroBanner from "@/components/Home/HeroBanner";
import Wrapper from "@/components/Wrapper";
import Designers from "@/components/Home/ExploreDesigner/Designers";
import CategorySection from "@/components/Home/CategorySection/CategorySection";
import ExploreSection from "@/components/Home/ExploreProducts/ExploreProducts";
import BestSellingSection from "@/components/Home/BestSeller/BestSellingSection";
import ExploreDesigns from "@/components/Home/ExploreDesigns/ExploreDesigns";
import FeatureStrip from "@/components/Home/FeatureStrip/FeatureStrip";
import About from "@/components/Home/About/About";
import PersonalizedPicks from "@/components/Home/PersonalizedPicks/PersonalizedPicks";
import DeauthHomepage from "@/components/NewHomePage";
import ArtistToFollowPage from "@/components/NewArtistToFollow";
import { CategoriesSection } from "@/components/NewCategorySection/CategoriesSection";
import LatestLaunchSection from "@/components/LatestLaunch";
import DesignsAndLatestLaunch from "@/components/DesignsAndLatestLaunch";
import DeauthFooter from "@/components/NewFooter/footer/DeauthFooter";

export default function Home() {
  return (
    <div className="overflow-hidden">
    {/* // <main className="flex min-h-screen flex-col items-center justify-between md:gap-10 gap-5">
    //   <div className="text-start bg-red-400">
    //     <HeroBanner />
    //   </div>
    //   <Wrapper>
    //     <div>
    //       <BestSellingSection />
    //     </div>
    //   </Wrapper>
    //   <div className=" w-screen ">
    //     <FeatureStrip />
    //   </div>
    //   <Wrapper>
    //     <div>
    //       <Designers />
    //     </div>
    //     <div className="">
    //       <About />
    //     </div>
    //   </Wrapper>
    //   <div className=" w-screen ">
    //     <CategorySection />
    //   </div>
    //   <Wrapper>
    //     <div>
    //       <ExploreSection />
    //     </div>
    //   </Wrapper>

    //   <div className="bg-accent w-screen lg:px-32 mb-10">
    //     <ExploreDesigns />
    //   </div>
    //   <Wrapper>
    //     <div>
    //       <PersonalizedPicks />
    //     </div>
    //   </Wrapper>
    // </main> */}
      <DeauthHomepage />
      <ArtistToFollowPage/>
      <CategoriesSection/>
      <LatestLaunchSection/>
      <DesignsAndLatestLaunch/>
      <DeauthFooter/>

    </div>
  );
}
