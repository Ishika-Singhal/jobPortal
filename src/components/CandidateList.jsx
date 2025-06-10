"use client";

import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";

const CandidateList = ({
  currentCandidateDetails,
  setCurrentCandidateDetails,
  showCurrentCandidateDetailsModal,
  setShowCurrentCandidateDetailsModal,
  jobApplication
}) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 p-10 md:grid-cols-2 lg:grid-cols-3">
        {jobApplication && jobApplication.length > 0
          ? jobApplication.map((jobApplicationItem) => (
              <div className="bg-white shadow-lg w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                <div className="px-4 my-6 flex justify-between items-center">
                  <h3 className="text-lg font-bold">
                    {jobApplicationItem?.name}
                  </h3>
                  <Button className="disabled:opacity-65 flex h-11 items-center justify-center px-5" onClick={()=>setShowCurrentCandidateDetailsModal(true)}>
                    View Profile
                  </Button>
                </div>
              </div>
            ))
          : null}
      </div>

      <Dialog open={showCurrentCandidateDetailsModal} onOpenChange={setShowCurrentCandidateDetailsModal}>
        <DialogContent>
           
        </DialogContent>

      </Dialog>
    </>
  );
};

export default CandidateList;
