import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import photo from "../components/EXHAUSTING_MEME.jpg";
import ChallengeService from "../services/challenge.service";

export default function Challanges() {
  const { id } = useParams();

  const [challenge, setChallenge] = useState({});

  useEffect(() => {
    async function getChallenge() {
      const challenges = await ChallengeService.get(id);
      console.log("challenges: ", challenges);

      setChallenge(challenges);
    }
    getChallenge();
  }, []);

  return (
    <div className="p-3 mb-2 bg-info text-dark text-justify text-center">
      <p className="text-uppercase font-weight-bold h-100">
        THIS WEEK’S CHALLENGE:
      </p>
      <br></br>
      <p>
        This week's challenge just launched. <br></br>
        You matched with <br></br>
        <p className="font-weight-bold font-size-20px">
          Rares Liscan <br></br>
        </p>
        based on the shared hobby of <b>{challenge.theme}</b> and your free
        time. <br></br>
        We advise you to do the challenge on{" "}
        {challenge.startDate.substring(0, 10)} and time{" "}
        {challenge.startDate.substring(11, 16)} because you and your colleague/s
        have a free time slot.
        <br></br>
        When you completed the challenge don't forget to upload your photos/
        videos and the short description abou t your experience during the
        challenge completion down below. Enjoy your experience, socialize, and
        most importantly, make friends and havde fun!!!
      </p>
      <br></br>
      <img src={photo} width="200" height="200" class="img-fluid"></img>
      <br></br>
      <br></br>
      <p>Here you can submit your photos/videos and the short description.</p>
      <a
        href="https://1drv.ms/u/s!AlglXL3r7VdRgjy1-emRh9zuh2oX?e=DJx8yy"
        className="btn btn-primary btn-lg active"
        role="button"
        aria-pressed="true"
        width="25"
        height="25"
      >
        submit
      </a>
    </div>
  );
}
