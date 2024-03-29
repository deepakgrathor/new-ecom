import React, { memo } from "react";
import SectionTitle from "../../components/Common/SectionTitle";
import HomeBottomService from "../../components/Layout/Header/HomeBottomService";
import ButtonComp from "../../components/Buttons/ButtonComp";
import { HeaderBottomMenu } from "../../components/Layout/Header/HeaderBottomService";

const ServiceCategory = () => {
  console.log("service category");
  return (
    <>
      <div className="">
        <SectionTitle
          title="Recharge "
          SubTitle="& Pay Bills"
          description="Ease the transaction and payments hassle with tech that's convenient to use."
        />
        <div className="space-y-16">
          <HomeBottomService grid={4} data={HeaderBottomMenu} />
          <ButtonComp title="View All" width={32} />
        </div>
      </div>
    </>
  );
};

export default memo(ServiceCategory);
