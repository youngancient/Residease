import { AllListingStyles } from "@/styles/ComponentStyles/Dashboard/AllListingStyles";
import { InnerSection } from "@/styles/PageStyles/SectionStyles";
import { FunctionComponent } from "react";

export const AllListing:FunctionComponent =()=>{
    return(
        <InnerSection>
            <AllListingStyles>
            All listings
            </AllListingStyles>
        </InnerSection>
    )
}