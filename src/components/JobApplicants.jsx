"use client";

import CandidateList from "./CandidateList";
import { Drawer, DrawerContent } from "./ui/drawer";
import { ScrollArea } from "./ui/scroll-area";

const JobApplicants = ({
  showApplicantsDrawer,
  setShowApplicantsDrawer,
  showCurrentCandidateDetailsModal,
  setShowCurrentCandidateDetailsModal,
  currentCandidateDetails,
  setCurrentCandidateDetails,
  jobItem,
  jobApplication,
}) => {

  return (
    <Drawer onOpenChange={setShowApplicantsDrawer} open={showApplicantsDrawer}>
      <DrawerContent className="max-h-[50vh]">
        <ScrollArea className="h-auto overflow-y-auto">
          <CandidateList
            showCurrentCandidateDetailsModal={showCurrentCandidateDetailsModal}
            setShowCurrentCandidateDetailsModal={
              setShowCurrentCandidateDetailsModal
            }
            currentCandidateDetails={currentCandidateDetails}
            setCurrentCandidateDetails={setCurrentCandidateDetails}
            jobApplication={jobApplication}
          />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default JobApplicants;
