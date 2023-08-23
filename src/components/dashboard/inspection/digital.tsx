import { dataSelector } from "@/redux/dataSlice";
import { useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ContentSection, MiniSection } from "@/styles/PageStyles/SectionStyles";
import {
  HouseDetailsStyles,
  LargeTextStyles,
  MediumTextStyles,
} from "@/styles/ComponentStyles/Dashboard/HouseDetailsStyles";
import {
  BackBtn,
  Details,
  IDetails,
  MapComponent,
  PhotoGrid,
  PhotoSlider,
  PropertyOverview,
} from "../HouseDetails";
import { IHouse } from "../../../../types/House";
import { ILargeBtn, LargeBtn } from "@/components/Header/Header";
import { Empty } from "@/components/HouseCards/HouseList";
import {
  PadBottomStyles,
  SatisfiedStyles,
  TransparentBtnStyles,
  WatchVideoStyles,
} from "@/styles/ComponentStyles/Dashboard/Inspection/DigitalStyles";
import { GreaterThan } from "@/components/Icons/DashboardIcons";
import { FunctionComponent } from "react";
import { ComingSoonShort } from "@/components/Homepage/ComingSoon";

export const DigitalInspection = () => {
  const { user } = useAppSelector(userSelector);
  const { allHouses } = useAppSelector(dataSelector);

  // There's a bug here.
  // when the user navigates by typing the url, it shows empty
  const router = useRouter();
  const id = router.query.id as string;
  const [house, setHouse] = useState<IHouse | undefined>();
  useEffect(() => {
    allHouses && setHouse(allHouses.find((ele) => ele.id === id));
  }, [id, allHouses]);

  const [details, setDetails] = useState<IDetails>();
  useEffect(() => {
    setDetails({
      details: [
        { name: "Total Deal for house", id: "price", value: 1200000 },
        { name: "Contact details", id: "contact", value: "+234 419 8765 000" },
        { name: "Managing agent", id: "agent", value: "Residease" },
        {
          name: "Amenities",
          id: "amenities",
          value: ["School", "Hospital", "Power supply"],
        },
        { name: "Unit Type", id: "type", value: `${house?.type}` },
      ],
    });
  }, [house?.type]);

  // const goForPhysicalInspection = () => {
  //   router.push(`/dashboard/inspection/physical/${id}`);
  // };

  return (
    <MiniSection>
      <PadBottomStyles>
        <HouseDetailsStyles>
          <BackBtn path={`/dashboard/availableunits/${id}`} />
          {house ? (
            <>
              <div className="one">
                <LargeTextStyles>{house.name}</LargeTextStyles>
              </div>
              <div className="two">
                <WatchVideo />
              </div>
              <ContentSection>
                <div className="three-x">
                  <PropertyOverview />
                  <Satisfied id={id} />
                </div>
                <div className="three-y">
                  <Details details={details?.details} />
                </div>
              </ContentSection>
            </>
          ) : (
            <Empty msg="This Page is under construction" />
          )}
        </HouseDetailsStyles>
      </PadBottomStyles>
    </MiniSection>
  );
};

interface ISatisfied {
  id: string;
}
export const Satisfied: FunctionComponent<ISatisfied> = ({ id }) => {
  const router = useRouter();
  return (
    <SatisfiedStyles>
      <MediumTextStyles>Satisfied with Inspection</MediumTextStyles>
      <div className="three">
        <button type="button" className="yes">
          <p>Yes</p>
          <GreaterThan />
        </button>
        <LargeBtn
          text="Rent now"
          clickAction={() => router.push(`/dashboard/payments/${id}`)}
        />
        <TransparentBtn
          text="Physical Inspection"
          clickAction={() =>
            router.push(`/dashboard/inspection/physical/${id}`)
          }
        />
      </div>
    </SatisfiedStyles>
  );
};

export const TransparentBtn: FunctionComponent<ILargeBtn> = ({
  text,
  clickAction,
}) => {
  return (
    <TransparentBtnStyles onClick={clickAction}>{text}</TransparentBtnStyles>
  );
};

export const WatchVideo = () => {
  return (
    <WatchVideoStyles>
        <MediumTextStyles>Digital 3d Inspection</MediumTextStyles>
        <ComingSoonShort>Coming Soon</ComingSoonShort>
    </WatchVideoStyles>
  );
};
