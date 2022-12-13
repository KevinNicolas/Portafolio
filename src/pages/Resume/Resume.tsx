import { ResumeStyles } from "./Resume.styles";
import { Introduction, Divisor, DownloadCv, KnowTecnologies, ProfileSelect, Projects } from "./local-components";

export const Resume = () => {
  return (
    <ResumeStyles>
      <Introduction />
      {/* <ProfileSelect /> */}
      <Divisor />
      <KnowTecnologies />
      <Projects />
      <DownloadCv />
    </ResumeStyles>
  );
};
